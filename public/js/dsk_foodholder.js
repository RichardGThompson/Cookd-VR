AFRAME.registerComponent('dsk_foodholder', {
    schema: {
        FoodStorage:{type:'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        
        Context_AF.el.addEventListener('collide', function(event){
            if(event.detail.body.el.getAttribute('visible') == false && 
                event.detail.body.el.components['dsk_ticketgenerating'].data.hasticket == true )
            {
               console.log("fuck")
            }

        });

        
    },

});