AFRAME.registerComponent('vr-cooking', {
    schema:{
        cooking: {type:'boolean', default:false},
        frameCounter: {type:'number', default:0},
        cookingIncrementTime: {type:'number', default:25},
    },
    dependencies: ['raycaster'],
    
    init : function(){
        const Context_AF = this;
        
        //console.log(this.data.parentID);
        //console.log(this.data.cooking);
        this.el.addEventListener('raycaster-intersection', function(hitObj){
            console.log('cooking');
            Context_AF.setCookingMode(true);
            //console.log('make the noise');
            this.parentNode.querySelector('#burgerCookingSoundEntity').components.sound.playSound();
            //console.log(this.parentNode.querySelector('#burgerCookingSoundEntity').components.sound);
        });
        this.el.addEventListener('raycaster-intersection-cleared', function(hitObj){
            Context_AF.setCookingMode(false);
            //console.log('dont make the noise');
            this.parentNode.querySelector('#burgerCookingSoundEntity').components.sound.pauseSound();
            //console.log(this.parentNode.querySelector('#burgerCookingSoundEntity').components.sound);
            //hitObj.components.sound.pauseSound();
        });
    },
    tick: function(){
        const Context_AF = this;
        //console.log(this.parentNode);
        const parentNode = this.el.parentNode;
        if(this.data.cooking == true){
            //console.log(this.el.parentNode.querySelector('#burgerCookingSoundEntity').components.sound);
            
            //this.el.isPlaying = true;
            this.data.frameCounter++;
            
            if(this.data.frameCounter == this.data.cookingIncrementTime && !parentNode.components['vr-patty-info'].data.pattyOvercooked){
                this.data.frameCounter = 0;
                var currTemp = parentNode.components['vr-patty-info'].data.pattyTemp;
                currTemp++;
                parentNode.setAttribute('vr-patty-info', 'pattyTemp:' + currTemp);
                //console.log(currTemp);
                if(currTemp >= parentNode.components['vr-patty-info'].data.pattyCookedTemp && currTemp < parentNode.components['vr-patty-info'].data.pattyOvercookTemp){
                    parentNode.components['vr-patty-info'].data.pattyCooked = true;
                    parentNode.components['vr-patty-info'].data.pattyOvercooked = false;
                    this.el.parentNode.querySelector('#cookedSound').components.sound.playSound();
                    parentNode.setAttribute('material','src:/assets/models/mtl/burgerMap.png');
                }
                else if(currTemp >= parentNode.components['vr-patty-info'].data.pattyOvercookTemp){
                    parentNode.components['vr-patty-info'].data.pattyCooked = false;
                    parentNode.components['vr-patty-info'].data.pattyOvercooked = true;
                    parentNode.setAttribute('material','src:/assets/models/mtl/burgerMapOvercooked.png');
                }
            }
        }
        else if (this.data.cooking == false){
           
            //this.el.parentNode.querySelector('#burgerCookingSoundEntity').components.sound.pauseSound();
        }
    },
    setCookingMode : function(event){
        this.data.cooking = event;
    },
})