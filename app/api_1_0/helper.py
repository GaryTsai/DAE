import datetime
import calendar
import time


def get_interval_of_day(today):
    today = datetime.datetime.strptime(today, '%Y-%m-%d')
    return (datetime.datetime.combine(today, datetime.time.min),
            datetime.datetime.combine(today, datetime.time.max))


def get_interval_of_month(today):
    today = datetime.datetime.strptime(today, '%Y-%m-%d')
    _, last_day_num = calendar.monthrange(today.year, today.month)
    first_date = datetime.date(today.year, today.month, 1)
    last_date = datetime.date(today.year, today.month, last_day_num)

    return (datetime.datetime.combine(first_date, datetime.time.min),
            datetime.datetime.combine(last_date, datetime.time.max))
