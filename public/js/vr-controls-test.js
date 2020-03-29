AFRAME.registerComponent('vr-controls-test', {
    init: function(){
        console.log('controls attached');

        this.el.addEventListener('gripdown', function(){
            console.log('gripdown');
        });
        this.el.addEventListener('gripup', function(){
            console.log('gripup');
        });
        this.el.addEventListener('triggerdown', function(){
            console.log('triggerdown');
        });
        this.el.addEventListener('triggerup', function(){
            console.log('triggerup');
        });
    }
})