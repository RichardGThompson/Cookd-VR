AFRAME.registerComponent('vr-burger-info', {
    schema:{
        burgerElements: {type:'array'},
        underCooked: {type:'boolean', default:false},
        overCooked: {type:'boolean', default:false},
    },
    init : function(){
        //console.log('init burger!');
        this.data.burgerElements = [];
        var src = this.el.getAttribute('src');
        src = src.slice(1, -3);
        //console.log(src);
        var elementArray = src.split('_').map(Number);
        //var elementArray = src.split('_');
        this.data.burgerElements = elementArray;
        //console.log(this.data.burgerElements);
    },

})