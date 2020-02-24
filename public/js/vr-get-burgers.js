AFRAME.registerComponent('vr-get-burger', {
    init: function(){
        console.log('testing');
        var burgers = document.querySelectorAll('*[id^="bgr"]');
        console.log(burgers);
    }
});