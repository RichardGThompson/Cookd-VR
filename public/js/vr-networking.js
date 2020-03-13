let socket = io();
AFRAME.registerComponent('vr-websocket',{
    init:function(){
        socket.on('connect', function(data){
            console.log('connected');
        })
    }
})

AFRAME.registerComponent('vr-send-order', {
    init:function(){
        this.el.addEventListener('raycaster-intersection', function(hitObj){
            console.log('gotem');
            console.log(hitObj);
        })
    }
})