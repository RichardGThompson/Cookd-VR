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
        this.el.addEventListener('raycaster-intersection', function(hitObj){
            console.log('gotem');
            if(!(dataTest.includes(this.parentNode.getAttribute('id')))){
                dataToAdd = this.parentNode.getAttribute('id');
                //this.data.alreadySent.push(this.parentNode.getAttribute('id'));
                var arrayString = '';
                for(i = 0; i < this.parentNode.components['vr-burger-info'].data.burgerElements.length; i++){
                    var ID = this.parentNode.components['vr-burger-info'].data.burgerElements[i].getAttribute('id');
                    if(ID.includes('bb')){
                        arrayString.concat('1,');
                    }
                    else if(ID.includes('ptty')){
                        arrayString.concat('2,');
                    }
                    else if(ID.includes('chz')){
                        arrayString.concat('3,');
                    }
                    else if(ID.includes('tb')){
                        arrayString.concat('4,');
                    }
                }
                console.log(arrayString);
                console.log(this.parentNode.components['vr-burger-info'].data.burgerElements.toString());
                socket.emit('doneOrder', this.parentNode.components['vr-burger-info'].data.burgerElements.toString());
            }
            // console.log('gotem');
            // //console.log(hitObj);

            // console.log(this.parentNode.components['vr-burger-info'].data.burgerElements);
            // //
            // console.log(this.parentNode);
            
            //document.querySelector('#rightHand').removeAttribute('constraint');

            
            // var element = document.getElementById(this.parentNode.getAttribute('id'));
            // element.parentNode.removeChild(element);
        })
    }
})