AFRAME.registerComponent('vr-make-patty', {
    dependencies: ['raycaster'],
    init: function(){
        console.log('testing');
        
        const Context_AF = this;
        
        var burgers = document.querySelectorAll('*[id^="ptty"]');
        //const pttyLen = pattyElements.length();
        console.log(burgers)

        Context_AF.el.addEventListener('raycaster-intersection', function(){
            Context_AF.addPatty()
        })
    },
    addPatty: function(){
        var pattyElements = document.querySelectorAll('*[id^="ptty"]');


        let pattyElem = document.createElement('a-cylinder');
        pattyElem.setAttribute('id', 'ptty_' + pattyElements.length);
        pattyElem.setAttribute('class', 'grabbable');
        pattyElem.setAttribute('mixin', 'pattyMixin');
        pattyElem.setAttribute('height', '0.02');
        pattyElem.setAttribute('radius', '0.08');
        pattyElem.setAttribute('position', '0.120 1.3 -0.653');

        let raycastOne = document.createElement('a-entity');
        raycastOne.setAttribute('id', 'burgerCasterOne');
        raycastOne.setAttribute('class', 'cookableEntity');
        raycastOne.setAttribute('raycaster', 'objects: .hotSurface; showLine: false; far: 0.02');
        raycastOne.setAttribute('rotation', '90 0 0');
        raycastOne.setAttribute('vr-cooking', '');

        let raycastTwo = document.createElement('a-entity');
        raycastTwo.setAttribute('id', 'burgerCasterTwo');
        raycastTwo.setAttribute('class', 'cookableEntity');
        raycastTwo.setAttribute('raycaster', 'objects: .hotSurface; showLine: false; far: 0.02');
        raycastTwo.setAttribute('rotation', '-90 0 0');
        raycastTwo.setAttribute('vr-cooking', '');

        pattyElem.appendChild(raycastOne);
        pattyElem.appendChild(raycastTwo);
        let scene = document.querySelector('a-scene');
        scene.appendChild(pattyElem);

        
    }
})