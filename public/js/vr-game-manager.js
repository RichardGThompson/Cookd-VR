AFRAME.registerComponent('vr-game-manager', {
    init : function(){

    },

    addNewBurger : function(existingElement, newElement){
        var elementArray = [];
        console.log('called');
        //console.log(existingElement.components['vr-burger-info'].data.burgerElements);
        //console.log(newElement);

        //Append the new element to the existing one's array of elements.
        //existingElement.components['vr-burger-info'].data.burgerElements.push(newElement);
        const existingElementArray = existingElement.components['vr-burger-info'].data.burgerElements;
        existingElementArray.push(newElement);
        console.log(existingElementArray.length);
        console.log('done');



        //Go through each of the elements in the existing element's array of elements and make new entities.
        let burgerParent = document.createElement('a-entity');
        for(i = 0; i < existingElementArray.length; i++){
            if(i == 0){
                console.log('makeBun');
                burgerParent.setAttribute('id', existingElementArray[i].getAttribute('id'));
                burgerParent.setAttribute('class', existingElementArray[i].getAttribute('class'));
                burgerParent.setAttribute('mixin', existingElementArray[i].getAttribute('mixin'));
                burgerParent.setAttribute('position', existingElementArray[i].getAttribute('position'));
                burgerParent.setAttribute('geometry', existingElementArray[i].getAttribute('geometry'));
                
            }
            else{
                var height = 0;
                for(j = 0; j < i; j++){
                    // console.log(j);
                    // console.log(existingElementArray);
                    height += existingElementArray[j].components['geometry'].data.height;
                }
                var newPosition = existingElementArray[i].getAttribute('position');
                newPosition.y = height;
                console.log('makeChild');

                let childElement = document.createElement('a-entity');
                childElement.setAttribute('id', existingElementArray[i].getAttribute('id'));
                childElement.setAttribute('class', existingElementArray[i].getAttribute('class'));
                childElement.setAttribute('mixin', existingElementArray[i].getAttribute('mixin'));
                childElement.setAttribute('position', '0 ' + height + ' 0');
                childElement.setAttribute('geometry', existingElementArray[i].getAttribute('geometry'));
                console.log('pretestone');
                elementArray.push(childElement);
                console.log('posttestone');
            }
        }
        console.log('pretest');
        existingElement.parentNode.removeChild(existingElement);
        newElement.parentNode.removeChild(newElement);
        console.log('testinging');

        for(i = 0; i < elementArray.length; i++){
            burgerParent.appendChild(elementArray[i]);
        }
        
        burgerParent.setAttribute('dynamic-body', 'shape:auto');

        let scene = document.querySelector('a-scene');
        scene.appendChild(burgerParent);



        // //First get the id of the burger from the first element of the new data.
        // console.log(newData[0].getAttribute('id'));
        // //Delete the old one.
        // document.querySelector('#' + newData[0].getAttribute('id')).parentNode.removeChild(document.querySelector('#' + newData[0].getAttribute('id')));
        // //Then add the new one.
        // console.log(newData[0].getAttribute('mixin'));
        // console.log(newData[0].components['vr-element-info'].data.elemType);

        // let burgerElem = document.createElement('a-entity');
        // burgerElem.setAttribute('id', newData[0].getAttribute('id'));
        // burgerElem.setAttribute('class', newData[0].getAttribute('class'));
        // burgerElem.setAttribute('height', newData[0].getAttribute('height'));
        // burgerElem.setAttribute('width', newData[0].getAttribute('width'));
        // burgerElem.setAttribute('mixin', newData[0].getAttribute('mixin'));
        // burgerElem.setAttribute('position', newData[0].getAttribute('position'));

        // let scene = document.querySelector('a-scene');
        // scene.appendChild(burgerElem);
    }
});