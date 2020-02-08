

AFRAME.registerComponent('vr-grab', {
    init : function(){
        const Context_AF = this;
        var grabbing = false;
        var grabbed = false;

        //Check to see if the controller is touching a grabbable object.
        Context_AF.el.addEventListener('collide', function(collidedObj){
            //Get the element of the object the controller collided with.
            const collidedEl = collidedObj.detail.body.el;
            
            //Check to see if the object is grabbable, if the hand is currently in a grabbing state, and if there is not an object currently in hand.
            if(collidedEl.getAttribute('class') == 'grabbable' && grabbing && !grabbed){
                //Attach a constraint to the hand.
                Context_AF.el.setAttribute('constraint', 'target: #' + collidedEl.getAttribute('id'));
                grabbed = true;
            }
        })

        //Check to see if the hand is gripping down.
        Context_AF.el.addEventListener('gripdown', function(){
            grabbing = true;
        })

        //Check to see if the hand is not gripping down.
        Context_AF.el.addEventListener('gripup', function(){
            grabbing = false;
            //If there is an object grabbed, then drop it.
            if(grabbed == true){
                //Remove the object constraint from the controller.
                Context_AF.el.removeAttribute('constraint');
                grabbed = false;
            }
        })
    },
})