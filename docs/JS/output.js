$("#output").on("click", function(){
    Upload();
})

function getCanvasPng(){
    return $("#canvas").get(0).toDataURL();
}

function Upload(){
    var date = new Date();
    var filename = date.toString() + ".png";
    var fullpath = "images/" + filename;
    var file = getCanvasPng();

    console.log(file);


    var storageRef = firebase.storage().ref();
    var mountainsRef = storageRef.child(filename);
    var mountainImagesRef = storageRef.child(fullpath);

    storageRef.put(file).then(function(snapshot){
        console.log("hoge");
    });
}