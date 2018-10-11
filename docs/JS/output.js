$("#output").on("click", function(){
    Upload();
})


function Upload(){
    var date = new Date();
    var filename = date.toString() + ".png";
    var fullpath = "images/" + filename;
    // var file = getCanvasPng();

    // console.log(file);

    var storageRef = firebase.storage().ref();
    var mountainsRef = storageRef.child("images");
    var mountainImagesRef = storageRef.child(fullpath);

    var canvas = $("#canvas").get(0);

    var file = new Blob;
    canvas.toBlob(function(blob){
        // file.src = URL.createObjectURL(blob);
        file = blob;
    });

    mountainImagesRef.put(file);


    

    
}