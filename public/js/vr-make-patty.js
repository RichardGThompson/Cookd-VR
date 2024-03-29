const pattydelayTime = 100;
var pattyinterval = 0;
var pattymakeAllowed = true;

AFRAME.registerComponent('vr-make-patty', {
    dependencies: ['raycaster'],
    init: function(){
        //console.log('testing');
        
        const Context_AF = this;
        
        var burgers = document.querySelectorAll('*[id^="ptty"]');
        //const pttyLen = pattyElements.length();
        //console.log(burgers)

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            if(pattymakeAllowed){
                Context_AF.addPatty();
                pattymakeAllowed = false;
            }
        })
    },
    addPatty: function(){
        var pattyElements = document.querySelectorAll('*[id^="ptty"]');

        let pattyElem = document.createElement('a-obj-model');
        //var dispenserPosition = document.querySelector('#dispenserOne').getAttribute('position')
        
        pattyElem.setAttribute('id', 'ptty_' + pattyElements.length);
        pattyElem.setAttribute('class', 'grabbable');
        pattyElem.setAttribute('src', '#2Obj');
        pattyElem.setAttribute('dynamic-body', '');
        pattyElem.setAttribute('vr-patty-info', '');
        pattyElem.setAttribute('position', '0.152 1.701 2.595');
        
        pattyElem.setAttribute('mixin', 'pattyMixin');
        pattyElem.setAttribute('material', 'src:/assets/models/mtl/burgerMapUndercooked.png');


        let raycastOne = document.createElement('a-entity');
        raycastOne.setAttribute('id', 'burgerCasterOne');
        raycastOne.setAttribute('class', 'cookableEntity');
        raycastOne.setAttribute('raycaster', 'objects:.hotSurface; showLine: false; far: 0.03');
        raycastOne.setAttribute('rotation', '90 0 0');
        raycastOne.setAttribute('vr-cooking', '');

        let raycastTwo = document.createElement('a-entity');
        raycastTwo.setAttribute('id', 'burgerCasterTwo');
        raycastTwo.setAttribute('class', 'cookableEntity');
        raycastTwo.setAttribute('raycaster', 'objects:.hotSurface; showLine: false; far: 0.03');
        raycastTwo.setAttribute('rotation', '-90 0 0');
        raycastTwo.setAttribute('vr-cooking', '');

        let soundElem = document.createElement('a-entity');
        soundElem.setAttribute('id', 'burgerCookingSoundEntity')
        soundElem.setAttribute('sound', 'src: #burgerCookingSound; autoplay: false; loop: true');

        let soundDoneElem = document.createElement('a-entity');
        soundDoneElem.setAttribute('id', 'cookedSound')
        soundDoneElem.setAttribute('sound', 'src: #cookedSoundFile; autoplay: false; loop: false');
        pattyElem.appendChild(soundDoneElem);


        pattyElem.appendChild(raycastOne);
        pattyElem.appendChild(raycastTwo);
        pattyElem.appendChild(soundElem);
        let scene = document.querySelector('a-scene');
        scene.appendChild(pattyElem);
    },
    
    tick:function(){
        if(pattyinterval == pattydelayTime){
            pattyinterval = 0;
            pattymakeAllowed = true;
        }
        else{
            pattyinterval++;
        }
    }
})