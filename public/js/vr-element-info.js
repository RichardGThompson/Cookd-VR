AFRAME.registerComponent('vr-element-info', {
    schema: {
        elemType: {type:'number', default:0},
        stackable: {type:'boolean', default:false},
    },

    init:function(){
        const Context_AF = this;
        
    },

    setStackableTrue: function()
    {
        this.data.stackable = true;
    },
    
})