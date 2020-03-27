const topdelayTime = 100;
var topinterval = 0;
var topmakeAllowed = true;

AFRAME.registerComponent('vr-make-topbun', {
    dependencies: ['raycaster'],
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            if(makeAllowed){
                Context_AF.addTopBun();
                topmakeAllowed = false;
            }
        })
    },
    addTopBun: function(){
        var tbElements = document.querySelectorAll('*[id^="tb"]');

        let tbElem = document.createElement('a-obj-model');
        var dispenserPosition = document.querySelector('#dispenserOne').getAttribute('position')
        
        tbElem.setAttribute('id', 'tb_' +tbElements.length);
        tbElem.setAttribute('class', 'grabbable');
        tbElem.setAttribute('src', '#4Obj');
        tbElem.setAttribute('dynamic-body', '');
        tbElem.setAttribute('position', '-0.015 1.615 -0.56');
        

        tbElem.setAttribute('mixin', 'topBunMixin');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(tbElem);
    },

    tick:function(){
        if(topinterval == topdelayTime){
            topinterval = 0;
            topmakeAllowed = true;
        }
        else{
            topinterval++;
            //console.log(interval);
        }
    },
})