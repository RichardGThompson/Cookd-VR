//NOTE! 
//As of 2020-03-03 I have no idea how I got this to work, do not alter it until future me learns what the fuck I did.

AFRAME.registerComponent('vr-game-manager', {
    init : function(){

    },

    addNewBurger : function(existingElement, newElement){
        
        console.log('called');
        //console.log(existingElement.components['vr-burger-info'].data.burgerElements);
        //console.log(newElement);

        //Append the new element to the existing one's array of elements.
        //existingElement.components['vr-burger-info'].data.burgerElements.push(newElement);
        const existingElementArray = existingElement.components['vr-burger-info'].data.burgerElements;
        existingElementArray.push(newElement);
        console.log(existingElementArray);
        console.log('done');

        var elementArray = [];

        for(i = 1; i < existingElement.length; i++){
            elementArray.push(existingElement[i]);
        }

        existingElement.parentNode.removeChild(existingElement);
        newElement.parentNode.removeChild(newElement);



        //Go through each of the elements in the existing element's array of elements and make new entities.
        let burgerParent = document.createElement('a-entity');
        for(i = 0; i < existingElementArray.length; i++){
            if(i == 0){
                console.log(existingElementArray[i]);
                burgerParent.setAttribute('id', existingElementArray[i].getAttribute('id'));
                burgerParent.setAttribute('class', existingElementArray[i].getAttribute('class'));
                burgerParent.setAttribute('mixin', 'bottomBunMixin');
                burgerParent.setAttribute('vr-burger-info', '');
                burgerParent.setAttribute('position', existingElementArray[i].getAttribute('position'));
                burgerParent.setAttribute('geometry', existingElementArray[i].getAttribute('geometry'));
                burgerParent.setAttribute('dynamic-body', 'shape:auto');
                
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
        //console.log('pretest');
        
        //console.log('testinging');
        console.log(elementArray);

        for(i = 0; i < elementArray.length; i++){
            burgerParent.appendChild(elementArray[i]);
        }

        
        

        let scene = document.querySelector('a-scene');
        
        //burgerParent.setAttribute('vr-burger-info', '')
        //burgerParent.components['vr-burger-info'].data.burgerElements = ['test', 'test'];
        console.log(burgerParent.components['vr-burger-info']);
        scene.appendChild(burgerParent);
        console.log(burgerParent.components);



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