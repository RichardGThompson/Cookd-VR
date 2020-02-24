AFRAME.registerComponent('vr-print-position', {
    init : function () {
        console.log(this.el.getAttribute('position'));
    }
})