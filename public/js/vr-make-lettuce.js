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
        cheeseElem.setAttribute('position', '-0.351 1.615 -0.56');
        

        cheeseElem.setAttribute('mixin', 'lettuceMixin');
        //pattyElem.setAttribute('geometry','primitive:cylinder; height: 0.02; radius:0.075;');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cheeseElem);
    },

    tick:function(){
        if(interval == delayTime){
            lettuceinterval = 0;
            lettucemakeAllowed = true;
        }
        else{
            lettuceinterval++;
            //console.log(interval);
        }
    }
})