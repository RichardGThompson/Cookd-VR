AFRAME.registerComponent('vr-add-body', {
    init: function(){
        console.log('addingshit');
        this.el.setAttribute('dynamic-body', '');
        this.el.setAttribute('vr-snap-patty', '');
        this.el.setAttribute('vr-burger-info', '');
    }
});