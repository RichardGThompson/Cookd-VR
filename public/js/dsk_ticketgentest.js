AFRAME.registerComponent('dsk_ticketgentest', {
    schema: {
        burger: {type:'boolean', default: false},
        Big_mac: {type:'boolean', default: false},
        RonsCreamySurprise: {type:'boolean', default: false},
        positionx: {type:'number', default:0},
        positiony: {type:'number', default:0},
    },

    init : function() {
        const Context_AF = this;
        
        //console.log(Context_AF.el.data.positiony);
        rand = Math.floor(Math.random() * 3) + 1;
        if(rand == 1)
        {
            Context_AF.el.setAttribute('burgertest', {});
            Context_AF.data.burger = true;
        }
        if(rand == 2)
        {
            Context_AF.el.setAttribute('bigmactest', {});
            Context_AF.data.Big_mac = true;
        }
        if(rand == 3)
        {
            Context_AF.el.setAttribute('RonsCreamySurprisetest', {});
            Context_AF.data.RonsCreamySurprise = true;
        }
    
    
    },
})
AFRAME.registerComponent('burgertest', {
    schema: {
        price: {type:'number', default:10},
        ingredient: {type:'string', default:'bun, patty, bun'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);
        
        let ticket = document.querySelector('#ticket');
        let ticketID = document.querySelector('#ticketName');
        ticket.setAttribute('value', ' ' + Context_AF.data.ingredient + '');
        ticketID.setAttribute('value', 'burger');
    },
});
AFRAME.registerComponent('bigmactest', {
    schema: {
        price: {type:'number', default:5},
        ingredient: {type:'string', default:'bun, patty, lettuce, sauce, bun'}
    },
    init : function() {
        const Context_AF = this;
        console.log(Context_AF.data.ingredient);

        let ticket = document.querySelector('#ticket');
        let ticketID = document.querySelector('#ticketName');
        ticket.setAttribute('value', ' ' + Context_AF.data.ingredient + '');
        ticketID.setAttribute('value', 'big mac');
    },
});

AFRAME.registerComponent('RonsCreamySurprisetest', {
    schema: {
        price: {type:'number', default:0},
        ingredient: {type:'string', default:'Mayo'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);
        let ticket = document.querySelector('#ticket');
        let ticketID = document.querySelector('#ticketName');
        ticket.setAttribute('value', ' ' + Context_AF.data.ingredient + '');
        ticketID.setAttribute('value', 'Rons creamy surprise ');
        
    },
});