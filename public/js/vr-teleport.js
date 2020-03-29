AFRAME.registerComponent('vr-teleport', {
    init : function(){
        console.log('teleport attached');
        
        this.el.addEventListener('raycaster-intersected', function(evt){
            const thisPostiton = this.getAttribute('position');

            document.querySelector('#cameraRig').setAttribute('position', thisPostiton.x + ',' + (thisPostiton.y) + ',' + thisPostiton.z);
            if(gameManager.components['vr-game-manager'].data.leftControllerState == 'triggerdown'){
                const thisPostiton = this.getAttribute('position');

                document.querySelector('#cameraRig').setAttribute('position', thisPostiton.x + ',' + (thisPostiton.y) + ',' + thisPostiton.z);
            }
            
            //
            

        })
    }
})