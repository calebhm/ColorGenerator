$(function (){

var colr;
var colg;
var colb;

$("#button").click( function() {
colr = Math.round(255*Math.random());
colg = Math.round(255*Math.random());
colb = Math.round(255*Math.random());

$("#instruct").animate({ left : "-100%"}, 800);
$("#container").animate({ borderTop : "0"}, 600);

$("#button").stop();
$("#button").clearQueue();
$("#button").animate({ opacity : "0"}, 0);
$("#button").animate({ opacity : "1"}, 400, "swing");
$("#container").animate({ top : "16%"}, 1200);

$("#rgbcode").html("RGB( " + colr + ", " + colg + ", " + colb + " )");

$("#hexcode").html(rgbIn(colr, colg, colb));

$("#colorbox").stop();
$("#colorbox").clearQueue();
$("#colorbox").fadeOut(100);
$("#colorbox").fadeIn(400);

$("#colorbox").css("background-color", "rgb(" + colr + ", " + colg + ", " + colb + ")");
});

function rgbIn(r,g,b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

});