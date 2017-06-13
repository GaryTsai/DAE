from flask import jsonify, request
from sqlalchemy import func, and_, or_, between, exists
from . import api
from datetime import timedelta
from decimal import Decimal
import datetime
import math
import json
from .. import db
from ..models import Demand
from . import helper


@api.route('/demand', methods=['POST', 'GET'])
def demand_post():
    if request.method == 'POST':
        if request.is_json:
            req_json = request.get_json()
            print(type(req_json))
            insert_data = Demand(
                req_json['address'],
                req_json['channel'],
                req_json['model'],
                req_json['datetime'],
                req_json['demand_min']['value'],
                req_json['demand_quarter']['value'],
                req_json['instantaneous_power'][0]['value'],
                req_json['instantaneous_power'][1]['value'],
                req_json['instantaneous_power'][2]['value'],
                req_json['instantaneous_power'][3]['value'])
            db.session.add(insert_data)
            db.session.commit()

    return jsonify({"message": "feedback success"}), 201


'''
@api.route('/demand2', methods=['POST', 'GET'])
def demand_post():
    if request.method == 'POST':
        print(request.is_json)

        if request.is_json:
            print("json received.")
            req_json = request.get_json()
            print(req_json['instantaneous_power'][0]['tag'])
            insert_data = Demand(
                req_json['address'],
                req_json['channel'],
                req_json['model'],
                req_json['datetime'],
                req_json['demand_min']['value'],
                req_json['demand_quarter']['value'],
                req_json['instantaneous_power'][0]['value'],
                req_json['instantaneous_power'][1]['value'],
                req_json['instantaneous_power'][2]['value'],
                req_json['instantaneous_power'][3]['value'])
            db.session.add(insert_data)
            db.session.commit()

    return jsonify({"message": "feedback success"}), 201
'''


@api.route('/demand_min')
def demand_min():
    # Get the identification of the device
    req_address = request.args.get('address', default="0", type=str)
    req_channel = request.args.get('channel', default="0", type=str)

    # Try get data of the latest instantaneous power
    power_data = db.session.query(Demand.datetime, Demand.demand_min).filter(
        Demand.address == req_address,
        Demand.channel == req_channel).order_by(Demand.datetime.desc()).first()

    # Pack the result
    data_output = {}
    if power_data:
        data_output['time'] = power_data.datetime.strftime("%Y-%m-%d %H:%M:%S")
        data_output['demand_min'] = power_data.demand_min

    return jsonify(data_output), 201


@api.route('/peak_period_in_day')
def get_peak_period_in_day():
        # Get the identification of the device, and the time to check
    req_address = request.args.get('address', default="0", type=str)
    req_channel = request.args.get('channel', default="0", type=str)
    req_datetime = request.args.get('datetime',
                                    default=datetime.datetime.now().strftime("%Y-%m-%d"),
                                    type=str)

    req_interval = helper.get_interval_of_day(req_datetime)

    # Try get data of the latest instantaneous power
    power_data = db.session.query(Demand.datetime, Demand.demand_quarter).filter(
        Demand.address == req_address,
        Demand.channel == req_channel,
        func.SECOND(Demand.datetime) == 0,
        Demand.datetime.between(
            *req_interval)).order_by(Demand.demand_quarter.desc()).first()

    data_output = {}
    final_data_output = {}
    if power_data:
        data_output['time'] = power_data.datetime.strftime("%Y-%m-%d %H:%M:%S")
        data_output['peak_demand'] = power_data.demand_quarter
    final_data_output['peak'] = data_output
    date = power_data.datetime
    interval_start = date - timedelta(minutes=30)
    interval_end = date + timedelta(minutes=15)

    interval_power_data = db.session.query(Demand.datetime, Demand.Total_value).filter(
        Demand.address == req_address,
        Demand.channel == req_channel,
        Demand.datetime.between(interval_start, interval_end))

    # Pack the result

    final_data_output['demands'] = []
    for data in interval_power_data:
        final_data_output['demands'].append({'time': data.datetime.strftime("%Y-%m-%d %H:%M:%S"),
                                             'Value': data.Total_value})

    return jsonify(final_data_output), 201


