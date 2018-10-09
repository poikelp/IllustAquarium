$("#output").on("click", function(){
    Upload();
})

function getCanvasPng(){
    return $("#canvas").get(0).toDataURL();
}

function Upload(){
    var date = new Date();
    var filename = "images/" + date.toString() + ".png";

    var storageRef = firebase.storage().ref(filename);
    storageRef.put(getCanvasPng()).then(function(){
        console.log("hoge");
    });
}