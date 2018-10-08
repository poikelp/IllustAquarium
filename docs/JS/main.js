var canvas;
var ctx;
var rect;
var mouse = {x:0, y:0};
var color;
var radius;

$(window).on("load", function(){
    canvas = $("#canvas")[0];
    ctx = canvas.getContext("2d");
    rect = canvas.getBoundingClientRect();

    color = $("#color").val();
})


$("#color").on("cange", function(){
    color = $("#color").val();
})

$("#radius").on("change", function(){
    radius = $("#radius").val();
})


$("#canvas").mousemove(function(e){
    mouse.x = e.clentX - rect.left;
    mouse.y = e.clentY - rect.right;
})

$("#canvas").mousedown(function(e){

})