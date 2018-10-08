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

    color = GetColorCode($("#color").val());
    radius = $("#radius").val();

    setInterval(Update, 1);
})

function Update(){
    color = GetColorCode($("#color").val());
    radius = $("#radius").val();

    $("#canvas").mousemove(function(e){
        mouse.x = e.clentX - rect.left;
        mouse.y = e.clentY - rect.right;
    })

    $("#canvas").mousedown(function(e){
        Draw(e);
    })

}

function GetColorCode (code){
    var red   = parseInt(code.substring(1,3), 16);
    var green = parseInt(code.substring(3,5), 16);
    var blue  = parseInt(code.substring(5,7), 16);
    return {r:red, g:green, b:blue};
}

function Draw (e) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(color.r, color.g, color.b)";
    ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI*2, true);
    ctx.fill();
}

$("#color").on("cange", function(){
    color = GetColorCode($("#color").val());
})

$("#radius").on("change", function(){
    radius = $("#radius").val();
})