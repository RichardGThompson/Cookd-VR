const cheesedelayTime = 100;
var cheeseinterval = 0;
var cheesemakeAllowed = true;

AFRAME.registerComponent('vr-make-cheese', {
    dependencies: ['raycaster'],
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            if(cheesemakeAllowed){
                Context_AF.addCheese();
                cheesemakeAllowed = false;
            }
        })
    },
    addCheese: function(){
        var cheeseElements = document.querySelectorAll('*[id^="chz"]');

        let cheeseElem = document.createElement('a-obj-model');
        var dispenserPosition = document.querySelector('#dispenserOne').getAttribute('position')
        
        cheeseElem.setAttribute('id', 'chz_' + cheeseElements.length);
        cheeseElem.setAttribute('class', 'grabbable');
        cheeseElem.setAttribute('src', '#3Obj');
        cheeseElem.setAttribute('dynamic-body', '');
        cheeseElem.setAttribute('position', '-0.351 1.615 -0.56');
        

        cheeseElem.setAttribute('mixin', 'cheeseMixin');
        //pattyElem.setAttribute('geometry','primitive:cylinder; height: 0.02; radius:0.075;');
        
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cheeseElem);
    },

    tick:function(){
        if(interval == delayTime){
            cheeseinterval = 0;
            cheesemakeAllowed = true;
        }
        else{
            cheeseinterval++;
            //console.log(interval);
        }
    }
})