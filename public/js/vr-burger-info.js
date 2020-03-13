AFRAME.registerComponent('vr-burger-info', {
    schema:{
        burgerElements: {type:'array'},
    },
    init : function(){
        console.log('init burger!');
        this.data.burgerElements = [];
        this.data.burgerElements.push(this.el);
        var childNodes = this.el.children;
        //console.log(childNodes);
        
        for(let i = 0; i < childNodes.length; i++){
            const elem = childNodes[i];
            //console.log(elem.components['vr-element-info'].data.elemType);
            this.data.burgerElements.push(elem);
        }
        
        //['vr-game-manager'].addNewBurger(this.data.burgerElements);
        console.log(this.data.burgerElements);
         
    },
    updateBurger : function(){
        this.data.burgerElements = [];
        this.data.burgerElements.push(this.el);
        
        for(i = 0; i < this.data.children.length; i++){
            var offsetHeight = 0;
            for(j = 0; i <= this.data.burgerElements.length; i++){
                offsetHeight += this.data.burgerElements[i].getAttribute('height');
                console.log(offsetHeight);
            }
        }

        document.querySelector('#gameManager').components['vr-game-manager'].addNewBurger(this.data.burgerElements);
        // this.data.burgerElements = [];
        // this.data.burgerElements.push(this.el);
        // var childNodes = this.el.children;
        // let burgerElem = this.el;
        // //elementArr.push(this.el);
        
        // for(let i = 0; i < childNodes.length; i++){
        //     const elem = childNodes[i];
        //     if(i != 0){
        //         const offsetHeight = this.data.burgerElements[i - 1].getAttribute('height');
        //         console.log('Offset: ' + offsetHeight);
        //         //burgerElem.setAttribute('position', )
        //     }
        //     //console.log(elem.components['vr-element-info'].data.elemType);
        //     burgerElem.appendChild(elem);
        //     //elementArr.push(elem);
        // }

        // console.log(this.data.burgerElements);
    },

})