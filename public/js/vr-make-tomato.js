//X=-0.349

const tomdelayTime = 100;
var tominterval = 0;
var tommakeAllowed = true;

AFRAME.registerComponent('vr-make-tomato', {
    dependencies: ['raycaster'],
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            console.log('called TOM');
            if(tommakeAllowed){
                console.log('did Tom');
                Context_AF.addTomato();
                tommakeAllowed = false;
            }
        })
    },
    addTomato: function(){
        var tomatoElements = document.querySelectorAll('*[id^="tom"]');

        let tomatoElem = document.createElement('a-obj-model');
        
        tomatoElem.setAttribute('id', 'tom_' + tomatoElements.length);
        tomatoElem.setAttribute('class', 'grabbable');
        tomatoElem.setAttribute('src', '#7Obj');
        tomatoElem.setAttribute('dynamic-body', '');
        tomatoElem.setAttribute('position', '-0.349 1.7 2.595');
        

        tomatoElem.setAttribute('mixin', 'tomatoMixin');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(tomatoElem);
    },

    tick:function(){
        if(tominterval == tomdelayTime){
            tominterval = 0;
            tommakeAllowed = true;
        }
        else{
            tominterval++;
            //console.log(interval);
        }
    }
})