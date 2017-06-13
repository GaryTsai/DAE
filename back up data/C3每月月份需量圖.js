月份測試圖

function barchart() {

    var chart = c3.generate({
        bindto: '#visualisation2',
        data: {
            type: 'bar',
            json: [{
                    'Month': '1',
                    'Demand': 100
                },
                {
                    'Month': '2',
                    'Demand': 200
                },
                {
                    'Month': '3',
                    'Demand': 300
                }, {
                    'Month': '4',
                    'Demand': 100
                },
                {
                    'Month': '5',
                    'Demand': 200
                },
                {
                    'Month': '6',
                    'Demand': 300
                }, {
                    'Month': '7',
                    'Demand': 100
                },
                {
                    'Month': '8',
                    'Demand': 200
                },
                {
                    'Month': '9',
                    'Demand': 300
                }, {
                    'Month': '10',
                    'Demand': 100
                },
                {
                    'Month': '11',
                    'Demand': 200
                },
                {
                    'Month': '12',
                    'Demand': 300
                }

            ],
            keys: {
                x: 'Month',
                value: ['Demand']
            }
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        bar: {
            width: {
                ratio: 0.9
            }
        }
    });
}