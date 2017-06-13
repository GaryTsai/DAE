function startTime(type) {
    var today = new Date(); //定義日期對象
    var yyyy = today.getFullYear(); //通過日期對象的getFullYear()方法返回年
    var MM = today.getMonth() + 1; //通過日期對象的getMonth()方法返回年
    var dd = today.getDate(); //通過日期對象的getDate()方法返回年
    var hh = today.getHours(); //通過日期對象的getHours方法返回小時
    var mm = today.getMinutes(); //通過日期對象的getMinutes方法返回分?
    var ss = today.getSeconds(); //通過日期對象的getSeconds方法返回秒

    // 如果分?或小時的值小於10，則在其值前加0，比如如果時間是下午3點20分9秒的話，則顯示15：20：09
    MM = checkTime(MM);
    dd = checkTime(dd);
    mm = checkTime(mm);
    ss = checkTime(ss);
    var day; //用於保存星期（getDay()方法得到星期編號）
    if (today.getDay() == 0) day = "星期日";
    if (today.getDay() == 1) day = "星期一";
    if (today.getDay() == 2) day = "星期二";
    if (today.getDay() == 3) day = "星期三";
    if (today.getDay() == 4) day = "星期四";
    if (today.getDay() == 5) day = "星期五";
    if (today.getDay() == 6) day = "星期六";

    switch (type) {
        case '1':
            document.getElementById('nowDateTimeSpan-demend').innerHTML = yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "   " + day;
            setTimeout('startTime("1")', 1000); //每一秒中重新加載startTime()方法
            break;
        case '2':
            return yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;

    }
}

function checkTime(i) {
    if (i < 10)
        i = "0" + i;
    return i;
} // checkTime function
//set the button
var check = 0;
var index_year = 0;
var index_month = 0;
var index_day = 0;
$(document).ready(function () {
    $("a.list-group-item").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    //dialog show
    $("button.btn.btn-info.col-md-12").click(function () {
        $("#dialog_model").dialog({
            dialogClass: "dlg-no-close",
            width: 1000,
            height: 750,
            resizeStop: function () {
                $(this).height($(this).parent().height() - $(this).prev('.ui-dialog-titlebar').height() - $(this).prev('.ui-dialog-buttonpane').height() - 34);
                $(this).width($(this).prev('.ui-dialog-titlebar').width() + 2);
                // $("#Demand_high, #Demand_high_Interval, #Demand").height($(this).height() - $(".modal-header").height() - $(".dateframe").height() - $("#myTab").height() - 34);
            },
            open: function () {
                // $("#Demand_high, #Demand_high_Interval, #Demand").height($(this).height() - $(".modal-header").height() - $(".dateframe").height() - $("#myTab").height() - 34);
                $(document).ready(function () {
                    realtime_demand();
                    $('#demand_page').show();
                    $('#setting_page').hide();
                    //open　即插入需量值
                    // $("#real_demand > span").append("456");

                });
            },
        });
    });
    $("#Demand_Setting").click(function () {
        $("#page-wrapper").dialog({
            title: "需量反應設定",
            dialogClass: "dlg-no-close",
            width: 800,
            height: 700,
            resizeStop: function () {
                $(this).height($(this).parent().height() - $(this).prev('.ui-dialog-titlebar').height() - $(this).prev('.ui-dialog-buttonpane').height() - 34);
                $(this).width($(this).prev('.ui-dialog-titlebar').width() + 2);
                // $("#Demand_high, #Demand_high_Interval, #Demand").height($(this).height() - $(".modal-header").height() - $(".dateframe").height() - $("#myTab").height() - 34);
            },
            open: function () {
                // $("#Demand_high, #Demand_high_Interval, #Demand").height($(this).height() - $(".modal-header").height() - $(".dateframe").height() - $("#myTab").height() - 34);
                $(document).ready(function () {
                    realtime_demand();
                    $('#demandsetting_page').show();
                    $('#groupdown_setting').hide();
                    //open　即插入需量值
                    // $("#real_demand > span").append("456");

                });
            },
        });
    });
    $('#datetime').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-MM-dd',
        maxDate: 0,
        minDate: "-23m",
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay));
        }
    });



    $('#demandControl').click(function (e) {
        $('#demand_page').hide();
        $('#setting_page').show();
    });
    $('#returnpage').click(function (e) {
        $('#setting_page').hide();
        $('#demand_page').show();

    });
    $('#groupdown').click(function (e) {
        $('#demandsetting_page').hide();
        $('#groupdown_setting').show();
    });
    $('#group_returnpage').click(function (e) {
        $('#groupdown_setting').hide();
        $('#demandsetting_page').show();
    });
});

// }
//Demans_Setting

$(function () {
    $("#demand-range").slider({
        range: true,
        min: 0,
        max: 100,
        step: 5,
        values: [45, 70],
        slide: function (event, ui) {
            $("#demand_bottom").val(ui.values[0]);
            $("#demand_top").val(ui.values[1]);
        }
    });
    $("#demand_bottom").val($("#demand-range").slider("values", 0));
    $("#demand_top").val($("#demand-range").slider("values", 1));
});

$(function () {
    $("#demand-max").slider({
        range: "min",
        min: 500,
        max: 1500,
        step: 10,
        value: 1000,

        slide: function (event, ui) {
            $("#max").val(ui.value);
        }
    });
    $("#max").val($("#demand-max").slider("value"));
});

$(function () {
    var spinner = $("#gap1").spinner();
});

$(function () {
    var spinner = $("#delay").spinner();
});

$(function () {
    var spinner = $("#gap2").spinner();
});