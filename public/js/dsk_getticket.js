AFRAME.registerComponent('dsk_getticket', {
    schema: {},

    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('collide', function(event){
            //event.detail.body.el.setAttribute('burger', 'dsk_ticketgenerating', 'true');
            if(event.detail.body.el.components['dsk_ticketgenerating'].data.RonsCreamySurprise)
            {
                let ticket = document.querySelector('#ticket');
                let ticketID = document.querySelector('#ticketName');
                ticket.setAttribute('value', ' ' + event.detail.body.el.components['RonsCreamySurprise'].data.ingredient + '');
                ticketID.setAttribute('value', 'Rons creamy surprise ');
            }
            if(event.detail.body.el.components['dsk_ticketgenerating'].data.Big_mac)
            {
                let ticket = document.querySelector('#ticket');
                let ticketID = document.querySelector('#ticketName');
                ticket.setAttribute('value', ' ' + event.detail.body.el.components['bigmac'].data.ingredient + '');
                ticketID.setAttribute('value', 'Big Man ');
            }
            if(event.detail.body.el.components['dsk_ticketgenerating'].data.burger)
            {
                let ticket = document.querySelector('#ticket');
                let ticketID = document.querySelector('#ticketName');
                ticket.setAttribute('value', ' ' + event.detail.body.el.components['burger'].data.ingredient + '');
                ticketID.setAttribute('value', 'Burger ');
            }
        });
    },
    tick: function()
    {
        const Context_AF = this;
        //let gamecontroller = Context_AF.
    }
})