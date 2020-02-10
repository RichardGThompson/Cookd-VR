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
        table1pos = table1.getAttribute('position');
        table2pos = table2.getAttribute('position');
        randposition = Math.floor(Math.random() * 4);
        console.log(randposition)
        let NPC = document.createElement('a-entity');
        console.log("Hi");
        if(randposition <= 1)
        {
            NPC.setAttribute('position', {x:table1pos.x, y:0, z: table1pos.z});
        }
        else if(randposition => 2)
        {
            NPC.setAttribute('position', {x:table2pos.x, y:0, z: table2pos.z});
        }
        
        NPC.setAttribute('obj-model', {obj:'/assets/rocket.obj'});
        NPC.setAttribute('scale', {x:0.06, y:0.06, z:0.06})
        NPC.setAttribute('id', 'npc');

        let scene = document.querySelector('a-scene');
        //childs the NPC to the scene
        scene.appendChild(NPC);
    },
    
});