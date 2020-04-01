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
        const burgerID = 'bb_' + bbElements.length;
        
        bbElem.setAttribute('id', 'bb_' + burgerID);
        bbElem.setAttribute('class', 'grabbable');
        bbElem.setAttribute('src', '#1Obj');
        bbElem.setAttribute('dynamic-body', '');
        bbElem.setAttribute('position', '1.1 1.728 2.611');
        bbElem.setAttribute('vr-burger-info', '');
        bbElem.setAttribute('vr-burger-assembly', '');
        
        

        bbElem.setAttribute('mixin', 'bottomBunMixin');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(bbElem);

        document.querySelector('#' + burgerID).components['vr-burger-info'].data.burgerElements = [1];
        console.log(document.querySelector('#' + burgerID).components['vr-burger-info'].data.burgerElements);
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