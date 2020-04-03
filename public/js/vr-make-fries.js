//X=-1.102
const frieselayTime = 100;
var friesinterval = 0;
var friesmakeAllowed = true;

AFRAME.registerComponent('vr-make-fries', {
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            console.log('did thing');
            if(friesmakeAllowed){
                Context_AF.addFries();
                friesmakeAllowed = false;
            }
        })
    },
    addFries: function(){
        var cheeseElements = document.querySelectorAll('*[id^="fry"]');

        let fryElem = document.createElement('a-obj-model');
        
        fryElem.setAttribute('id', 'fry_' + cheeseElements.length);
        fryElem.setAttribute('class', 'grabbable');
        fryElem.setAttribute('src', '#8Obj');
        fryElem.setAttribute('material', 'src:/assets/models/mtl/basketAndFriesTextureuCooked.png');
        fryElem.setAttribute('scale', '0.02 0.02 0.02');
        fryElem.setAttribute('position', '-1.102 1.7 2.595');
        fryElem.setAttribute('body', 'type: dynamic; mass: 5; shape: none');
        fryElem.setAttribute('shape__main', 'shape:box; halfExtents: 3 2 6.5; offset: 0 2 0');
        fryElem.setAttribute('shape__handle', 'shape:box; halfExtents: 0.5 0.5 2.8; offset: 0 6.5 -11.5;');
        fryElem.setAttribute('vr-fry-details', '');
        fryElem.setAttribute('vr-burger-info', '');

        let fryRaycast = document.createElement('a-entity');
        fryRaycast.setAttribute('id', 'burgerCasterOne');
        fryRaycast.setAttribute('class', 'cookableEntity');
        fryRaycast.setAttribute('raycaster', 'objects:.fryerOil; showLine: true; far: 0.03');
        fryRaycast.setAttribute('rotation', '-90 0 0');
        fryRaycast.setAttribute('vr-frying', '');
        fryElem.appendChild(fryRaycast);

        let soundElem = document.createElement('a-entity');
        soundElem.setAttribute('id', 'burgerCookingSoundEntity')
        soundElem.setAttribute('sound', 'src: #burgerCookingSound; autoplay: false; loop: true');
        fryElem.appendChild(soundElem);

        let soundDoneElem = document.createElement('a-entity');
        soundDoneElem.setAttribute('id', 'cookedSound')
        soundDoneElem.setAttribute('sound', 'src: #cookedSoundFile; autoplay: false; loop: false');
        fryElem.appendChild(soundDoneElem);



        
        let scene = document.querySelector('a-scene');
        scene.appendChild(fryElem);
    },

    tick:function(){
        if(friesinterval == frieselayTime){
            friesinterval = 0;
            friesmakeAllowed = true;
        }
        else{
            friesinterval++;
            //console.log(interval);
        }
    }
})