var pictureSource,
    destinationType;

document.addEventListener("deviceready", cameraLoaded, false);

function cameraLoaded() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function getPhoto(imageData) {
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = imageData;
}

function capturePhoto() {
    navigator.camera.getPicture(getPhoto, onFail, { quality: 50 });
}

function onFail(message) {
    alert('Failed because: ' + message);
}