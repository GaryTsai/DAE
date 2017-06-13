from . import db


class Demand(db.Model):
    _tablename_ = 'demand'
    id = db.Column(db.INTEGER, primary_key=True)
    address = db.Column(db.VARCHAR(20))
    channel = db.Column(db.INTEGER)
    model = db.Column(db.VARCHAR(20))
    datetime = db.Column(db.DATETIME)
    demand_min = db.Column(db.FLOAT(precision='20,2'))
    demand_quarter = db.Column(db.FLOAT(precision='20,2'))
    R_value = db.Column(db.FLOAT(precision='20,2'))
    S_value = db.Column(db.FLOAT(precision='20,2'))
    T_value = db.Column(db.FLOAT(precision='20,2'))
    Total_value = db.Column(db.FLOAT(precision='20,2'))

    def __init__(self, address, channel, model, datetime,
                 demand_min, demand_quarter, R_value, S_value,
                 T_value, Total_value):
        self.address = address
        self.channel = channel
        self.model = model
        self.datetime = datetime
        self.demand_min = demand_min
        self.demand_quarter = demand_quarter
        self.R_value = R_value
        self.S_value = S_value
        self.T_value = T_value
        self.Total_value = Total_value
