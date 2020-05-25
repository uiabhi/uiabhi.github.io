anychart.onDocumentReady(function () {

    // create data   
    var data = [
{x: "#learning", value: 80},
{x: "#includes", value: 56},
{x: "#lists", value: 44},
{x: "#meaning", value: 40},
{x: "#useful", value: 36},
{x: "#different", value: 32},
{x: "#grammar", value: 28},
{x: "#teaching", value: 24},
{x: "#example", value: 20},
{x: "#thing", value: 12}
    ];

    // create a chart and set the data
    var chart = anychart.tagCloud(data);
    chart.angles([0])
    // set the container id
    chart.container("test");
    chart.listen("pointClick", function (e) {
        var url = "https://en.wikipedia.org/wiki/" + e.point.get("x");
        window.open(url, "_blank");
    });

    // initiate drawing the chart
    chart.draw();
});
