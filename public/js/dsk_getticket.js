AFRAME.registerComponent('dsk_getticket', {
    schema: {
        hasticket: {type:'boolean', default: false}
    },

    init : function() {
        const Context_AF = this;
        //if the player collides with an npc and they aren't currently holding a ticket, do the thing
        Context_AF.el.addEventListener('collide', function(event){
            if(event.detail.body.el.getAttribute('visible') == false && 
                event.detail.body.el.components['dsk_ticketgenerating'].data.hasticket == false &&
                Context_AF.data.hasticket == false)
            {
                
                //grabs the ticket UI
                let ticket = document.querySelector('#ticket');
                let ticketID = document.querySelector('#ticketName');
                
                //grabs the order name
                let componentname = event.detail.body.el.components['dsk_ticketgenerating'].data.nameHolder;

                //grabs the Ui corresponding to the table
                let Order = document.querySelector('#Order' + event.detail.body.el.id);
                
                //sets the variables
                ticket.setAttribute('value', ' ' + event.detail.body.el.components[componentname].data.ingredient + '');
                ticketID.setAttribute('value', event.detail.body.el.components[componentname].data.name);
                Order.setAttribute('value', event.detail.body.el.components[componentname].data.name);
                Context_AF.data.hasticket = true;
                event.detail.body.el.components['dsk_ticketgenerating'].data.hasticket = true;
                //console.log(Context_AF.el.components);
                Context_AF.el.components['dsk_networkmanager'].data.orderstore = event.detail.body.el.components[componentname].data.name  + ',' + 
                event.detail.body.el.components[componentname].data.ingredient;
            }

        });
    },
})