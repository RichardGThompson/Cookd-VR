let socket = io();
AFRAME.registerComponent('vr-websocket',{
    init:function(){
        socket.on('connect', function(data){
            console.log('connected');
        })
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