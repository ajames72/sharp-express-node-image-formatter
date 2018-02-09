/**
 * @TODO: modularise
 */
function callFormatter() {

    $.ajax({
        method: 'POST',
        url: '/format',
        dataType: 'json'
    })
        .done(function(data) {
            console.log('success', data);
        }, function(err) {
            console.log('error', err);
        })
        .fail(function(){
            console.log('ajax failed')
        })
}

// To use es6 here, would have to incorporate webpack
function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    //ev.dataTransfer.dropEffect = "move"

    //console.log('dragover_handler');
}

function drop_handler(ev) {
    ev.preventDefault();

    var dt = ev.dataTransfer;
    var files = dt.files;
    var reader  = new FileReader();

    //console.log('drop_handler', files);

    reader.onload = (function(event){
        console.log('reader onload event', event);
        //Image - event.target.result
        callFormatter()

    });
    //Only if image
    reader.readAsDataURL(files[0]);
}