AFRAME.registerComponent('vr-cooking', {
    dependencies: ['raycaster'],
    init : function(){
        
        this.el.addEventListener('raycaster-intersection', function(hitObj){
            //console.log(this.parentNode);
            this.parentNode.setAttribute('material', 'color: purple');
        })
        this.el.addEventListener('raycaster-intersection-cleared', function(hitObj){
            this.parentNode.setAttribute('material', 'color:red');
        })
        
        
    }
})