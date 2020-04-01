let socket = io();
AFRAME.registerComponent('vr-websocket',{
    schema: {
        elementConverstionTable:{type:'array', default:[['']]},
        ongoingOrderCount:{type:'number', default:0},
    },

    init:function(){
        socket.on('connect', function(data){
            console.log('connected');
        });
        socket.on('incomingOrder', function(data){
            //console.log(data);
            const incomingArray = data.split(',');
            console.log(incomingArray);
            var newArray = [];

            if(incomingArray[0] == 'Fries'){
                newArray.push(8);
            }
            else{
                for(i = 1; i < incomingArray.length; i++){
                    //If the element of the array is a bun, check if it should be a top or a bottom.
                    if(incomingArray[i] == 'Bun'){
                        if(i == 1){
                            newArray.push(1);
                        }
                        else{
                            newArray.push(4);
                        }
                    }
                    else{
                        switch(incomingArray[i]){
                            case('Patty'):
                                newArray.push(2);
                                break;
                            case('Cheese'):
                                newArray.push(3);
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
            }
            newArray.sort();
            console.log(newArray);
        });
    }
})

AFRAME.registerComponent('vr-send-order', {
    schema:{
        alreadySent:{type:'array'},
    },
    init:function(){
        console.log(this.data);
        const dataTest = this.data.alreadySent;
        var dataToAdd = null;
        this.el.addEventListener('collide', function(collidedObj){
            const collidedEl = collidedObj.detail.body.el;
            const elements = collidedEl.components['vr-burger-info'].data.burgerElements.toString();

            if(elements.includes('4')){
                collidedEl.parentNode.removeChild(collidedEl);
                socket.emit('doneOrder', elements);
            }
        })
    }
})