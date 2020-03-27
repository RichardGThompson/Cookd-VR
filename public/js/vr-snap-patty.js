const collideCheckTime = 25;
var collideAllowed = true;
var time = 0;
var collidedel = null;
var thisel = null;
AFRAME.registerComponent('vr-snap-patty', {
    init: function(){
        Context_AF = this;
        
        Context_AF.el.addEventListener('collide', function(evt){
            //Check to see if collided obj is grabbable.
            if(evt.detail.body.el.getAttribute('class') == 'grabbable'){
                const collidedEl = evt.detail.body.el;
                //Then check to see if it is a food type.
                if(collidedEl.getAttribute('id').includes('ptty')){
                    
                }
            }
        });

    }
})