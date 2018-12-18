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
      context.drawImage(this, 0, 0, width, height);
    }
  } else {
    console.error('Cannot find snapshot canvas element');
  }
}

var callFormatter = function(blob) {
    var formData = new FormData();
    formData.append('image', blob); //event.target.files[0] data going here
    console.log(formData.get('image'));

    // Not Working
    // Maybe the headers from the post need setting on the client?
    $.ajax({
        url: '/format',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: (function(data) {
            console.log('success', data);
        })
    });
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
        displayDroppedImage(event.target.result);

        // callFormatter(event.target.result);
        callFormatter(files[0]);
    });

    reader.readAsDataURL(files[0]);
}