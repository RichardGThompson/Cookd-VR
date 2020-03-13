AFRAME.registerComponent('vr-element-info', {
    schema: {
        elemType: {type:'number', default:0},
        stackable: {type:'boolean', default:false},
        height: {type:'number'},
    },

    init:function(){
        const Context_AF = this;
        switch(this.data.elemType){
            case 1:
                this.data.height = 1.65;
                break;
            case 2:
                this.data.height = 1.77;
                break;
            case 3:
                this.data.height = 69;
        }
        console.log(this.data.height);
    },

    setStackableTrue: function()
    {
        //this.data.stackable = true;
    },
    
})