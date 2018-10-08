
var canvas = $(".canvas")[0];
var ctx = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();

var color = $(".color").val();

$(".color").on("cange", function(){
    color = $(".color").val();
})

var mouse = {x:0, y:0};

canvas.addEventListener("mousemove", function(e){
    
    mouse.x = e.clentX - rect.left;
    mouse.y = e.clentY - rect.right;

})