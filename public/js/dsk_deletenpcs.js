
AFRAME.registerComponent('dsk_deletenpcs', {
    schema: {
        
    },
    init : function() {
        const Context_AF = this;
        
        
    },
    tick : function(){
        const Context_AF = this;
        let smolX = 2.833;
        let bigX = 5.802;
        let smolZ = -7.629;
        let bigZ = -4.917;

        playerpos = Context_AF.el.getAttribute('position');

        if(playerpos.x >= smolX && playerpos.x <= bigX &&
            playerpos.z >= smolZ && playerpos.z <= bigZ)
            {
                console.log("stop. you violated the law");
            }
    }
});