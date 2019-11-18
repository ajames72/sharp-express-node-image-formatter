/**
 * @TODO: This should probably be written using React
 */
// https://css-tricks.com/drag-and-drop-file-uploading/
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

var displayNewImage = function(imageResult) {
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageResult);
    document.getElementById('result-zone').appendChild(imageElement);
};

var callFormatter = function(blob) {
    var formData = new FormData();

    for(var i = 0; i < blob.length; i++) {
      formData.append('image-' + (i + 1), blob[i]);
    }

    $.ajax({
        url: '/format',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: (function(data) {
            console.log('success', data);
            displayNewImage('data:image/png;base64, ' + data.bufferedImage);
        })
    });
}

var dragover_handler = function(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"

    console.log('dragover_handler');
}

var drop_handler = function(ev) {
    ev.preventDefault();

    var dt = ev.dataTransfer;
    var files = dt.files;
    var reader  = new FileReader();

    reader.onload = (function(event){
        displayDroppedImage(event.target.result);

        callFormatter(files);
    });

    reader.readAsDataURL(files[0]);
}
