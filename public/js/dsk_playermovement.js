AFRAME.registerComponent('dsk_playermovement', {
    schema: {},
    init : function() {
        const Context_AF = this;

        window.addEventListener('keydown', function(event) {
            if(event.keyCode == 87)
            {
                console.log('w pressed');
            }
            

        });
    },
});