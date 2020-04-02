//X=-1.344

const onidelayTime = 100;
var oniinterval = 0;
var onimakeAllowed = true;

AFRAME.registerComponent('vr-make-onion', {
    dependencies: ['raycaster'],
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            if(onimakeAllowed){
                Context_AF.addOnion();
                onimakeAllowed = false;
            }
        })
    },
    addOnion: function(){
        var onionElements = document.querySelectorAll('*[id^="oni"]');

        let onionElem = document.createElement('a-obj-model');
        
        onionElem.setAttribute('id', 'oni_' + onionElements.length);
        onionElem.setAttribute('class', 'grabbable');
        onionElem.setAttribute('src', '#6Obj');
        onionElem.setAttribute('dynamic-body', '');
        onionElem.setAttribute('position', '-1.344 1.7 2.595');
        

        onionElem.setAttribute('mixin', 'onionMixin');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(onionElem);
    },

    tick:function(){
        if(oniinterval == onidelayTime){
            oniinterval = 0;
            onimakeAllowed = true;
        }
        else{
            oniinterval++;
            //console.log(interval);
        }
    }
})