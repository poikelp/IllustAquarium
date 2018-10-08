var canvas;
var ctx;
var rect;
var mouse = {x:0, y:0};
var color;
var radius;
var isDrawing = false;

$(window).on("load", function(){
    canvas = $("#canvas")[0];
    ctx = canvas.getContext("2d");
    rect = canvas.getBoundingClientRect();

    color =$("#color").val();
    radius = $("#radius").val();

    setInterval(Update, 1);
})

function Update(){
    //color = GetColorCode($("#color").val());
    radius = $("#radius").val();

    $("#canvas").mousedown(function(){
        isDrawing = true;
    })
    $("#canvas").mouseup(function(){
        isDrawing = false;
    })

    if(isDrawing){
        Draw();
    }
}

function GetColorCode (code){
    var red   = parseInt(code.substring(1,3), 16);
    var green = parseInt(code.substring(3,5), 16);
    var blue  = parseInt(code.substring(5,7), 16);
    return {r:red, g:green, b:blue};
}

function GetMousePos(){
    $("#canvas").mousemove(function(e){
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    })
}

function Draw () {
    GetMousePos();

    ctx.beginPath();
    ctx.fillStyle = $("#color").val();
    ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI*2, true);
    ctx.fill();
}
