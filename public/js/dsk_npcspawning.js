AFRAME.registerComponent('dsk_npcspawning', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener("click", function(event){
            
            
            
            Context_AF.SpawnNPC();
        });
    },

    SpawnNPC: function()
    {
        let table1 = document.querySelector('#table1');
        let table2 = document.querySelector('#table2');
        let ground = document.querySelector('#scene');
        table1pos = table1.getAttribute('position');
        table2pos = table2.getAttribute('position');
        randposition = Math.floor(Math.random() * 4);
        console.log(randposition)
        let NPC = document.createElement('a-entity');
        
        if(randposition <= 1)
        {
            NPC.setAttribute('position', {x:table1pos.x + 0.5, y:1.5, z: table1pos.z});
        }
        else if(randposition => 2)
        {
            NPC.setAttribute('position', {x:table2pos.x - 0.5, y:1.5, z: table2pos.z});
        }
        NPC.setAttribute('dsk_ticketgenerating', {});
        NPC.setAttribute('obj-model', {obj:'/assets/rocket.obj'});
        NPC.setAttribute('scale', {x:0.01, y:0.01, z:0.01});
        NPC.setAttribute('id', 'npc');
        NPC.setAttribute('dynamic-body', 'shape: box; height: 1; width: 1; mass: 100');
        NPC.setAttribute('constraint', 'target: #scene');
        let scene = document.querySelector('a-scene');
        //childs the NPC to the scene
        scene.appendChild(NPC);
    },
    
});