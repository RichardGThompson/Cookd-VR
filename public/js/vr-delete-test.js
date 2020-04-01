AFRAME.registerComponent('vr-delete-test', {
    dependencies: ['raycaster'],
    init : function(){
        this.el.addEventListener('raycaster-intersection', function(){
            const obj = document.querySelector('#bb_0');
            obj.parentNode.removeChild(obj);
        })
    }
})