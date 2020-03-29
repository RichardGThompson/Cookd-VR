AFRAME.registerComponent('vr-controls', {
    init: function(){
        console.log('controls attached');
        const gameManager = document.querySelector('#gameManager');

        this.el.addEventListener('gripdown', function(){
            //console.log('gripdown');
            gameManager.components['vr-game-manager'].data.leftControllerState = 'gripDown';
            //console.log(gameManager.components['vr-game-manager'].data.leftControllerState);
        });
        this.el.addEventListener('gripup', function(){
            gameManager.components['vr-game-manager'].data.leftControllerState = 'null';
            //console.log(gameManager.components['vr-game-manager'].data.leftControllerState);
            //console.log('gripup');
        });
        this.el.addEventListener('triggerdown', function(){
            gameManager.components['vr-game-manager'].data.leftControllerState = 'triggerDown';
            //console.log('triggerdown');
        });
        this.el.addEventListener('triggerup', function(){
            gameManager.components['vr-game-manager'].data.leftControllerState = 'null';
            //console.log('triggerup');
        });
    }
})