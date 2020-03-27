const delayTime = 200;
var interval = 0;
var makeAllowed = true;

AFRAME.registerComponent('vr-make-bottombun', {
    dependencies: ['raycaster'],
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            if(makeAllowed){
                Context_AF.addBottomBun();
                makeAllowed = false;
            }
        })
    },
    
    addBottomBun: function(){
        var bbElements = document.querySelectorAll('*[id^="bb"]');

        let bbElem = document.createElement('a-obj-model');
        var dispenserPosition = document.querySelector('#dispenserOne').getAttribute('position')
        
        bbElem.setAttribute('id', 'bb_' + bbElements.length);
        bbElem.setAttribute('class', 'grabbable');
        bbElem.setAttribute('src', '#1Obj');
        bbElem.setAttribute('dynamic-body', '');
        bbElem.setAttribute('position', '-0.015 1.615 -0.56');
        bbElem.setAttribute('vr-burger-info', '');
        bbElem.setAttribute('vr-burger-assembly', '');
        
        

        bbElem.setAttribute('mixin', 'bottomBunMixin');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(bbElem);
    },

    tick:function(){
        if(interval == delayTime){
            interval = 0;
            makeAllowed = true;
        }
        else{
            interval++;
            //console.log(interval);
        }
    }
})