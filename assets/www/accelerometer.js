//wait for PhoneGap to load
document.addEventListener("deviceready", accelerometerLoaded, false);

// PhoneGap is ready
function accelerometerLoaded() {
    startWatch();
}

// Start watching the acceleration
function startWatch() {
    // Update acceleration every 3 seconds
    var options = { frequency: 3000 };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// Success
function onSuccess(acceleration) {
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
        'Acceleration Y: ' + acceleration.y + '<br />' +
        'Acceleration Z: ' + acceleration.z + '<br />' +
        'Timestamp: ' + acceleration.timestamp + '<br />';
}
// Error
function onError() {
    alert('onError!');
}