AFRAME.registerComponent('dsk_foodholder', {
    schema: {
        FoodStorage:{type:'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        let player = document.querySelector('#player');
        Context_AF.el.addEventListener('collide', function(event){
            if(event.detail.body.el.getAttribute('visible') == false && 
                event.detail.body.el.components['' + Context_AF.data.FoodStorage + ''].data.label == Context_AF.data.FoodStorage)
            {
               console.log(event.detail.body.el.id);
               let NPC = document.querySelector('#npc' + event.detail.body.el.id);
               let table = document.querySelector('#' + event.detail.body.el.id);
               console.log('npc' + event.detail.body.el.id);
               table.removeAttribute('sound');
               NPC.parentNode.removeChild(NPC);
               Context_AF.data.FoodStorage = " ";
               player.setAttribute('material', 'src: assets/sans.png');
            }
        });

        
    },

});