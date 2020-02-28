


AFRAME.registerComponent('dsk_npcspawning', {
    schema: {
        counter: {type:'number', default:0},
        hasspawned: {type:'boolean', default: false},
        table1taken: {type:'boolean', default:false},
        table2taken: {type:'boolean', default:false},
    },
    init : function() {
        const Context_AF = this;
        
        setTimeout(()=>{
        Context_AF.data.counter += 1;
         console.log(Context_AF.data.counter + " seconds has passed");
            
        }, 1000);

        Context_AF.el.addEventListener("click", function(event){
            Context_AF.SpawnNPC();
        });
    },
    tick : function(time, deltaTime){
        let Context_AF = this;
        let d = new Date();
        let n = d.getSeconds();
        //console.log(n);
        if(n == 30 && !Context_AF.data.hasspawned || 
            n == 0 && !Context_AF.data.hasspawned)
        {
            Context_AF.data.hasspawned = true;
            Context_AF.SpawnNPC();
        }
        if(Context_AF.data.hasspawned && n == 31 ||
            Context_AF.data.hasspawned && n == 1)
            {
                Context_AF.data.hasspawned = false;
            }
    },
    SpawnNPC: function()
    {
        let Context_AF = this;
        let NPC = document.createElement('a-entity');
        let table1 = document.querySelector('#table1');
        let table2 = document.querySelector('#table2');
        let ground = document.querySelector('#scene');
        table1pos = table1.getAttribute('position');
        table2pos = table2.getAttribute('position');
        randposition = Math.floor(Math.random() * 4);
        console.log(randposition)
        
        
        if(randposition <= 1 && Context_AF.data.table1taken == false)
        {
            Context_AF.data.table1taken = true;
            NPC.setAttribute('position', {x:table1pos.x + 1.9, y:1.5, z: table1pos.z});
            NPC.setAttribute('dsk_ticketgenerating', {});
            NPC.setAttribute('obj-model', {obj:'/assets/rocket.obj'});
            NPC.setAttribute('scale', {x:0.01, y:0.01, z:0.01});
            NPC.setAttribute('id', 'npc');
            NPC.setAttribute('dynamic-body', 'shape: box; height: 1; width: 1; mass: 100');
            NPC.setAttribute('constraint', 'target: #scene');
            let scene = document.querySelector('a-scene');
            //childs the NPC to the scene
            scene.appendChild(NPC);
            //Context_AF.GenerateNPC(randposition);
        }
        else if(randposition => 2 && Context_AF.data.table2taken == false)
        {
            Context_AF.data.table2taken = true;
            NPC.setAttribute('position', {x:table2pos.x - 1.9, y:1.5, z: table2pos.z});
            NPC.setAttribute('dsk_ticketgenerating', {});
            NPC.setAttribute('obj-model', {obj:'/assets/rocket.obj'});
            NPC.setAttribute('scale', {x:0.01, y:0.01, z:0.01});
            NPC.setAttribute('id', 'npc');
            NPC.setAttribute('dynamic-body', 'shape: box; height: 1; width: 1; mass: 100');
            NPC.setAttribute('constraint', 'target: #scene');
            let scene = document.querySelector('a-scene');
            //childs the NPC to the scene
            scene.appendChild(NPC);
            //Context_AF.GenerateNPC(randposition);
        }
        else
        {
            console.log("tables full");
        }
        
    },
    GenerateNPC: function(position){
        

        if(position <= 1)
        {
            
        }
        else
        {
            //console.log('time elapsed: ' + elapsed);
            
        }
        
    }
});