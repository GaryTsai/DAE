function randNum(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20)* 1200;
}

function randNum2(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 500;
}

function randNum3(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 300;
}

function randNum4(){
	return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 100;
}

$(document).ready(function(){

	/* ---------- Event ---------- */
	var ldata1 = [], ldata2 = [], ldata3 = [], ldata4 = [], ldata5 = [];

	var d1 = [];
	for (var i = 1; i <= 96; i += 1)
		d1.push([i, parseInt(Math.random() * 5)]);
	
	var d2 = [];
	for (var i = 1; i <= 24; i += 1)
		d2.push([i, 10 + parseInt(Math.random() * 5)]);

	var d3 = [];
	for (var i = 1; i <= 1; i += 1)
		d3.push([i, 200 + parseInt(Math.random() * 80)]);

	ldata1.push(d1);
	ldata1.push(d2);
	ldata1.push(d3);

	var d1 = [];
	for (var i = 1; i <= 96; i += 1)
		d1.push([i, parseInt(Math.random() * 5)]);
	
	var d2 = [];
	for (var i = 1; i <= 24; i += 1)
		d2.push([i, 10 + parseInt(Math.random() * 5)]);

	var d3 = [];
	for (var i = 1; i <= 1; i += 1)
		d3.push([i, 200 + parseInt(Math.random() * 80)]);

	ldata2.push(d1);
	ldata2.push(d2);
	ldata2.push(d3);

	var d1 = [];
	for (var i = 1; i <= 96; i += 1)
		d1.push([i, parseInt(Math.random() * 5)]);
	
	var d2 = [];
	for (var i = 1; i <= 24; i += 1)
		d2.push([i, 10 + parseInt(Math.random() * 5)]);

	var d3 = [];
	for (var i = 1; i <= 1; i += 1)
		d3.push([i, 200 + parseInt(Math.random() * 80)]);

	ldata3.push(d1);
	ldata3.push(d2);
	ldata3.push(d3);

	var d1 = [];
	for (var i = 1; i <= 96; i += 1)
		d1.push([i, parseInt(Math.random() * 5)]);
	
	var d2 = [];
	for (var i = 1; i <= 24; i += 1)
		d2.push([i, 10 + parseInt(Math.random() * 5)]);

	var d3 = [];
	for (var i = 1; i <= 1; i += 1)
		d3.push([i, 200 + parseInt(Math.random() * 80)]);

	ldata4.push(d1);
	ldata4.push(d2);
	ldata4.push(d3);

	var d1 = [];
	for (var i = 1; i <= 96; i += 1)
		d1.push([i, parseInt(Math.random() * 5)]);
	
	var d2 = [];
	for (var i = 1; i <= 24; i += 1)
		d2.push([i, 10 + parseInt(Math.random() * 5)]);

	var d3 = [];
	for (var i = 1; i <= 1; i += 1)
		d3.push([i, 200 + parseInt(Math.random() * 80)]);

	ldata5.push(d1);
	ldata5.push(d2);
	ldata5.push(d3);


	$("#stack_btn").click(function(){
		var d = [];
		if($("#stackchart").length)
		{
			if(stack_check_box_1.checked){
				d = ldata1;
			}
	        if(stack_check_box_2.checked){
				d = ldata2;
			}
	        if(stack_check_box_3.checked){
				d = ldata3;
			}
	        if(stack_check_box_4.checked){
				d = ldata4;
			}
	        if(stack_check_box_5.checked){
				d = ldata5;
			}

			var stack = 0, bars = true, lines = false, steps = false;

			function plotWithOptions(d) {
				$.plot($("#stackchart"), [ d ], {
					series: {
						stack: stack,
						bars: { show: true, barWidth: 0.6 },
					},
					colors: ["#FA5833", "#2FABE9", "#FABB3D"]
				});
			}

			plotWithOptions(d[0]);

			$(".graphControls input").click(function (e) {
				e.preventDefault();
				bars = $(this).val().indexOf("15分鐘") != -1;
				lines = $(this).val().indexOf("1小時") != -1;
				steps = $(this).val().indexOf("1天") != -1;
				week = $(this).val().indexOf("1周") != -1;
				//console.log(bars, lines, steps);
				if(bars)
					plotWithOptions(d[0]);
				else if(lines)
					plotWithOptions(d[1]);
				else 
					plotWithOptions(d[2]);
			});
		}
	});


	var rd1 = [], rd2 = [], rd3 = [], rd4 = [], rd5 = [];
	for (var i = 1; i < 25; i += 1){
		rd1.push([i, 3 + Math.random()*5]);
		rd2.push([i, 3 + Math.random()*5]);
		rd3.push([i, 3 + Math.random()*5]);
		rd4.push([i, 3 + Math.random()*5]);
		rd5.push([i, 3 + Math.random()*5]);
	}
	
	$("#lines_btn").click(function(){
		
		if(check_box_1.checked){
			var d1 = rd1;
		}
        if(check_box_2.checked){
			var d2 = rd2;
		}
        if(check_box_3.checked){
			var d3 = rd3;
		}
        if(check_box_4.checked){
			var d4 = rd4;
		}
        if(check_box_5.checked){
			var d5 = rd5;
		}
        if($("#sincos").length)
		{
			var plot = $.plot($("#sincos"),
				   [ { data: d1, label: "電表一"}, { data: d2, label: "電表二" }, { data: d3, label: "電表三" }, { data: d4, label: "電表四" }, { data: d5, label: "電表五" } ], {
					   series: {
						   lines: { show: true,
									lineWidth: 2,
								 },
						   points: { show: true },
						   shadowSize: 2
					   },
					   grid: { hoverable: true, 
							   clickable: true, 
							   tickColor: "#dddddd",
							   borderWidth: 0 
							 },
					   //yaxis: { min: -1.2, max: 1.2 },
					   colors: ["#FA5833", "#2FABE9", "yellow", "green"]
					 });

			function showTooltip(x, y, contents) {
				$('<div id="tooltip">' + contents + '</div>').css( {
					position: 'absolute',
					display: 'none',
					top: y + 5,
					left: x + 5,
					border: '1px solid #fdd',
					padding: '2px',
					'background-color': '#dfeffc',
					opacity: 0.80
				}).appendTo("body").fadeIn(200);
			}

			var previousPoint = null;
			$("#sincos").bind("plothover", function (event, pos, item) {
				$("#x").text(pos.x.toFixed(2));
				$("#y").text(pos.y.toFixed(2));

					if (item) {
						if (previousPoint != item.dataIndex) {
							previousPoint = item.dataIndex;

							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
								y = item.datapoint[1].toFixed(2);

							showTooltip(item.pageX, item.pageY,
										item.series.label + " of " + x + " = " + y);
						}
					}
					else {
						$("#tooltip").remove();
						previousPoint = null;
					}
			});
			
		}
	});

	/* ---------- Chart with points ---------- */
	
	
	/* ---------- Stack chart ---------- */
	
	
	/* ---------- Donut chart ---------- */
	if($("#osChart").length)
	{
		$.plot($("#osChart"), data,
		{
				series: {
						pie: {
								innerRadius: 0.6,
								show: true
						}
				},
				legend: {
					show: true
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
		});
	}

	/* ---------- Pie chart ---------- */
	var data = [
	{ label: "Internet Explorer",  data: 12},
	{ label: "Mobile",  data: 27},
	{ label: "Safari",  data: 85},
	{ label: "Opera",  data: 64},
	{ label: "Firefox",  data: 90},
	{ label: "Chrome",  data: 112}
	];
	
	if($("#piechart").length)
	{
		$.plot($("#piechart"), data,
		{
			series: {
					pie: {
							show: true
					}
			},
			grid: {
					hoverable: true,
					clickable: true
			},
			legend: {
				show: false
			},
			colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
		});
		
		function pieHover(event, pos, obj)
		{
			if (!obj)
					return;
			percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
		}
		$("#piechart").bind("plothover", pieHover);
	}
	
	/* ---------- Donut chart ---------- */
	if($("#donutchart").length)
	{
		$.plot($("#donutchart"), data,
		{
				series: {
						pie: {
								innerRadius: 0.5,
								show: true
						}
				},
				legend: {
					show: false
				},
				colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
		});
	}




	 // we use an inline data source in the example, usually data would
	// be fetched from a server
	var data = [], totalPoints = 300;
	function getRandomData() {
		if (data.length > 0)
			data = data.slice(1);

		// do a random walk
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			if (y < 0)
				y = 0;
			if (y > 100)
				y = 100;
			data.push(y);
		}

		// zip the generated y values with the x values
		var res = [];
		for (var i = 0; i < data.length; ++i)
			res.push([i, data[i]])
		return res;
	}

	// setup control widget
	var updateInterval = 30;
	$("#updateInterval").val(updateInterval).change(function () {
		var v = $(this).val();
		if (v && !isNaN(+v)) {
			updateInterval = +v;
			if (updateInterval < 1)
				updateInterval = 1;
			if (updateInterval > 2000)
				updateInterval = 2000;
			$(this).val("" + updateInterval);
		}
	});

	
	if($("#realtimechart").length)
	{
		var options = {
			series: { shadowSize: 1 },
			lines: { fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
			yaxis: { min: 0, max: 100 },
			xaxis: { show: false },
			colors: ["#F4A506"],
			grid: {	tickColor: "#dddddd",
					borderWidth: 0 
			},
		};
		var plot = $.plot($("#realtimechart"), [ getRandomData() ], options);
		function update() {
			plot.setData([ getRandomData() ]);
			// since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			
			setTimeout(update, updateInterval);
		}

		update();
	}
	
});