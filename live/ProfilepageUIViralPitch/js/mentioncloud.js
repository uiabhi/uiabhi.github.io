anychart.onDocumentReady(function () {

    // create data   
    var data = [
{x: "@learning", value: 80},
{x: "@includes", value: 56},
{x: "@lists", value: 44},
{x: "@meaning", value: 40},
{x: "@useful", value: 36},
{x: "@different", value: 32},
{x: "@grammar", value: 28},
{x: "@teaching", value: 24},
{x: "@example", value: 20},
{x: "@thing", value: 12}
    ];

    // create a chart and set the data
    var chartt = anychart.tagCloud(data);
    chartt.angles(1)
    // set the container id
    chartt.container("testone");
    chartt.listen("pointClick", function (e) {
        var url = "https://en.wikipedia.org/wiki/" + e.point.get("x");
        window.open(url, "_blank");
    });

    // initiate drawing the chart
    chartt.draw();
});
