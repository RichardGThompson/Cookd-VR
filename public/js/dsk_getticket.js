AFRAME.registerComponent('dsk_getticket', {
    schema: {
        hasticket: {type:'boolean', default: false}
    },

    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('collide', function(event){
            if(event.detail.body.el.getAttribute('visible') == false)
            {
                if(event.detail.body.el.components['dsk_ticketgenerating'].data.RonsCreamySurprise)
                {
                    let ticket = document.querySelector('#ticket');
                    let ticketID = document.querySelector('#ticketName');
                    ticket.setAttribute('value', ' ' + event.detail.body.el.components['RonsCreamySurprise'].data.ingredient + '');
                    ticketID.setAttribute('value', 'Rons creamy surprise ');
                    Context_AF.data.hasticket = true;
                    //console.log(Context_AF.el.components);
                    Context_AF.el.components['dsk_networkmanager'].data.orderstore = event.detail.body.el.components['RonsCreamySurprise'].data.name  + ',' + event.detail.body.el.components['RonsCreamySurprise'].data.ingredient;;
                }
                else if(event.detail.body.el.components['dsk_ticketgenerating'].data.Big_mac)
                {
                    let ticket = document.querySelector('#ticket');
                    let ticketID = document.querySelector('#ticketName');
                    ticket.setAttribute('value', ' ' + event.detail.body.el.components['bigmac'].data.ingredient + '');
                    ticketID.setAttribute('value', 'Big Man ');
                    Context_AF.data.hasticket = true;
                    //console.log(Context_AF.el.components);
                    Context_AF.el.components['dsk_networkmanager'].data.orderstore = event.detail.body.el.components['bigmac'].data.name + ',' + event.detail.body.el.components['bigmac'].data.ingredient;
                }
                else if(event.detail.body.el.components['dsk_ticketgenerating'].data.burger)
                {
                    let ticket = document.querySelector('#ticket');
                    let ticketID = document.querySelector('#ticketName');
                    ticket.setAttribute('value', ' ' + event.detail.body.el.components['burger'].data.ingredient + '');
                    ticketID.setAttribute('value', 'Burger ');
                    Context_AF.data.hasticket = true;
                    //console.log(Context_AF.el.components);
                    Context_AF.el.components['dsk_networkmanager'].data.orderstore = event.detail.body.el.components['burger'].data.name  + ',' + event.detail.body.el.components['burger'].data.ingredient;
                }
            }

        });
    },
})