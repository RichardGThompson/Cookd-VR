AFRAME.registerComponent('vr-frying', {
    schema:{
        cooking: {type:'boolean', default:false},
        frameCounter: {type:'number', default:0},
        cookingIncrementTime: {type:'number', default:25},
        parentID: {type:'string'},
    },
    dependencies: ['raycaster'],
    init: function() {
        const Context_AF = this;
        this.el.addEventListener('raycaster-intersection', function(){
            Context_AF.setCookingMode(true);
            this.parentNode.querySelector('#burgerCookingSoundEntity').components.sound.playSound();
            console.log('hit the oil bitch');
        });
        this.el.addEventListener('raycaster-intersection-cleared', function(){
            Context_AF.setCookingMode(false);
            this.parentNode.querySelector('#burgerCookingSoundEntity').components.sound.pauseSound();
            console.log('outta that oilbitch');
        })
    },

    tick: function(){
        const Context_AF = this;

        const parentNode = this.el.parentNode;

        if(this.data.cooking){
            this.data.frameCounter++;
            if(this.data.frameCounter == this.data.cookingIncrementTime && !parentNode.components['vr-fry-details'].data.fryOvercooked){
                this.data.frameCounter = 0;
                var currentTemp = parentNode.components['vr-fry-details'].data.fryTemp;
                currentTemp++;
                parentNode.setAttribute('vr-fry-details', 'fryTemp:' + currentTemp);
                if(currentTemp >= parentNode.components['vr-fry-details'].data.fryCookedTemp && currentTemp < parentNode.components['vr-fry-details'].data.fryOvercookedTemp){
                    console.log('friesCooked!');
                    parentNode.components['vr-fry-details'].fryCooked = true;
                    parentNode.components['vr-fry-details'].fryOvercooked = false;
                    parentNode.setAttribute('material','src:/assets/models/mtl/basketAndFriesTexture.png');
                }
                else if(currentTemp >= parentNode.components['vr-fry-details'].data.fryOvercookedTemp){
                    parentNode.components['vr-fry-details'].fryOvercooked = true;
                    parentNode.components['vr-fry-details'].fryCooked = false;
                    parentNode.setAttribute('material','src:/assets/models/mtl/basketAndFriesTextureoCooked.png');
                }
            }
        }
    },

    setCookingMode : function(event){
        this.data.cooking = event;
    },
})