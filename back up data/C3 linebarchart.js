/////////////////////////////////////////C3.js圖 未使用
function linebarchart() {
    var chart = c3.generate({
        bindto: '#linebarchart',


        data: {
            x: 'Time',
            xFormat: '%H:%M:%S', // how the date is parsed
            json: [{
                    Time: "00:15:00",
                    Peak_count: '12',
                    Average_Demand: '200',
                    Workday_count: '20',
                    Workday_Demand: '400'
                },
                {
                    Time: "00:30:00",
                    Peak_count: '15',
                    Average_Demand: '100',
                    Workday_count: '30',
                    Workday_Demand: '400'
                },
                {
                    Time: "00:45:00",
                    Peak_count: '20',
                    Average_Demand: '300',
                    Workday_count: '20',
                    Workday_Demand: '500'
                },
                {
                    Time: "01:00:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "01:15:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "01:30:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "01:45:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "02:00:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "02:15:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                },
                {
                    Time: "02:30:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "02:45:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "03:00:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "03:15:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "03:30:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "03:45:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }, {
                    Time: "04:00:00",
                    Peak_count: '28',
                    Average_Demand: '400',
                    Workday_count: '5',
                    Workday_Demand: '500'
                }
            ],
            keys: {
                //                x: 'name', // it's possible to specify 'x' when category axis
                x: 'Time',
                value: ['Peak_count', 'Average_Demand', 'Workday_count', 'Workday_Demand']
            },
            axes: {
                Average_Demand: 'y2',
                Workday_Demand: 'y2'
            },
            types: {
                Peak_count: 'bar',
                Workday_count: 'bar'
            }

        },
        bar: {
            width: {
                ratio: 0.9 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        },
        title: {
            text: 'Peak_count-Demand Diagram'
        },
        tooltip: {
            grouped: false // Default true
        },
        axis: {
            x: {
                label: {
                    text: 'Time',
                    position: 'outer-center'
                },
                type: 'timeseries',
                tick: {
                    format: ' %H:%M:%S' // how the date is displayed
                }
            },
            y: {
                show: true,
                label: {
                    text: 'Peak_count',
                    position: 'outer-middle'
                },


            },
            y2: {
                show: true,
                label: {
                    text: 'kW',
                    position: 'outer-middle'
                }
            }
        }
    });
}