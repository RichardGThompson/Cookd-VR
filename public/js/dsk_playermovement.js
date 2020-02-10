AFRAME.registerComponent('dsk_playermovement', {
    dependencies:['raycaster'],
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener("click", function(event){
            
            console.log(event.detail.intersection.point);
            
            Context_AF.moveplayerclick(event.detail.intersection.point);
        });
    },

    moveplayerclick: function(pointVector)
    {
        let player = document.querySelector('#player');
        playerpos = player.getAttribute('position');
        let destinationVector = new THREE.Vector3(pointVector.x, 0.9, pointVector.z);
        console.log(pointVector);
        //player.setAttribute('animation', "property: position; to:"+(pointVector.x) +", " + (playerpos.y) + ", " + (pointVector.z) + "; loop:false; dur: 200; easing: linear");
        player.setAttribute('nav-agent', {
            speed: 1.5,
            active: true,
            destination: pointVector
        });
    },
    
});