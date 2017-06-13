 function Xvalue(data) {
     var Max = 0;


     for (var index in data)
         if (Max == 0) {
             Max = data[index]["Time"];
         }
     else {
         if (Max < data[index]["Time"])
             Max = data[index]["Time"];
     }

     var Min = Max
     for (var index in data)
         if (Min > data[index]["Time"]) {
             Min = data[index]["Time"];
         }
     else
         continue;


     var domain = {
         "Max": Max,
         "Min": Min
     };

     return domain;

 }

 function Yvalue(data) {
     var Max = 0;

     for (var index in data)
         if (Max == 0) {
             Max = data[index]["Demand"];
             //  console.log('only one' + Max);
         }
     else {
         if (Max < data[index]["Demand"]) {
             Max = data[index]["Demand"];
             //  console.log('only' + index + ': ' + Max);
         }
     }

     var Min = Max
     for (var index in data)
         if (Min > data[index]["Demand"]) {
             Min = data[index]["Demand"];
         }
     else {
         continue;
     }

     var domain = {
         "Max": Max,
         "Min": Min
     };

     return domain;

 }

 function InitChart(data) {

     var parseTime2 = d3.time.format('%Y-%m-%d %H:%M:%S').parse;
     var xdomain = Xvalue(data);
     xdomain['Max'] = parseTime2(xdomain['Max']);
     xdomain['Min'] = parseTime2(xdomain['Min']);




     var ydomain = Yvalue(data)

     var vis = d3.select("#visualisation"),
         WIDTH = 900,
         HEIGHT = 400,
         MARGINS = {
             top: 20,
             right: 20,
             bottom: 20,
             left: 50
         },
         xScale = d3.time.scale().range([MARGINS.left, WIDTH - MARGINS.right]).domain([new Date('2015-01-01 00:00:00'), xdomain['Max']]), //x資料的範圍range 50-630 
         yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([ydomain['Min'], ydomain['Max']]), //Y的資料範圍
         xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(d3.time.month, 1).tickFormat(d3.time.format("%Y-%b-%d")), //xlabel position
         yAxis = d3.svg.axis().scale(yScale).orient("left").tickFormat(function (d) {
             return d;
         }); //y labe position

     //var newdatalist = [];
     //Get the data 
     data.forEach(function (d, i) { //轉換格式

         var parseTime = d3.time.format('%Y-%m-%d %H:%M:%S').parse;

         //dd = new Date();
         //console.log(dd);
         d.Time = parseTime(d.Time);


         d.Demand = +d.Demand;


     });
     //console.log(data.length);
     /*X axis*/
     vis.append("svg:g")
         .attr("class", "X axis")
         .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
         .call(xAxis)
         .selectAll("text")
         .attr("y", 0)
         .attr("x", -25)
         .attr("dy", "2em")
         .attr("transform", "rotate(0)")
         .style("text-anchor", "start");


     /*Y axis*/
     vis.append("svg:g")
         .attr("class", "Y axis")
         .attr("transform", "translate(" + (MARGINS.left) + ",0)")
         .call(yAxis);
     //line map data
     var line = d3.svg.line()
         .x(function (d) {
             //console.log(d.Time);
             return xScale(d.Time);
         })
         .y(function (d) {
             //console.log(d.Demand);
             return yScale(d.Demand);
         });
     //console.log(data);
     /*line */
     vis.append('svg:path')
         .attr('d', line(data))
         .attr('stroke', '#3182bd')
         .attr('stroke-width', 1)
         .attr('fill', 'none');

     /*topic title*/
     vis.append("text")
         .attr("x", (WIDTH / 2))
         .attr("y", MARGINS.top - 10)
         .style("font-size", "30px")
         .style("text-anchor", "middle")
         .text("Demand Diagram");
     /*X title*/
     vis.append("text")
         .attr("x", WIDTH / 2)
         .attr("y", HEIGHT + MARGINS.bottom)
         .style("font-size", "20px")
         .style("text-anchor", "middle")
         .text("Date");
     /*Y title*/
     vis.append("text")
         .attr("x", 0 - HEIGHT / 2)
         .attr("y", MARGINS.bottom - 5)
         .attr("transform", "rotate(-90)")
         .style("font-size", "20px")
         .style("text-anchor", "middle")
         .text("kW");

 }