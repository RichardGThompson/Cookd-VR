AFRAME.registerComponent('vr-snap-patty', {
    dependencies: ['raycaster'],
    init: function(){
        
        const Context_AF = this;
        console.log(this);

        this.el.addEventListener('raycaster-intersection', function(hitObj){
            console.log(hitObj);
            //console.log('hitObject' + hitObj);
            //this.parentNode.setAttribute('constraint', 'target: ' + hitObj.el.getAttribute('id'));
        })
        
    }
})