function legendClickCallback(event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    while (target.nodeName !== 'LI') {
        target = target.parentElement;
    }
    var parent = target.parentElement;
    var chartId = parseInt(parent.classList[0].split("-")[0], 10);
    var chart = Chart.instances[chartId];
    var index = Array.prototype.slice.call(parent.children).indexOf(target);
    var meta = chart.getDatasetMeta(index);
    if (meta.hidden === null) {
        meta.hidden = !chart.data.datasets[index].hidden;
        target.classList.add('hidden');
    } else {
        target.classList.remove('hidden');
        meta.hidden = null;
    }
    chart.update();
}
var ctx = document.getElementById("myChart");
var myLegendContainer = document.getElementById("myChartLegend");
var myChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        annotation: {
            annotations: [{
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xScaleID: "x-axis-0",
                yScaleID: "y-axis-0",
                xMin: "09/10",
                xMax: "18/19",
                yMin: 0,
                yMax: 20,
                backgroundColor: "rgba(250, 211, 144,0.2)",
                onClick: function(e) {
                    console.log("Box", e.type, this);
                }
            }, {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xScaleID: "x-axis-0",
                yScaleID: "y-axis-0",
                xMin: "09/10",
                xMax: "18/19",
                yMin: 20,
                yMax: 44,
                backgroundColor: "rgba(248, 194, 145,0.2)",
                onClick: function(e) {
                    console.log("Box", e.type, this);
                }
            }, {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xScaleID: "x-axis-0",
                yScaleID: "y-axis-0",
                xMin: "09/10",
                xMax: "18/19",
                yMin: 44,
                yMax: 68,
                backgroundColor: "rgba(106, 137, 204,0.2)",
                onClick: function(e) {
                    console.log("Box", e.type, this);
                }
            }, {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xScaleID: "x-axis-0",
                yScaleID: "y-axis-0",
                xMin: "09/10",
                xMax: "18/19",
                yMin: 68,
                yMax: 92,
                backgroundColor: "rgba(130, 204, 221,0.2)",
                onClick: function(e) {
                    console.log("Box", e.type, this);
                }
            }, {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xScaleID: "x-axis-0",
                yScaleID: "y-axis-0",
                xMin: "09/10",
                xMax: "18/19",
                yMin: 92,
                yMax: 116,
                backgroundColor: "rgba(184, 233, 148,0.2)",
                onClick: function(e) {
                    console.log("Box", e.type, this);
                }
            }, ]
        },
        // Hide the legend //
        legend: {
            display: false
        },
        // Reverse the y axes //
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    reverse: true,
                    min: 0,
                    max: 116,
                    display: false
                }
            }]
        },
        maintainAspectRatio: false,
        tooltips: false,
        plugins: {
            datalabels: {
                backgroundColor: function(context) {
                    return context.active ? context.dataset.backgroundColor : 'white';
                },
                borderColor: function(context) {
                    return context.dataset.backgroundColor;
                },
                borderRadius: function(context) {
                    return context.active ? 0 : 32;
                },
                borderWidth: 1,
                color: function(context) {
                    return context.active ? 'black' : context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold'
                },
                formatter: function(value, context) {
            
                    if (value > 92) {
                        return context.active ? context.dataset.label + '\n' + (value -92) + nth(value -92) + ' in the natioanl league' :(value -92);
                    } else if (value > 68) {
                        return context.active ? context.dataset.label + '\n' + (value -68) + nth(value -68) + ' in league two' :(value -68);
                    } else if (value > 44) {
                        return context.active ? context.dataset.label + '\n' + (value -44) + nth(value -44) + ' in league one' :(value -44);
                    } else if (value > 20) {
                        return context.active ? context.dataset.label + '\n' + (value - 20) + nth(value -20) + ' in the championship' :(value - 20);
                    } else if (value < 20) {
                        return context.active ? context.dataset.label + '\n' + value + nth(value) + ' in the premier league.' :(value);
                    } else {
                        return (value);
                    };

                    function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}
                },
                offset: 8,
                textAlign: 'center'
            }
        },
    }
});
myLegendContainer.innerHTML = myChart.generateLegend();
var legendItems = myLegendContainer.getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
    legendItems[i].addEventListener("click", legendClickCallback, false);
}