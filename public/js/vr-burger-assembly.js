AFRAME.registerComponent('vr-burger-assembly', {
    init: function(){
        const Context_AF = this;
        const burgerElements = this.el.components['vr-burger-info'].data.burgerElements;
        //console.log(burgerElements);
        Context_AF.el.addEventListener('collide', function(evt){
            if(evt.detail.body.el.getAttribute('class') == 'grabbable' && evt.detail.body.el.getAttribute('vr-element-info') != null){
                const collidedEl = evt.detail.body.el;
                var prevElements = this.components['vr-burger-info'].data.burgerElements;

                var newArr = prevElements.concat(collidedEl.components['vr-element-info'].data.elemType);
                newArr = newArr.sort();
                console.log(newArr);
                strNewArr = newArr.toString();

                const possibleCombos = document.querySelector('#gameManager').components['vr-game-manager'].data.burgerCombinations;
                var comboFound = false;
                for(i = 0; i < possibleCombos.length; i++){
                    const strCombo = possibleCombos[i].toString();
                    if(strNewArr == strCombo){
                        //console.log('foundshit');
                        comboFound = true;
                        break;
                    }
                }
                
                if(comboFound){
                    let bgrElem = document.createElement('a-obj-model');
                    bgrElem.setAttribute('id', this.getAttribute('id'));
                    bgrElem.setAttribute('class', 'grabbable');
                    bgrElem.setAttribute('src', '#' + newArr.join('_') + 'Obj');
                    bgrElem.setAttribute('material', 'src:/assets/models/mtl/burgerMap.png');
                    bgrElem.setAttribute('dynamic-body', '');
                    bgrElem.setAttribute('scale', '0.02 0.02 0.02');
                    bgrElem.setAttribute('position', this.getAttribute('position'));
                    bgrElem.setAttribute('vr-burger-info', '');
                    bgrElem.setAttribute('vr-burger-assembly', '');

                    document.querySelector('#' + this.getAttribute('id')).components['vr-burger-info'].data.burgerElements = newArr;
                    
                    if(collidedEl.components['vr-element-info'].data.elemType == 2){
                        if(collidedEl.components['vr-patty-info'].data.pattyCooked != true){
                            console.log('undercooked');
                            document.querySelector('#' + this.getAttribute('id')).components['vr-burger-info'].data.underCooked = true;
                        }
                    }
                    
                    this.parentNode.removeChild(this);
                    collidedEl.parentNode.removeChild(collidedEl);
                    let scene = document.querySelector('a-scene');
                    scene.appendChild(bgrElem);
                }
            }
        });
    }


})