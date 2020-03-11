AFRAME.registerComponent('dsk_npcspawning', {
    schema: {
        counter: {type:'number', default:0},
        hasspawned: {type:'boolean', default: false},
        tabletaken: {type:'array', default:[
           
        ]},
        
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
        
        let ground = document.querySelector('#scene');
        randposition = Math.floor(Math.random() * 8);
        let id = randposition + 1;
        let table = document.querySelector('#table' + id);
        if(Context_AF.data.tabletaken[id])
        {
            console.log("butts")
        }
        else
        {
            Context_AF.data.tabletaken[id] = id;
            tablepos = table.getAttribute('position');
            console.log("Spawning at table 1");
            let NPC = document.createElement('a-entity');
            NPC.setAttribute('position', {x:tablepos.x + 1.9, y:1.5, z: tablepos.z});
            NPC.setAttribute('dsk_ticketgenerating', {});
            NPC.setAttribute('obj-model', {obj:'/assets/rocket.obj'});
            NPC.setAttribute('scale', {x:0.01, y:0.01, z:0.01});
            NPC.setAttribute('id', 'npc');
            NPC.setAttribute('dynamic-body', 'shape: box; height: 1; width: 1; mass: 100');
            NPC.setAttribute('constraint', 'target: #scene');
            let scene = document.querySelector('a-scene');
            scene.appendChild(NPC);
        }    
    },
});