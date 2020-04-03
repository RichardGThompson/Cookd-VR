AFRAME.registerComponent('vr-fry-details', {
    schema: {
        fryTemp: { type:'number', default:69},
        fryCookedTemp: {type:'number', default:125},
        fryOvercookedTemp: {type:'number', default:170},
        fryCooked: {type:'boolean', default:false},
        fryOvercooked: {type:'boolean', default:false},

    },

    init : function(){

    }
})