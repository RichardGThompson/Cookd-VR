const lettucedelayTime = 100;
var lettuceinterval = 0;
var lettucemakeAllowed = true;

AFRAME.registerComponent('vr-make-lettuce', {
    dependencies: ['raycaster'],
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            if(lettucemakeAllowed){
                Context_AF.addLettuce();
                lettucemakeAllowed = false;
            }
        })
    },
    addLettuce: function(){
        var cheeseElements = document.querySelectorAll('*[id^="let"]');

        let cheeseElem = document.createElement('a-obj-model');
        var dispenserPosition = document.querySelector('#dispenserGroup_3').getAttribute('position')
        
        cheeseElem.setAttribute('id', 'let_' + cheeseElements.length);
        cheeseElem.setAttribute('class', 'grabbable');
        cheeseElem.setAttribute('src', '#5Obj');
        cheeseElem.setAttribute('dynamic-body', '');
        cheeseElem.setAttribute('position', '-0.598 1.7 2.595');
        

        cheeseElem.setAttribute('mixin', 'lettuceMixin');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cheeseElem);
    },

    tick:function(){
        if(lettuceinterval == lettucedelayTime){
            lettuceinterval = 0;
            lettucemakeAllowed = true;
        }
        else{
            lettuceinterval++;
            //console.log(interval);
        }
    }
})