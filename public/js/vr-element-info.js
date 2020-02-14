AFRAME.registerComponent('vr-element-info', {
    schema: {
        stackable: {type:'boolean', default:false},

    },
    

    init : function(){
        const Context_AF = this;
        if(this.el.getAttribute('id').includes('bunBottom')){
            this.data.stackable = true;
        }
        else{
            this.data.stackable = false;
        }
        console.log(this.data.stackable);
        //Context_AF.setStackableFalse();
        this.el.addEventListener('collide', function(collidedObj){
            
            if(collidedObj.detail.body.el.getAttribute('class') == 'grabbable'){
                if(collidedObj.detail.body.el.getAttribute('vr-element-info').stackable == true){
                    
                    console.log('collided: ' + collidedObj.detail.body.el);
                    thisID = Context_AF.el.getAttribute('id');
                    
                    //Get the position of the collided object.
                    collidedPosition = collidedObj.detail.body.el.getAttribute('position');
                    
                    collidedObj.detail.body.el.setAttribute('constraint', 'target: #' + thisID);

                    //this.setAttribute('constraint', 'target:' + collidedObj.detail.body.el.getAttribute('id'));
                    Context_AF.setStackableTrue();
                    collidedObj.detail.body.el.getAttribute('vr-element-info').stackable = false;
                }
            }
        })
    },

    setStackableTrue: function()
    {
        this.data.stackable = true;
    },
    
})