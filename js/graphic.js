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
        var width = $graphic.width();
        render(width);
        window.onresize = draw_graphic; //very important! the key to responsiveness
    }
}

function render(width) {


/////data example//////
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


}//end function render    





