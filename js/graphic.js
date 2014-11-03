//jquery shorthand
var $graphic = $('#graphic');
//base colors
var colors = {
    'red1': '#6C2315', 'red2': '#A23520', 'red3': '#D8472B', 'red4': '#E27560', 'red5': '#ECA395', 'red6': '#F5D1CA',
    'orange1': '#714616', 'orange2': '#AA6A21', 'orange3': '#E38D2C', 'orange4': '#EAAA61', 'orange5': '#F1C696', 'orange6': '#F8E2CA',
    'yellow1': '#77631B', 'yellow2': '#B39429', 'yellow3': '#EFC637', 'yellow4': '#F3D469', 'yellow5': '#F7E39B', 'yellow6': '#FBF1CD',
    'teal1': '#0B403F', 'teal2': '#11605E', 'teal3': '#17807E', 'teal4': '#51A09E', 'teal5': '#8BC0BF', 'teal6': '#C5DFDF',
    'blue1': '#28556F', 'blue2': '#3D7FA6', 'blue3': '#51AADE', 'blue4': '#7DBFE6', 'blue5': '#A8D5EF', 'blue6': '#D3EAF7'
};

/*
 * Render the graphic
 */
//check for svg
$(window).load(function() {
    draw_graphic();
});

function draw_graphic(){
    if (Modernizr.svg){
        $("#graphic1").empty();
        $("#graphic2").empty();
        $("#graphic3").empty();
        $("#graphic4").empty();
        var width = $graphic.width();
        render(width);
        window.onresize = draw_graphic; //very important! the key to responsiveness
    }
}

function render(width) {


/////mexico//////
var mexico = [{"year":2009,"people":16114},
{"year":2010,"people":13724},
{"year":2011,"people":11768},
{"year":2012,"people":13974},
{"year":2013,"people":17240},
{"year":2014,"people":15634}];


    var graphic1 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.people; })
        .yAxisLabel("Mexico")
        .tooltipFormat(d3.format(",f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("minors")
        .mobileThreshold(180)
        .tickSize(6)
        ;

    d3.select("#graphic1")
        .datum(mexico)
        .call(graphic1);

////honduras////
var honduras = [{"year":2009,"people":968},
{"year":2010,"people":1017},
{"year":2011,"people":974},
{"year":2012,"people":2997},
{"year":2013,"people":6747},
{"year":2014,"people":18244}];

    var graphic2 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.people; })
        .yAxisLabel("Honduras")
        .tooltipFormat(d3.format(",f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("minors")
        .mobileThreshold(180)
        .strokeColor(colors.red2)
        .tickSize(6);

    d3.select("#graphic2")
        .datum(honduras)
        .call(graphic2);

////guatemala////
var guatemala = [{"year":2009,"people":1115},
{"year":2010,"people":1517},
{"year":2011,"people":1565},
{"year":2012,"people":3835},
{"year":2013,"people":8068},
{"year":2014,"people":17057}];

    var graphic3 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.people; })
        .yAxisLabel("Guatemala")
        .tooltipFormat(d3.format(",f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("minors")
        .mobileThreshold(180)
        .strokeColor(colors.orange2)
        .tickSize(4);

    d3.select("#graphic3")
        .datum(guatemala)
        .call(graphic3);

////el salvador////
var salvador = [{"year":2009,"people":1221},
{"year":2010,"people":1910},
{"year":2011,"people":1394},
{"year":2012,"people":3314},
{"year":2013,"people":5990},
{"year":2014,"people":16404}]
    
    var graphic4 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.people; })
        .yAxisLabel("El Salvador")
        .tooltipFormat(d3.format(",f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("minors")
        .mobileThreshold(180)
        .strokeColor(colors.teal2)
        .tickSize(4);

    d3.select("#graphic4")
        .datum(salvador)
        .call(graphic4);


}//end function render    





