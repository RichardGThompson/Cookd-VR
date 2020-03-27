AFRAME.registerComponent('vr-burger-assembly', {
    init: function(){
        const Context_AF = this;
        const burgerElements = this.el.components['vr-burger-info'].data.burgerElements;
        console.log(burgerElements);

        Context_AF.el.addEventListener('collide', function(evt){
            if(evt.detail.body.el.getAttribute('class') == 'grabbable' && burgerElements[burgerElements.length-1] != 4){
                const collidedEl = evt.detail.body.el;
                //Now check to see if there is a possible combination.
                var elements = this.components['vr-burger-info'].data.burgerElements;
                //console.log(collidedEl.components['vr-element-info'].data.elemType);
                elements.push(collidedEl.components['vr-element-info'].data.elemType);
                console.log(elements);
                
                const possibleCombos = document.querySelector('#gameManager').components['vr-game-manager'].data.burgerCombinations;
                //console.log(possibleCombos);
                var found = false;
                for(i = 0; i < possibleCombos.length; i++){
                    const inArray = possibleCombos[i];

                    var sortedArr = possibleCombos[i];
                    sortedArr = sortedArr.sort();
                    sortedArr = sortedArr.toString();
                    
                    var newArr = elements.sort();
                    newArr = newArr.toString();

                    if(newArr == sortedArr){
                        console.log('MATCH!');
                        found = true;
                        this.parentNode.removeChild(this);
                        const position = this.getAttribute('position');
                        collidedEl.parentNode.removeChild(collidedEl);

                        var newElement = document.querySelector('#gameManager').components['vr-game-manager'].data.burgerCombinations[i].join('_');
                        console.log(newElement);
                        mtlName = '/assets/models/mtl/' + newElement +'.mtl';
                        newElement = '#' + newElement + 'Obj';
                        //newElement = newElement.splice(newElement.length, 'Obj');
                        

                        let bgrElem = document.createElement('a-obj-model');
                        bgrElem.setAttribute('id', 'burgerTest');
                        bgrElem.setAttribute('class', 'grabbable');
                        bgrElem.setAttribute('src', newElement);
                        bgrElem.setAttribute('material', 'src:/assets/models/mtl/burgerMap.png');
                        bgrElem.setAttribute('dynamic-body', '');
                        bgrElem.setAttribute('scale', '0.02 0.02 0.02');
                        bgrElem.setAttribute('position', position);
                        bgrElem.setAttribute('vr-burger-info', '');
                        bgrElem.setAttribute('vr-burger-assembly', '');

                        let scene = document.querySelector('a-scene');
                        scene.appendChild(bgrElem);
                        break;
                    }
                }
            }
        })
    }


})