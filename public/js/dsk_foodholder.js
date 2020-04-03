AFRAME.registerComponent('dsk_foodholder', {
    schema: {
        //stores the food name from dsk_networkmanager
        FoodStorage:{type:'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        let player = document.querySelector('#player');
        //when colliding with the a table and the object name matches the current object held, do the thing
        Context_AF.el.addEventListener('collide', function(event){
            if(event.detail.body.el.getAttribute('visible') == false && 
                event.detail.body.el.components['' + Context_AF.data.FoodStorage + ''].data.label == Context_AF.data.FoodStorage)
            {
               //grabs the npc for the table that was just collided with
               let NPC = document.querySelector('#npc' + event.detail.body.el.id);
               let table = document.querySelector('#' + event.detail.body.el.id);
               //removes the sound from the table so it doesn't trigger
               table.removeAttribute('sound');
               //deletes the npcs
               NPC.parentNode.removeChild(NPC);
               //clears the stored food
               Context_AF.data.FoodStorage = " ";
               //sets the players textured 
               player.setAttribute('material', 'src: assets/sans.png');
            }
        });

        
    },

});