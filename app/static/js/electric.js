$(function() { 
    $("#dialog_div").dialog({ 
        autoOpen: false,
        show: "blind", 
        hide: "explode",
        dialogClass: "dlg-no-close",
        width: 400,
        height:350,
        buttons: { 
            "Ok": function() { 
                $(this).dialog("close");
                $("#value").empty();
                $("#cost").empty();
                $( "#count_btn").unbind( "click" );
            }, 
            "Cancel": function() { 
                $(this).dialog("close"); 
                $("#value").empty();
                $("#cost").empty();
                $( "#count_btn").unbind( "click" );
            }
        }
    });

    $("#refresh").click(function() { 
        location.reload();
    });

    $(".info-box.red-bg").click(function() { 
        $("#dialog_div").dialog("open");
       
        $("#count_btn").click(function() { 
            $("#value").empty();
            $("#cost").empty();
            $.ajax({
                url:"assets/php/query_count.php",
                type: "GET",
                data: {
                        houlddeviceindex: 'SMB350-4-B CH1 R',
                        sDate: $('#datetimepicker1').val(),
                        eDate: $('#datetimepicker2').val()
                    },
                dataType: "json",
                success: function(response) {
                    var money = $("#money").val();
                    $("#value").append(response+" KWH");
                    $("#cost").append(response*money+" 元");
                }
            });
        });
    });

    $(".info-box.green-bg").click(function() { 
        $("#dialog_div").dialog("open"); 
        $("#count_btn").click(function() { 
            $("#value").empty();
            $("#cost").empty();
            $.ajax({
                url:"assets/php/query_count.php",
                type: "GET",
                data: {
                        houlddeviceindex: 'SMB350-4-B CH1 S',
                        sDate: $('#datetimepicker1').val(),
                        eDate: $('#datetimepicker2').val()
                    },
                dataType: "json",
                success: function(response) {
                    var money = $("#money").val();
                    $("#value").append(response+" KWH");
                    $("#cost").append(response*money+" 元");
                }
            });
        });
    });

    $(".info-box.blue-bg").click(function() { 
        $("#dialog_div").dialog("open"); 
        $("#count_btn").click(function() { 
            $("#value").empty();
            $("#cost").empty();
            $.ajax({
                url:"assets/php/query_count.php",
                type: "GET",
                data: {
                        houlddeviceindex: 'SMB350-4-B CH1 T',
                        sDate: $('#datetimepicker1').val(),
                        eDate: $('#datetimepicker2').val()
                    },
                dataType: "json",
                success: function(response) {
                    var money = $("#money").val();
                    $("#value").append(response+" KWH");
                    $("#cost").append(response*money+" 元");
                }
            });
        });
    });

    $(".info-box.magenta-bg").click(function() { 
        $("#dialog_div").dialog("open"); 
        $("#count_btn").click(function() {
            $("#value").empty();
            $("#cost").empty();
            $.ajax({
                url:"assets/php/query_count.php",
                type: "GET",
                data: {
                        houlddeviceindex: 'SMB350-4-B CH2 R',
                        sDate: $('#datetimepicker1').val(),
                        eDate: $('#datetimepicker2').val()
                    },
                dataType: "json",
                success: function(response) {
                    var money = $("#money").val();
                    $("#value").append(response+" KWH");
                    $("#cost").append(response*money+" 元");
                }
            });
        });
    });

    $(".info-box.yellow-bg").click(function() { 
        $("#dialog_div").dialog("open"); 
        $("#count_btn").click(function() {
            $("#value").empty();
            $("#cost").empty();
            $.ajax({
                url:"assets/php/query_count.php",
                type: "GET",
                data: {
                        houlddeviceindex: 'PM210',
                        sDate: $('#datetimepicker1').val(),
                        eDate: $('#datetimepicker2').val()
                    },
                dataType: "json",
                success: function(response) {
                    var money = $("#money").val();
                    $("#value").append(response+" KWH");
                    $("#cost").append(response*money+" 元");
                }
            });
        });
    });

    $.ajax({
        url:"assets/php/query.php",
        type: "GET",
        data: {
                houlddeviceindex: ['SMB350-4-B CH1 R','SMB350-4-B CH1 S','SMB350-4-B CH1 T','SMB350-4-B CH2 R', 'PM210']
            },
        dataType: "json",
        success: function(response) {
            remove();
            $("#updatetime").append(getDateTime());

            for(var i=1;i<6;i++){
                var index = i-1;
                if(response[index])
                    $("#dev"+i).append(response[index]);
                else
                    $("#dev"+i).append(0);
            }
            $("#connect").empty();
            $("#connect").append("通訊良好");
        }
    });

    function getDateTime(){
        var currentTime = new Date();
        var currentDate = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var day = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();

        if (minutes < 10)
            minutes = "0" + minutes;
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;

        var time = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
        return time;
    }

    function remove(){
        $("#dev1").empty();
        $("#dev2").empty();
        $("#dev3").empty();
        $("#dev4").empty();

    }
});