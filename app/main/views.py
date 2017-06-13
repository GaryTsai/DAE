from flask import render_template
from . import main


@main.route('/')
def index():
    return render_template('index.html')
@main.route('/chart-flot')
def chart_flot():
    return render_template('chart-flot.html')
@main.route('/chart-other')
def chart_other():
    return render_template('chart-other.html')
@main.route('/demand-analysis')
def demand_analysis():
    return render_template('demand-analysis.html')
