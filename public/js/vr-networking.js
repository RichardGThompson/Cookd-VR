AFRAME.registerComponent('vr-send-order', {
    init:function(){
        this.el.addEventListener('raycaster-intersection', function(hitObj){
            console.log('gotem');
        })
    }
})