AFRAME.registerComponent('dsk_ticketgenerating', {
    schema: {
        burger: {type:'boolean', default: false},
        CheeseBurger: {type:'boolean', default: false},
        DoubleCheeseBurger: {type:'boolean', default: false},
        LoadedCheeseBurger: {type:'boolean', default: false},
        DoubleLoadedCheeseBurger: {type:'boolean', default: false},
        Fries: {type:'boolean', default: false},
        NameHolder: {type:'string', default:''},
        hasticket: {type:'boolean', default: false}
    },

    init : function() {
        const Context_AF = this;
        
        //rand = Math.floor(Math.random() * 4) + 1;
        rand = 1;
        if(rand == 1)
        {
            Context_AF.el.setAttribute('burger', {});
            Context_AF.data.burger = true;
        }
        if(rand == 2)
        {
            Context_AF.el.setAttribute('CheeseBurger', {});
            Context_AF.data.CheeseBurger = true;
        }
        if(rand == 3)
        {
            Context_AF.el.setAttribute('LoadedCheeseBurger', {});
            Context_AF.data.LoadedCheeseBurger = true;
        }
        if(rand == 4)
        {
            Context_AF.el.setAttribute('Fries', {});
            Context_AF.data.Fries = true;
        }
    
    
    },
})
AFRAME.registerComponent('burger', {
    schema: {
        price: {type:'number', default:10},
        name: {type: 'string', default:'Burger'},
        label: {type: 'string', default:'burger'},
        ingredient: {type:'string', default:'BottomBun,Patty,TopBun'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);
        Context_AF.el.components['dsk_ticketgenerating'].data.nameHolder = Context_AF.data.label;
        
    },
});
AFRAME.registerComponent('CheeseBurger', {
    schema: {
        price: {type:'number', default:5},
        name: {type: 'string', default:'Cheese Burger'},
        label: {type: 'string', default:'CheeseBurger'},
        ingredient: {type:'string', default:'BottomBun,Patty,Cheese,TopBun'}
    },
    init : function() {
        const Context_AF = this;
        console.log(Context_AF.data.ingredient);
        Context_AF.el.components['dsk_ticketgenerating'].data.nameHolder = Context_AF.data.label;
    },
});

AFRAME.registerComponent('LoadedCheeseBurger', {
    schema: {
        price: {type:'number', default:0},
        name: {type: 'string', default:'Loaded Cheese Burger'},
        label: {type: 'string', default:'LoadedCheeseBurger'},
        ingredient: {type:'string', default:'BottomBun,Patty,Cheese,Lettuce,Onion,TopBun'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);
        Context_AF.el.components['dsk_ticketgenerating'].data.nameHolder = Context_AF.data.label;
        
    },
});
AFRAME.registerComponent('Fries', {
    schema: {
        price: {type:'number', default:0},
        name: {type: 'string', default:'Fries'},
        label: {type: 'string', default:'Fries'},
        ingredient: {type:'string', default:'Fries'}
    },
    init : function() {
        const Context_AF = this;
        
        console.log(Context_AF.data.ingredient);
        Context_AF.el.components['dsk_ticketgenerating'].data.nameHolder = Context_AF.data.label;
        
    },
});