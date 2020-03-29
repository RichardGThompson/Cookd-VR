AFRAME.registerComponent('vr-teleport', {
    init : function(){
        console.log('teleport attached');
        
        this.el.addEventListener('raycaster-intersected', function(evt){
            console.log('donedid');
            const thisPostiton = this.getAttribute('position');

            document.querySelector('#cameraRig').setAttribute('position', thisPostiton.x + ',' + (thisPostiton.y) + ',' + thisPostiton.z);
        })
    }
})