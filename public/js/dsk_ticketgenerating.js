AFRAME.registerComponent('dsk_ticketgenerating', {
    schema: {},

    init : function() {
        const Context_AF = this;

            let NPC = document.querySelector('#npc');
            console.log("Hi");
            rand = Math.floor(Math.random() * 3) + 1;
            if(rand == 1)
            {
                Context_AF.el.setAttribute('burger', {});
            }
            if(rand == 2)
            {
                Context_AF.el.setAttribute('bigmac', {});
            }
            if(rand == 3)
            {
                Context_AF.el.setAttribute('RonsCreamySurprise', {});
            }
        

        
    },
})
AFRAME.registerComponent('burger', {
    schema: {
        price: {type:'number', default:10},
        ingredient: {type:'string', default:'bun, patty, bun'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);

        
    },
});
AFRAME.registerComponent('bigmac', {
    schema: {
        price: {type:'number', default:5},
        ingredient: {type:'string', default:'bun, patty, lettuce, sauce, bun'}
    },
    init : function() {
        const Context_AF = this;
        Context_AF.data.price = 2;
        console.log(Context_AF.data.ingredient);

        
    },
});

AFRAME.registerComponent('RonsCreamySurprise', {
    schema: {
        price: {type:'number', default:0},
        ingredient: {type:'string', default:'Mayo'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);

        
    },
});