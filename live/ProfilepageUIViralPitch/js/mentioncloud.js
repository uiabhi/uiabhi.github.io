anychart.onDocumentReady(function () {
    var data = [{
            "x": "@like4like",
            "value": 50
        },
        {
            "x": "@memes",
            "value": 10
        },
        {
            "x": "@Hindustani",
            "value": 70
        },
        {
            "x": "@viralpitch",
            "value": 60
        },
        {
            "x": "@friends",
            "value": 40
        },
        {
            "x": "@loophole",
            "value": 30
        },
        {
            "x": "@Russian",
            "value": 21
        },
        {
            "x": "@test",
            "value": 60
        },
        {
            "x": "@hastags",
            "value": 40
        },
        {
            "x": "@unkonwn",
            "value": 30
        },
        {
            "x": "@olelele",
            "value": 21
        },
    ];

    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);

    // set a chart title
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');
    chart.listen("pointClick", function (e) {
        var url = "https://en.wikipedia.org/wiki/" + e.point.get("x");
        window.open(url, "_blank");
    });

    // display the word cloud chart
    chart.container("testone");
    chart.draw();



});