AFRAME.registerComponent('vr-grab', {
    init : function(){
        const Context_AF = this;
        var grabbing = false;
        var grabbed = false;
        var grabbedID = "";
        Context_AF.el.addEventListener('collide', function (e) {
            //console.log(e.detail.body.el);    // Other entity, which playerEl touched.
            const collidedEl = e.detail.body.el;
            if(collidedEl.getAttribute('class') == 'grabbable' && grabbing == true && grabbed == false){
                console.log('pickup');
                grabbedID = collidedEl.getAttribute('id');
                //<a-box constraint="target: #other-box;" dynamic-body /> 
                console.log(this.getAttribute('id'));
                Context_AF.el.setAttribute('constraint', 'target: #' + grabbedID);
                grabbed = true;
            }
            if(grabbed == true && grabbing == false){
                Context_AF.el.removeAttribute('constraint');
                grabbed = false;
            }
        });

        Context_AF.el.addEventListener('gripdown', function(){
            grabbing = true;
        })
        Context_AF.el.addEventListener('gripup', function(){
            grabbing = false;
        })
    },
})