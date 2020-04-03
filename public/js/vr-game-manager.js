

AFRAME.registerComponent('vr-game-manager', {
    schema:{
        burgerCombinations: {type:'array', default:[[1,2], [1,2,3], [1,2,3,4], [1,2,3,5], [1,2,3,5,6], [1,2,3,4,5,6], [1,2,3,5,7], [1,2,3,5,6,7], [1,2,3,4,5,7,6], [1,2,4]]},
        currentOrders: {type:'array'},
        leftControllerState: {type:'string'},
        rightControllerState: {type:'string'},
    },
    init : function(){
        console.log('Game Manager Attached!');
        //console.log(this.data.burgerCombinations);
    },
});