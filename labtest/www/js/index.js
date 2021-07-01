$(function () {
    document.addEventListener('deviceready', onDeviceReady, false);

    window.plugins.CallNumber.callNumber(
        function (result) {// success phone called do nothing
            console.log("Success:"+result);
        },
        function (result) { //failed phone called, show some message
            console.log("Error:"+result);
        },

    );


});