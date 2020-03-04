AFRAME.registerComponent('vr-patty-info', {
    schema: {
        pattyTemp : {type:'number', default:70},
        pattyCooked : {type:'boolean', default:false},
        pattyOvercooked : {type:'boolean', default:false},
        pattyOvercookTemp:{type:'number', default:212},
        pattyCookedTemp:{type:'number', default:165},
    },
    init : function(){
        //console.log(this.el.parentNode.components['vr-burger-info']);
    }
});