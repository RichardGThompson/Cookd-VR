AFRAME.registerComponent('vr-check-temp', {
    init : function(){
        console.log('fuckingfuck');
        this.el.addEventListener('collide', function(evt){
            const collidedEl = evt.detail.body.el;
            if(collidedEl.getAttribute('class') == 'grabbable' && collidedEl.getAttribute('vr-element-info') != null){
                console.log(collidedEl.components['vr-element-info'].data.elemType);
                if(collidedEl.components['vr-element-info'].data.elemType == 2){
                    document.querySelector('#thermText').setAttribute('text', 'value:' + collidedEl.components['vr-patty-info'].data.pattyTemp + '; align:center; color:black');
                    console.log(collidedEl.components['vr-patty-info'].data.pattyTemp);
                }
            }
        });
    }
})