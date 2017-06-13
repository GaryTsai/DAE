/*每日最大需量*/

function daily_maxDemand(data) {
    var chart = AmCharts.makeChart("daily_maxDemand", {
        "type": "serial",
        "theme": "light",
        "dataProvider": data,
        "legend": {
            // "equalWidths": false,
            "useGraphSettings": true,
            "valueAlign": "left",
            "valueWidth": 120
        },
        "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>kW",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "title": "最高需量",
            "legendValueText": "[[value]] Watt",
            "valueField": "peak_demand"
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "time",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        },

    });


}
//每日最大需輛區間
function daily_demand(data) {

    var chart = AmCharts.makeChart("daily_maxDemand_period", {
        "type": "serial",
        //圖例
        "mouseWheelZoomEnabled": false,
        "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
        "legend": {
            // "equalWidths": false,
            "useGraphSettings": true,
            "valueAlign": "left",
            "valueWidth": 120
        },
        //資料
        "dataProvider": data["demands"],
        "valueAxes": [
            //Demand值軸
            {
                "id": "demandAxis",
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.5,
                "position": "left",
                "title": "kW",
                "minimum": 0
            },
        ],
        "gridAboveGraphs": true,
        "graphs": [{
            "id": "g1",
            "balloonText": "<span style='font-size:12px; font-family:Microsoft JhengHei;'> 時間:[[category]]<br><b>需量:[[value]]kW</b>[[additional]]</span>",
            "bullet": "round",
            "bulletsize": 0.5,
            "bulletBorderThickness": 1.5,
            "bulletBorderAlpha": 0.5,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "balloon": {
                "drop": false
            },
            "hideBulletsCount": 24,
            "legendValueText": "[[value]] kW",
            "title": "每10秒功率",
            "labelPosition": "right",
            "valueField": "Value",
            "valueAxis": "demandAxis",
            "lineColor": " #1f77b4",
            "lineThickness": 2.5
        }, ],
        "chartScrollbar": {
            "graph": "g1",
            "autoGridCount": true,
            "scrollbarHeight": 40,
            "color": "#000000"
        },
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "categoryBalloonDateFormat": "MMM DD,JJ:NN:SS",
            "cursorPosition": "mouse",
            "cursorColor": "#FFFFFF",
            "cursorAlpha": 0
        },
        "valueScrollbar": {
            "autoGridCount": true,
            "color": "#000000",
            "scrollbarHeight": 50
        },
        "categoryField": "time",
        "categoryAxis": {
            "minPeriod": "10ss",
            "parseDates": true
        },
    });


}
/*該月前三大需量*/
function Demand_high(data) {
    var chart = AmCharts.makeChart("Demand_high", {
        "type": "serial",
        "theme": "light",
        "dataProvider": data,
        "legend": {
            // "equalWidths": false,
            "useGraphSettings": true,
            "valueAlign": "left",
            "valueWidth": 120
        },
        "valueAxes": [{
            "gridColor": "#FFFFFF",
            "gridAlpha": 0.2,
            "dashLength": 0
        }],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>kW",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "title": "最高需量",
            "legendValueText": "[[value]] Watt",
            "valueField": "peak_demand"
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "time",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20,
        },

    });
}
/*用電折線圖*/
function power(divs, data) {
    for (var i in divs) {
        if (data[i] !== undefined) {
            console.log(i + " " + divs[i] + "\n" + data[i]["demands"])
            var chart = AmCharts.makeChart(divs[i], {
                "type": "serial",
                //圖例
                "mouseWheelZoomEnabled": false,
                "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
                "legend": {
                    // "equalWidths": false,
                    "useGraphSettings": true,
                    "valueAlign": "left",
                    "valueWidth": 120
                },
                //資料
                "dataProvider": data[i]["demands"],
                "valueAxes": [
                    //Demand值軸
                    {
                        "id": "demandAxis",
                        "gridColor": "#FFFFFF",
                        "gridAlpha": 0.5,
                        "position": "left",
                        "title": "kW",
                        "minimum": 0
                    },
                ],
                "gridAboveGraphs": true,
                "graphs": [{
                    "id": "g1",
                    "balloonText": "<span style='font-size:12px; font-family:Microsoft JhengHei;'> 時間:[[category]]<br><b>需量:[[value]]kW</b>[[additional]]</span>",
                    "bullet": "round",
                    "bulletsize": 0.5,
                    "bulletBorderThickness": 1.5,
                    "bulletBorderAlpha": 0.5,
                    "bulletColor": "#FFFFFF",
                    "useLineColorForBulletBorder": true,
                    "balloon": {
                        "drop": false
                    },
                    "hideBulletsCount": 24,
                    "legendValueText": "[[value]] kW",
                    "title": "每10秒功率",
                    "labelPosition": "right",
                    "valueField": "Value",
                    "valueAxis": "demandAxis",
                    "lineColor": " #1f77b4",
                    "lineThickness": 2.5
                }, ],
                "chartScrollbar": {
                    "graph": "g1",
                    "autoGridCount": true,
                    "scrollbarHeight": 40,
                    "color": "#000000"
                },
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "categoryBalloonDateFormat": "MMM DD,JJ:NN:SS",
                    "cursorPosition": "mouse",
                    "cursorColor": "#FFFFFF",
                    "cursorAlpha": 0
                },
                "valueScrollbar": {
                    "autoGridCount": true,
                    "color": "#000000",
                    "scrollbarHeight": 50
                },
                "categoryField": "time",
                "categoryAxis": {
                    "minPeriod": "10ss",
                    "parseDates": true
                },
            });
        }
    }
}