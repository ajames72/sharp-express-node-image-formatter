/**
 * @TODO: This should probably be written using React
 */
var displayDroppedImage = function(imageResult) {
  var snapShot = document.getElementById('snapshot');

  if(snapShot) {
    var context = snapshot.getContext('2d');

    var height = snapShot.clientHeight;
    var width = snapShot.clientWidth;

    var image = new Image();
    image.src = imageResult;

    image.onload = function() {
      /**
       * @TODO: Need to scale image to fit for preview
       * Or make it dragable
       */
      /*
      var imageAspectRatio = image.width / image.height;
      var canvasAspectRatio = snapShot.width / snapShot.height;
      console.log('Image', image.height, image.width, imageAspectRatio);
      */
      context.drawImage(this, 0, 0, width, height);
    }
  } else {
    console.error('Cannot find snapshot canvas element');
  }
}

var callFormatter = function() {

    $.ajax({
        method: 'POST',
        url: '/format',
        dataType: 'json'
    })
        .done(function(data) {
            console.log('success', data);
        })
        .fail(function(){
            console.log('ajax failed')
        })
}

// To use es6 here, would have to incorporate webpack
var dragover_handler = function(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    //ev.dataTransfer.dropEffect = "move"

    //console.log('dragover_handler');
}

var drop_handler = function(ev) {
    ev.preventDefault();

    var dt = ev.dataTransfer;
    var files = dt.files;
    var reader  = new FileReader();

    reader.onload = (function(event){
        //Image - event.target.result
        displayDroppedImage(event.target.result);

        callFormatter()
    });
    //Only if image
    reader.readAsDataURL(files[0]);
}