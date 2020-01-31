AFRAME.registerComponent('dsk_playermovement', {
    schema: {},
    init : function() {
        const Context_AF = this;

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
    
});