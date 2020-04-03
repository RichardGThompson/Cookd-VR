AFRAME.registerComponent('dsk_playermovement', {
    dependencies:['raycaster'],
    schema: {},
    init : function() {
        const Context_AF = this;

        //when the scene is clicked, do the thing
        Context_AF.el.addEventListener("click", function(event){
            
            //console.log(event.detail.intersection.point);
            //move the player
            Context_AF.moveplayerclick(event.detail.intersection.point);
        });
    },

    moveplayerclick: function(pointVector)
    {
        let player = document.querySelector('#player');
        playerpos = player.getAttribute('position');

        //animates the player towards the appropriate position
        player.setAttribute('animation', "property: position; to:"+(pointVector.x) +", " + (playerpos.y) + ", " + (pointVector.z) + "; loop:false; dur: 200; easing: linear");
        
    },
    
});