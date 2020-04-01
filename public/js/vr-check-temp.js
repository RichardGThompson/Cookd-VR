AFRAME.registerComponent('vr-check-temp', {
    init : function(){
        //Add an event listener for a collision with another object.
        this.el.addEventListener('collide', function(evt){
            //A varaible that holds the collided entity information.
            const collidedEl = evt.detail.body.el;
            
            //If the collided object has a class of grabbable and it is a burger element.
            if(collidedEl.getAttribute('class') == 'grabbable' && collidedEl.getAttribute('vr-element-info') != null){
                //If the collided object has a type of a patty.
                if(collidedEl.components['vr-element-info'].data.elemType == 2){
                    //Set the text of the termometer to the current temp of the patty.
                    document.querySelector('#thermText').setAttribute('text', 'value:' + collidedEl.components['vr-patty-info'].data.pattyTemp + '; align:center; color:black');
                }
            }
        });
    }
})