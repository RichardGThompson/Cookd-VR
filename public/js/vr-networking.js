const debug = false;
let socket = io();
AFRAME.registerComponent('vr-websocket',{
    schema: {
        elementConverstionTable:{type:'array', default:[['']]},
        ongoingOrderCount:{type:'number', default:0},
    },

    init:function(){
        const Context_AF = this;
        console.log(this.el.components['vr-websocket'].data.ongoingOrderCount);
        socket.on('connect', function(data){
            console.log('connected');
        });
        socket.on('incomingOrder', function(data){
            //console.log(data);
            const incomingArray = data.split(',');
            console.log(incomingArray);

            Context_AF.el.components['vr-websocket'].data.ongoingOrderCount++;
            const startingHeight = 0.145;
            
            var ticketID = '';
            switch(Context_AF.el.components['vr-websocket'].data.ongoingOrderCount){
                case(1):
                    ticketID = '#tkt_0';
                    break;
                case(2):
                    ticketID = '#tkt_1';
                    break;
                case(3):
                    ticketID = '#tkt_2';
                    break;
                case(4):
                    ticketID = '#tkt_3';
                    break;
                case(5):
                    ticketID = '#tkt_4';
                    break;
                case(6):
                    ticketID = '#tkt_5';
                    break;
                case(7):
                    ticketID = '#tkt_6';
                    break;
                case(8):
                    ticketID = '#tkt_7';
                    break;
                case(9):
                    ticketID = '#tkt_8';
                    break;
            }

            const ticket = document.querySelector(ticketID);
            ticket.object3D.position.z = 0.02;
            for(i = 0; i < incomingArray.length; i++){
                let textElement = document.createElement('a-entity');
                if(i == 0){
                    textElement.setAttribute('text', 'value:' + incomingArray[i] + '; wrapCount:15; align:center; color:black; width:0.3');
                    textElement.setAttribute('position', '0 ' + startingHeight + ' 0.010');
                }
                else{
                    textElement.setAttribute('text', 'value:' + incomingArray[i] + '; wrapCount:15; align:center; color:black; width:0.28');
                    textElement.setAttribute('position', '0 ' + (startingHeight - 0.02 - (0.04 * i)) + ' 0.010');
                }
                ticket.appendChild(textElement);
            }


            var newArray = [];

            if(incomingArray[0] == 'Fries'){
                newArray.push(8);
            }
            else{
                for(i = 1; i < incomingArray.length; i++){
                    //If the element of the array is a bun, check if it should be a top or a bottom.
                    switch(incomingArray[i]){
                        case('BottomBun'):
                            newArray.push(1);
                            break;
                        case('Patty'):
                            newArray.push(2);
                            break;
                        case('Cheese'):
                            newArray.push(3);
                            break;
                        case('TopBun'):
                            newArray.push(4);
                            break;
                        case('Lettuce'):
                            newArray.push(5);
                            break;
                        case('Onion'):
                            newArray.push(6);
                            break;
                        case('Tomato'):
                            newArray.push(7);
                    }
                }
            }
            newArray.sort();
            ticket.setAttribute('vr-ticket-detail', '');
            ticket.components['vr-ticket-detail'].data.orderContents = newArray;
            console.log(ticket.components['vr-ticket-detail'].data.orderContents);
            

            document.querySelector('#gameManager').components['vr-game-manager'].data.currentOrders.push(newArray);
            console.log(document.querySelector('#gameManager').components['vr-game-manager'].data.currentOrders);
            
        });
    }
})

AFRAME.registerComponent('vr-send-order', {
    init:function(){
        console.log(this.data);
        var dataToAdd = null;
        this.el.addEventListener('collide', function(collidedObj){
            const collidedEl = collidedObj.detail.body.el;
            const elements = collidedEl.components['vr-burger-info'].data.burgerElements.toString();

            const ongoingOrders = document.querySelector('#gameManager').components['vr-game-manager'].data.currentOrders;

            if(!debug){
                for(i = 0; i < ongoingOrders.length; i++){
                    const orderDetail = ongoingOrders[i].toString();
                    if(elements == orderDetail){
                        collidedEl.parentNode.removeChild(collidedEl);
                        socket.emit('doneOrder', elements);
                        document.querySelector('#gameManager').components['vr-game-manager'].data.currentOrders[i].splice(i);
                        break;
                    }
                }
            }
            else{
                collidedEl.parentNode.removeChild(collidedEl);
                console.log(elements);
                socket.emit('doneOrder', elements);
            }
            
        })
    }
})