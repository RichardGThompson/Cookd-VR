const collideCheckTime = 250;
var collideAllowed = true;
var time = 0;
AFRAME.registerComponent('vr-snap-patty', {
    init: function(){
        
        const Context_AF = this;
        //console.log(this);

        this.el.addEventListener('collide', function(event){
            //console.log(event.detail.body.el.getAttribute('id'));
            const collided = event.detail.body;
            const collidedID = collided.el.getAttribute('id');
            if(collided.el.getAttribute('class') == 'grabbable' && collideAllowed){
                collideAllowed = false;
                // console.log(this);
                // console.log(collided.el);
                document.querySelector('#gameManager').components['vr-game-manager'].addNewBurger(this, collided.el);
                
                // const collidedID = collided.el.getAttribute('id');
                // const thisPosition = this.getAttribute('position');
                // thisPosition.y += 0.02;
                // let pattyElem = document.createElement('a-cylinder');
                // pattyElem.setAttribute('id', collided.el.getAttribute('id'));
                // pattyElem.setAttribute('class', collided.el.getAttribute('class'));
                // pattyElem.setAttribute('mixin', 'pattyMixin');
                // pattyElem.setAttribute('height', '0.02');
                // pattyElem.setAttribute('radius', '0.08');
                // pattyElem.setAttribute('position', '0 0 0');
                // pattyElem.setAttribute('vr-element-info', 'elemType: 2');
                // pattyElem.setAttribute('vr-patty-info', '');

                // let raycastOne = document.createElement('a-entity');
                // raycastOne.setAttribute('id', 'burgerCasterOne');
                // raycastOne.setAttribute('class', 'cookableEntity');
                // raycastOne.setAttribute('raycaster', 'objects: .hotSurface; showLine: false; far: 0.02');
                // raycastOne.setAttribute('rotation', '90 0 0');
                // raycastOne.setAttribute('vr-cooking', '');

                // let raycastTwo = document.createElement('a-entity');
                // raycastTwo.setAttribute('id', 'burgerCasterTwo');
                // raycastTwo.setAttribute('class', 'cookableEntity');
                // raycastTwo.setAttribute('raycaster', 'objects: .hotSurface; showLine: false; far: 0.02');
                // raycastTwo.setAttribute('rotation', '-90 0 0');
                // raycastTwo.setAttribute('vr-cooking', '');

                // var patty = document.querySelector('#' + collidedID);
                // patty.parentNode.removeChild(patty);

                // pattyElem.appendChild(raycastOne);
                // pattyElem.appendChild(raycastTwo);
                // this.appendChild(pattyElem);
                // // let scene = document.querySelector('a-scene');
                // // scene.querySelector('#' + this.getAttribute('id')).appendChild(pattyElem);

                // this.components['vr-burger-info'].updateBurger();

                // //this.removeAttribute('dynamic-body');
            }
        })
        
    },
    tick: function(){
        //console.log(time);
        time++;
        if(time % collideCheckTime == 0){
            console.log('ticktock');
            collideAllowed = true;
            time = 0;
        }
    }
})