let socket = io();
AFRAME.registerComponent('dsk_networkmanager', {
    schema: {
        orderstore: {type:'string', default:' '},      
    },
    init : function() {
        const Context_AF = this;
        
        socket.on('connect', function(data)
        {
            console.log('connected'); 
        });

            

        
    },
    tick : function(){
        const Context_AF = this;
        let smolX = 2.833;
        let bigX = 5.802;
        let smolZ = -7.629;
        let bigZ = -4.917;

        playerpos = Context_AF.el.getAttribute('position');

        if(playerpos.x >= smolX && playerpos.x <= bigX &&
            playerpos.z >= smolZ && playerpos.z <= bigZ &&
            Context_AF.el.components['dsk_getticket'].data.hasticket)
            {
                //console.log(Context_AF.data.orderstore);
                socket.emit('outgoingOrder', Context_AF.data.orderstore);
                Context_AF.el.components['dsk_getticket'].data.hasticket = false;
                
            }
    }
});