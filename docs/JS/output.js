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
    // var mountainsRef = storageRef.child("images/");
    var mountainImagesRef = storageRef.child(fullpath);

    var canvas = $("#canvas").get(0);

   
    // // var file = new Blob();
    // canvas.toBlob(function(blob){
    //     var file = new Image();
    //     file.src = URL.createObjectURL(blob);
    //     // file = blob;
    //     // file.src = blob;
    //     mountainImagesRef.put(file);

    // },"image/png");
    
    var type = "image/png";
    var dataurl = canvas.toDataURL(type);
    // var bin = btoa(dataurl.split(',')[1]);
    var bin = atob(dataurl.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (i=0;i<bin.length;i++){
        buffer[i] = bin.charCodeAt(i);
    }
    var file = new Blob([buffer.buffer], {type: type});

    $.when(
        mountainImagesRef.put(file)
    ).done(function(){
        alert("アップロード完了！");
        location.reload();
    });

    
}