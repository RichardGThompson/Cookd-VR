AFRAME.registerComponent('vr-order-test', {
    schema:{
        orderDetails: {type:'array'},
    },
    init : function(){
        this.data.orderDetails.push(['creammmm','patty', 'patty', 'cum', 'morecum', 'ass']);
        //this.data.orderDetails.push(['burger','patty', 'patty', 'cheese']);
        console.log(this.data.orderDetails);
        for(i = 0; i < this.data.orderDetails.length; i++){
            let mainElement = document.createElement('a-entity');
            mainElement.setAttribute('id', this.data.orderDetails[i][0]);
            mainElement.setAttribute('text', 'value:' + this.data.orderDetails[i][0] + '; align:center; width:0.65";');
            mainElement.setAttribute('position', '0 0.135 0');
            this.el.appendChild(mainElement);


            // console.log(this.data.orderDetails[i][0]);
            // console.log(this.data.orderDetails[i].length);
            for(j = 1; j < this.data.orderDetails[i].length; j++){
                let childElement = document.createElement('a-entity');
                childElement.setAttribute('id', 'element');
                childElement.setAttribute('text', 'value:' + this.data.orderDetails[i][j] + '; align:center; width:0.60";');
                var newPos = 0.135 - (0.035 * j);
                childElement.setAttribute('position', '0 ' + newPos + ' 0');
                this.el.appendChild(childElement);
            }
            
        }
    },
    updateOrder:function(data){
        console.log(data);

        var elementArr = data.split(',');
        console.log(elementArr);
        const children = this.el.children;
        while (this.el.firstChild) {
            this.el.removeChild(this.el.lastChild);
          }
        console.log(children);
        for(i = 0; i < elementArr.length; i++){
            if(i == 0){
                let mainElement = document.createElement('a-entity');
                mainElement.setAttribute('id', elementArr[i]);
                mainElement.setAttribute('text', 'value:' + elementArr[i] + '; align:center; width:0.65";');
                mainElement.setAttribute('position', '0 0.135 0');
                this.el.appendChild(mainElement);
            }
            else{
                let childElement = document.createElement('a-entity');
                childElement.setAttribute('id', 'element');
                childElement.setAttribute('text', 'value:' + elementArr[i] + '; align:center; width:0.60";');
                var newPos = 0.135 - (0.035 * i);
                childElement.setAttribute('position', '0 ' + newPos + ' 0');
                this.el.appendChild(childElement);
            }
            
        }

        // for(i = 0; i < elementArr.length; i++){
        //     let mainElement = document.createElement('a-entity');
        //     mainElement.setAttribute('id', elementArr[i]);
        //     mainElement.setAttribute('text', 'value:' + elementArr[i] + '; align:center; width:0.65";');
        //     mainElement.setAttribute('position', '0 0.135 0');
        //     this.el.appendChild(mainElement);


        //     // console.log(this.data.orderDetails[i][0]);
        //     // console.log(this.data.orderDetails[i].length);
        //     for(j = 1; j < elementArr[i].length; j++){
        //         let childElement = document.createElement('a-entity');
        //         childElement.setAttribute('id', 'element');
        //         childElement.setAttribute('text', 'value:' + elementArr[j] + '; align:center; width:0.60";');
        //         var newPos = 0.135 - (0.035 * j);
        //         childElement.setAttribute('position', '0 ' + newPos + ' 0');
        //         this.el.appendChild(childElement);
        //     }
            
        // }
    }
});