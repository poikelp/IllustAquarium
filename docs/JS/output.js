$("#output").on("click", function(){
    Upload();
})

function getCanvasPng(){
    
    
}

function Upload(){
    var date = new Date();
    var filename = date.toString() + ".png";
    var fullpath = "images/" + filename;
    // var file = getCanvasPng();

    // console.log(file);

    var storageRef = firebase.storage().ref();
    var mountainsRef = storageRef.child(filename);
    var mountainImagesRef = storageRef.child(fullpath);

    var canvas = $("#canvas").get(0);
    canvas.toBlob(function(blob){
        var image = new Image();
        image.src = blob;
        mountainImagesRef.put(blob);
    });
    // return image;


    

    
}