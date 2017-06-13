$(document).ready(function () {
    // $.ajax({
    //         type: "GET", //傳值方式有分 post & get
    //         url: "/api/v1.0/", //第一筆用電折線圖
    //         dataType: 'json',
    //         data: {
    //             //傳送2017/06取得資料格式為該月第一筆最大需量的270筆(每10秒)如2017-06-10 12:15-12:45
    //         },
    //         success: function (meter_count) {
    //            meter(meter_count);
    //         },
    //         error: function () {
    //             alert("no data");
    //         }
    //     });
    $('#load').click(function () {
        //該月每日最大需量
        if ($("#datetime").val() == "") {
            alert("請選擇日期");
            return;
        }
        var spinner_daily_maxDemand = show_spinner($("#daily_maxDemand"));
        $.ajax({
            type: "GET", //傳值方式有分 post & get
            url: "/api/v1.0/peak_period_everyday_in_month", //第一筆用電折線圖
            dataType: 'json',
            data: {
                "address": "0",
                "channel": "0",
                "datetime": $("#datetime").val()
                //傳送2017/06取得資料格式為該月第一筆最大需量的270筆(每10秒)如2017-06-10 12:15-12:45
            },
            success: function (response) {
                daily_maxDemand(response);
                remove_spinner(spinner_daily_maxDemand);
            },
            error: function () {
                alert("no data");
            }
        });



        //每日最大需量區間

        var spinner_daily_maxDemand_period = show_spinner($("#daily_maxDemand_period"));
        $.ajax({
            type: "GET", //傳值方式有分 post & get
            url: "/api/v1.0/peak_period_in_day", //第一筆用電折線圖
            dataType: 'json',
            data: {
                "address": "0",
                "channel": "0",
                "datetime": $("#datetime").val()
                //傳送2017/06取得資料格式為該月第一筆最大需量的270筆(每10秒)如2017-06-10 12:15-12:45
            },
            success: function (response) {
                daily_demand(response);
                remove_spinner(spinner_daily_maxDemand_period);
            },
            error: function () {
                alert("no data");
            }
        });

        //該月前三高需量

        var spinner_Demand_high = show_spinner($("#Demand_high"));
        $.ajax({
            type: "GET", //傳值方式有分 post & get
            url: "/api/v1.0/peak_periods_in_month", //第一筆用電折線圖
            dataType: 'json',
            data: {
                "address": "0",
                "channel": "0",
                "datetime": $("#datetime").val()
                //傳送2017/06取得資料格式為該月第一筆最大需量的270筆(每10秒)如2017-06-10 12:15-12:45
            },
            success: function (response) {
                Demand_high(response);
                remove_spinner(spinner_Demand_high);
            },
            error: function (response) {
                alert("no data");
            }
        });
        Demand_high();

        //最高需量折線圖
        $(".col-sm-12> nav > ul > li > a").click(function () {
            var data_select = $(this).text();
            if (data_select = "最高需量用電折線圖") {
                first_graph();
                //second_graph();
                //third_graph();
            }
        });

    });
});

// function meter(meterdata) {
//     for (var meter in meterdata) {
//         $("#showmeter").append('<div class="info-box red-bg">\
//                             <div class="count">' +meter["name"]+ meter["channel"] + '/' + meter["address"] + '</div>\
//                             <button type="button" class="btn btn-info col-md-12" style="border-radius:10px;">\
//                                 <div style="font-size: 18px ; font-family:Microsoft JhengHei;">用電資訊</div>\
//                             </button>\
//                         </div>');
//     }
// }
function first_graph() {

    var spinner_first_graph = show_spinner($("#first_graph"));
    var spinner_second_graph = show_spinner($("#second_graph"));
    var spinner_third_graph = show_spinner($("#third_graph"));
    $.ajax({
        type: "GET", //傳值方式有分 post & get
        url: "/api/v1.0/peak_periods_in_month_interval", //第一筆用電折線圖
        dataType: 'json',
        data: {
            "address": "0",
            "channel": "0",
            "datetime": $("#datetime").val() //傳送2017/06取得資料格式為該月第一筆最大需量的270筆(每10秒)如2017-06-10 12:15-12:45
        },
        success: function (response) {
            power(["first_graph", "second_graph", "third_graph"], response);
            remove_spinner(spinner_first_graph);
            remove_spinner(spinner_second_graph);
            remove_spinner(spinner_third_graph);
        },
        error: function () {
            alert("no data");
        }
    });
}

function show_spinner(div) {
    $(div).empty();
    return $('<div class="spinner"> \
                <div class="rect1"></div> \
                <div class="rect2"></div> \
                <div class="rect3"></div> \
                <div class="rect4"></div> \
                <div class="rect5"></div> \
              </div>').appendTo(div);
}

function remove_spinner(spinner) {
    spinner.remove();
}


var speed = "10000";
var first = 0;
var pause = "60000";
setInterval(realtime_demand, pause);

function realtime_demand() {
    $.ajax({
        type: "GET", //傳值方式有分 post & get
        url: "/api/v1.0/demand_min", //第二筆用電折線圖
        dataType: 'json',
        success: function (response) {
            $('#real_demand > #total >span ').remove();
            $('#real_demand ').animate({}, speed).show(function () {
                total = '<span>' + response["demand_min"] + ' </span>';
                $('#real_demand > #total').append(total);
            });
        },
        error: function () {
            alert("no data");
        }
    });
}