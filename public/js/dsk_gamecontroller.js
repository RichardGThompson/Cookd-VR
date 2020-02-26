AFRAME.registerComponent('dsk_gamecontroller', {
    schema: {
        //NPClist:{Type:'array', default:[]}
    },

    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('collide', function(event){
            //console.log(event.detail.body.el);
            
        });
    },
    tick: function()
    {
        
    }
})