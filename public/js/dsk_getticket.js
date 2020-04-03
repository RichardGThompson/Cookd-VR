AFRAME.registerComponent('dsk_getticket', {
    schema: {
        hasticket: {type:'boolean', default: false}
    },

    init : function() {
        const Context_AF = this;
        
        Context_AF.el.addEventListener('collide', function(event){
            if(event.detail.body.el.getAttribute('visible') == false && 
                event.detail.body.el.components['dsk_ticketgenerating'].data.hasticket == false &&
                Context_AF.data.hasticket == false)
            {
                

                let ticket = document.querySelector('#ticket');
                let ticketID = document.querySelector('#ticketName');
                let OrdersTakenHolder = document.querySelector('#OrdersTakenHolder')
                
                let componentname = event.detail.body.el.components['dsk_ticketgenerating'].data.nameHolder;
                let Order = document.querySelector('#Order' + event.detail.body.el.id);
                //console.log(componentname);
                //let orderimage = document.querySelector('#' + componentname + event.detail.body.el.id);
                //orderimage.setAttribute('visible', 'true');
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