@api.route('/peak_period_everyday_in_month')
def get_peak_period_everyday_in_month():
        # Get the identification of the device, and the time to check
    req_address = request.args.get('address', default="0", type=str)
    req_channel = request.args.get('channel', default="0", type=str)
    req_datetime = request.args.get('datetime',
                                    default=datetime.datetime.now().strftime("%Y-%m-%d"),
                                    type=str)

    req_interval = helper.get_interval_of_month(req_datetime)
    power_data = []
    data_output = []
    date = req_interval[0]
    # Try get data of the latest instantaneous power
    for i in range(req_interval[0].day, req_interval[1].day):
        interval_start = req_interval[0] + timedelta(hours=24 * i - 24)
        interval_end = req_interval[0] + timedelta(hours=24 * i)

        power_data = db.session.query(Demand.datetime, Demand.demand_quarter).filter(
            Demand.address == req_address,
            Demand.channel == req_channel,
            func.DAY(Demand.datetime) == interval_start.day,
            Demand.datetime.between(
                interval_start, interval_end)).order_by(Demand.demand_quarter.desc()).first()

    # Pack the result
        if(power_data):
            data_output.append({'time': power_data.datetime.strftime("%Y-%m-%d %H:%M:%S"),
                                'peak_demand': power_data.demand_quarter})

    return jsonify(data_output), 201


@api.route('/peak_periods_in_month')
def get_peak_periods_in_month():
    # Get the identification of the device, and the time to check
    req_address = request.args.get('address', default="0", type=str)
    req_channel = request.args.get('channel', default="0", type=str)
    req_datetime = request.args.get('datetime',
                                    default=datetime.datetime.now().strftime("%Y-%m-%d"),
                                    type=str)

    req_interval = helper.get_interval_of_month(req_datetime)

    # Try get data of the latest instantaneous power
    power_data = db.session.query(Demand.datetime, Demand.demand_quarter).filter(
        Demand.address == req_address,
        Demand.channel == req_channel,
        or_(
            func.MINUTE(Demand.datetime) == 0,
            func.MINUTE(Demand.datetime) == 15,
            func.MINUTE(Demand.datetime) == 30,
            func.MINUTE(Demand.datetime) == 45,
            func.MINUTE(Demand.datetime) == 60),
        func.SECOND(Demand.datetime) == 0,
        Demand.datetime.between(
            *req_interval)).order_by(Demand.demand_quarter.desc()).order_by(Demand.datetime).limit(3)

    # Pack the result
    data_output = []
    if power_data:
        for idx in range(power_data.count()):
            data_output.append(
                {'peak_demand': power_data[idx].demand_quarter,
                 'time': power_data[idx].datetime.strftime("%Y-%m-%d %H:%M:%S")})

    return jsonify(data_output), 201


@api.route('/peak_periods_in_month_interval')
def get_peak_periods_in_month_interval():
    # Get the identification of the device, and the time to check
    req_address = request.args.get('address', default="0", type=str)
    req_channel = request.args.get('channel', default="0", type=str)
    req_datetime = request.args.get('datetime',
                                    default=datetime.datetime.now().strftime("%Y-%m-%d"),
                                    type=str)

    req_interval = helper.get_interval_of_month(req_datetime)

    # Try get data of the latest instantaneous power
    power_data = db.session.query(Demand.datetime, Demand.demand_quarter).filter(
        Demand.address == req_address,
        Demand.channel == req_channel,
        or_(
            func.MINUTE(Demand.datetime) == 0,
            func.MINUTE(Demand.datetime) == 15,
            func.MINUTE(Demand.datetime) == 30,
            func.MINUTE(Demand.datetime) == 45,
            func.MINUTE(Demand.datetime) == 60),
        func.SECOND(Demand.datetime) == 0,
        Demand.datetime.between(
            *req_interval)).order_by(Demand.demand_quarter.desc()).order_by(Demand.datetime).limit(3)

    # Pack the result
    final_data_output = []
    if power_data:
        for idx in range(power_data.count()):
            data_output = {}
            data_output['peak'] = {'peak_demand': power_data[idx].demand_quarter,
                                   'time': power_data[idx].datetime.strftime("%Y-%m-%d %H:%M:%S")}

            date = power_data[idx].datetime

            interval_start = date - timedelta(minutes=30)
            interval_end = date + timedelta(minutes=15)

            interval_power_data = db.session.query(Demand.datetime, Demand.Total_value).filter(
                Demand.address == req_address,
                Demand.channel == req_channel,
                Demand.datetime.between(interval_start, interval_end))

            data_output['demands'] = []
            for data in interval_power_data:
                data_output['demands'].append(
                    {'time': data.datetime.strftime("%Y-%m-%d %H:%M:%S"),
                     'Value': data.Total_value})
            final_data_output.append(data_output)

    return jsonify(final_data_output), 201
