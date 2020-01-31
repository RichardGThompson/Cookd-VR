AFRAME.registerComponent('dsk_playermovement', {
    dependencies:['raycaster'],
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            
            console.log(event.detail.intersection.point);
            Context_AF.moveplayerclick(event.detail.intersection.point);
        });

        window.addEventListener('keydown', function(event) {
            if(event.keyCode == 87)
            {
                console.log('w pressed');
                Context_AF.moveplayer(0, 1);
            }
        });
        window.addEventListener('keydown', function(event) {
            if(event.keyCode == 83)
            {
                console.log('s pressed');
                Context_AF.moveplayer(0, -1);
            }
        });
        window.addEventListener('keydown', function(event) {
            if(event.keyCode == 65)
            {
                console.log('a pressed');
                Context_AF.moveplayer(1, 0);
            }
        });
        window.addEventListener('keydown', function(event) {
            if(event.keyCode == 68)
            {
                console.log('d pressed');
                Context_AF.moveplayer(-1, 0);
            }
        });
    },

    moveplayer: function(movex, movez)
    {
        let player = this.el;
        let playerpos = player.getAttribute('position');
        
        player.setAttribute('animation', "property: position; to:"+(playerpos.x + movex) +", " + (playerpos.y) + ", " + (playerpos.z + movez) + "; loop:false; dur: 200; easing: linear");
    },
    moveplayerclick: function(pointVector)
    {
        let player = document.querySelector('#player');
        playerpos = player.getAttribute('position');
        
        player.setAttribute('animation', "property: position; to:"+(pointVector.x) +", " + (playerpos.y) + ", " + (pointVector.z) + "; loop:false; dur: 200; easing: linear");
    },
    
});