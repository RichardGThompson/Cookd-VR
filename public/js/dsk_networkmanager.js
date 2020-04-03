let socket = io();
let foodname = "";

AFRAME.registerComponent('dsk_networkmanager', {
    schema: {
        orderstore: {type:'string', default:' '},   
        Orderin: {type:'bool', default: false},
        HoldingFood:   {type:'bool', default: false},
        FoodsentStorage:{type:'string', default: ''}
    },
    init : function() {
        const Context_AF = this;
        
        socket.on('connect', function(data)
        {
            console.log('connected'); 
        });
        socket.on('completedOrder', function(data)
        {

            Context_AF.data.Orderin = true;
            Context_AF.data.FoodsentStorage = data;
            console.log(data);
            if(data == "1,2,4"){
                foodname = "burger";
            }
            else if(data == "1,2,3,4"){
                foodname = "CheeseBurger";
            }
            else if(data == "1,2,3,5,6,4"){
                foodname = "LoadedCheeseBurger";
            }
            if(data == "8"){
                foodname = "Fries";
            }
        });
        
    },
    tick : function(){
        const Context_AF = this;
        let smolX = 2.833;
        let bigX = 5.802;
        let smolZ = -7.629;
        let bigZ = -4.917;
        let sendingorder = document.querySelector('#sendOrder');
        let ticketName = document.querySelector('#ticketName');
        let ticketId = document.querySelector('#ticket');
        playerpos = Context_AF.el.getAttribute('position');
        player = document.querySelector('#player');
        if(playerpos.x >= smolX && playerpos.x <= bigX &&
            playerpos.z >= smolZ && playerpos.z <= bigZ &&
            Context_AF.el.components['dsk_getticket'].data.hasticket)
            {
                //console.log(Context_AF.data.orderstore);
                socket.emit('outgoingOrder', Context_AF.data.orderstore);
                Context_AF.el.components['dsk_getticket'].data.hasticket = false;
                sendingorder.setAttribute('value', "order sent");
                ticketName.setAttribute('value', "Name of Order");
                ticketId.setAttribute('value', "Order Ingredients");
            }
            if(playerpos.x >= smolX && playerpos.x <= bigX &&
                playerpos.z >= smolZ && playerpos.z <= bigZ &&
                Context_AF.data.Orderin == true)
                {
                    console.log("I'm receiving");
                    Context_AF.el.setAttribute('material', 'src: assets/' + Context_AF.data.FoodsentStorage + '.png');
                    Context_AF.data.Orderin = false;
                    console.log(foodname);
                    player.components['dsk_foodholder'].data.FoodStorage = foodname;
                }
    }
});