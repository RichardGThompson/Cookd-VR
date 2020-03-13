//NOTE! 
//As of 2020-03-03 I have no idea how I got this to work, do not alter it until future me learns what the fuck I did.

//Make shit slow and manaually.

AFRAME.registerComponent('vr-game-manager', {
    init : function(){
        console.log('Game Manager Attached!');
    },

    addNewBurgerEntity : function(arrayIn, positionIn, prevID){
        console.log(arrayIn);
        console.log(positionIn);

        
        
        
        
        //console.log(arrayIn.toString());

        if(arrayIn.toString() == '0,1'){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            let bottomBunElement = document.createElement('a-obj-model');
            bottomBunElement.setAttribute('id', 'bb_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
            bottomBunElement.setAttribute('class', 'grabbable');
            bottomBunElement.setAttribute('src', '#bottomBunObj');
            bottomBunElement.setAttribute('mixin', 'bottomBunMixin');
            bottomBunElement.setAttribute('position', positionIn);

            let childOne = document.createElement('a-obj-model');
            childOne.setAttribute('id', 'some_ptty');
            childOne.setAttribute('src', '#pattyObj');
            childOne.setAttribute('scale', '1 1 1');
            childOne.setAttribute('position', '0 2.9 0');
            bottomBunElement.appendChild(childOne);
            bottomBunElement.setAttribute('vr-add-body', '');
            let scene = document.querySelector('a-scene');
            scene.appendChild(bottomBunElement);
        }
        else if(arrayIn.toString() == '0,1,1'){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            let bottomBunElement = document.createElement('a-obj-model');
            bottomBunElement.setAttribute('id', 'bb_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
            bottomBunElement.setAttribute('class', 'grabbable');
            bottomBunElement.setAttribute('src', '#bottomBunObj');
            bottomBunElement.setAttribute('mixin', 'bottomBunMixin');
            bottomBunElement.setAttribute('position', positionIn);

            let childOne = document.createElement('a-obj-model');
            childOne.setAttribute('id', 'some_ptty');
            childOne.setAttribute('src', '#pattyObj');
            childOne.setAttribute('scale', '1 1 1');
            childOne.setAttribute('position', '0 2.9 0');
            bottomBunElement.appendChild(childOne);

            let childTwo = document.createElement('a-obj-model');
            childTwo.setAttribute('id', 'some_ptty');
            childTwo.setAttribute('src', '#pattyObj');
            childTwo.setAttribute('scale', '1 1 1');
            childTwo.setAttribute('position', '0 4.9 0');
            bottomBunElement.appendChild(childTwo);

            bottomBunElement.setAttribute('vr-add-body', '');
            let scene = document.querySelector('a-scene');
            scene.appendChild(bottomBunElement);
        }
        
        console.log(document.querySelector('#' + prevID));
        const prevItem = document.querySelector('#' + prevID);
        //prevItem.parentNode.object3D.position.set(30, 0, 30);
        //document.querySelector('#' + prevID).parentNode.removeChild(document.querySelector('#' + prevID));

        
    }
});