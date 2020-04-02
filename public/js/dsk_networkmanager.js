let socket = io();


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
            const incomingArray = data.split(',');
            var newArray = [];
            Context_AF.data.Orderin = true;
            Context_AF.data.FoodsentStorage = data;
            console.log(incomingArray);
            if(incomingArray[0] == 'Fries'){
                newArray.push(8);
            }
            else
            {
                for(i = 0; i < incomingArray.length; i++){
                    //If the element of the array is a bun, check if it should be a top or a bottom.
                    switch(incomingArray[i]){
                        case("1"):
                            newArray.push('BottomBun');
                            break;
                        case("2"):
                            newArray.push('Patty');
                            break;
                        case("3"):
                            newArray.push('Cheese');
                            break;
                        case("4"):
                            newArray.push('TopBun');
                            break;
                        case("5"):
                            newArray.push('Lettuce');
                            break;
                        case("6"):
                            newArray.push('Onion');
                            break;
                        case("8"):
                            newArray.push('Tomato');
                    }
                }
            }
            
            console.log(newArray);
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
                    
                    Context_AF.el.setAttribute('material', 'src: assets/' + Context_AF.data.FoodsentStorage + '.png');
                    player.components['dsk_foodholder'].data.FoodStorage = Context_AF.data.FoodSentStorage;
                }
    }
});