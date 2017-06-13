function barchart1(data) {
    var chart = AmCharts.makeChart("chartdiv1", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": data,
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 1,
            "lineAlpha": 0.1,
            "type": "column",
            "valueField": "Peak_count"
        }],
        "depth3D": 20,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "Times",
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
