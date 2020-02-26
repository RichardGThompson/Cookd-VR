AFRAME.registerComponent('vr-cooking', {
    schema:{
        cooking: {type:'boolean', default:false},
        frameCounter: {type:'number', default:0},
        cookingIncrementTime: {type:'number', default:10},
        parentID: {type:'string'},
    },
    dependencies: ['raycaster'],
    
    init : function(){
        const Context_AF = this;
        
        //console.log(this.data.parentID);
        //console.log(this.data.cooking);
        this.el.addEventListener('raycaster-intersection', function(hitObj){
            Context_AF.setCookingMode(true);
        });
        this.el.addEventListener('raycaster-intersection-cleared', function(hitObj){
            Context_AF.setCookingMode(false);
        });
    },
    tick: function(){
        const Context_AF = this;
        //console.log(this.parentNode);
        const parentNode = this.el.parentNode;
        if(this.data.cooking == true){
            this.data.frameCounter++;
            
            if(this.data.frameCounter == this.data.cookingIncrementTime && !parentNode.components['vr-patty-info'].data.pattyOvercooked){
                this.data.frameCounter = 0;
                var currTemp = parentNode.components['vr-patty-info'].data.pattyTemp;
                currTemp++;
                parentNode.setAttribute('vr-patty-info', 'pattyTemp:' + currTemp);
                console.log(currTemp);
                if(currTemp >= parentNode.components['vr-patty-info'].data.pattyCookedTemp && currTemp < parentNode.components['vr-patty-info'].data.pattyOvercookTemp){
                    parentNode.components['vr-patty-info'].data.pattyCooked = true;
                    parentNode.components['vr-patty-info'].data.pattyOvercooked = false;
                    parentNode.setAttribute('material', 'color:brown');
                }
                else if(currTemp >= parentNode.components['vr-patty-info'].data.pattyOvercookTemp){
                    parentNode.components['vr-patty-info'].data.pattyCooked = false;
                    parentNode.components['vr-patty-info'].data.pattyOvercooked = true;
                    parentNode.setAttribute('material', 'color:black');
                }
            }
        }
    },
    setCookingMode : function(event){
        this.data.cooking = event;
    },
})