const collideCheckTime = 25;
var collideAllowed = true;
var time = 0;
var collidedel = null;
var thisel = null;
AFRAME.registerComponent('vr-snap-patty', {
    init: function(){
        
        const Context_AF = this;
        console.log('loadedsnap');
        

        this.el.addEventListener('collide', function(event){
            //console.log(event.detail.body.el.getAttribute('id'));
            const collided = event.detail.body;
            const collidedID = collided.el.getAttribute('id');
            if(collided.el.getAttribute('class') == 'grabbable' && collideAllowed && collided.el.getAttribute('id').includes('bb') == false){
                console.log('test');
                collideAllowed = false;
                this.emit('weewoo', {collidingEntity: collided.el}, false);
                return;
                // console.log('FIRING GAMEMANAGER!');
                // console.log(collided.el);
                // collideAllowed = false;
                // this.components['vr-burger-info'].data.burgerElements.push(collided.el);
                // //console.log(this.components['vr-burger-info'].data.burgerElements);
                // console.log(this.children);
                // collided.el.parentNode.removeChild(collided.el);
                // document.querySelector('#gameManager').components['vr-game-manager'].addNewBurger(this);
                // const children = this.children;
                // for(i = 0; i < children.length; i++){
                //     children[i].parentNode.removeChild(children[i])
                // }
            }
            return;
        });
        this.el.addEventListener('weewoo', function(event){
            //Get what types the elements within the array are then put that into a new basic array.
            this.components['vr-burger-info'].data.burgerElements.push(event.detail.collidingEntity);
            //console.log(this.components['vr-burger-info'].data.burgerElements);
            
            var simpArray = [];
            const existingArray = this.components['vr-burger-info'].data.burgerElements;
            for(i = 0; i < existingArray.length; i++){
                const elementID = existingArray[i].getAttribute('id');
                //console.log(elementID);
                if(elementID.includes('bb')){
                    simpArray.push(0);
                }
                else if(elementID.includes('ptty')){
                    simpArray.push(1);
                }
                else if(elementID.includes('chz')){
                    simpArray.push(2);
                }
            }
            //console.log(simpArray);
            //Get the position of the first element to use later.
            const startingPos = this.getAttribute('position');
            //console.log(startingPos);

            //Delete this element along with the collider one.
            for(i = 0; i < this.children.length; i++){
                console.log('delete');
                this.children[i].parentNode.removeChild(this.children[i]);
            }
            //Context_AF.yeetMyselfIntoTheAbyss();
            event.detail.collidingEntity.parentNode.removeChild(event.detail.collidingEntity);


            //Send the simpArray and the position to the gameManager to make a new entity.
            document.querySelector('#gameManager').components['vr-game-manager'].addNewBurgerEntity(simpArray, startingPos, this.getAttribute('id'));
        });
    },

    yeetMyselfIntoTheAbyss: function(){
        Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
    },

    tick: function(){
        //console.log(time);
        time++;
        if(time % collideCheckTime == 0){
            //console.log('ticktock');
            collideAllowed = true;
            time = 0;
        }
    },
    
})