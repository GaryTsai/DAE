//////////////////////////////////////純每15分鐘平均用電需量//未使用
function barchart2(data) {
    //console.log(data);
    var chart = AmCharts.makeChart("chartdiv2", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": data,
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>kW",
            "fillColorsField": "color",
            "fillAlphas": 1,
            "lineAlpha": 0.1,
            "type": "column",
            "valueField": "Average_demand"
        }],
        "depth3D": 20,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "Time",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 90
        },
        "categorxAxis": {
            "gridPosition": "start",
            "labelRotation": 0
        },
        "export": {
            "enabled": true
        }

    });
}