const Discord = require('discord.js');
const request = require('request');

var url = "https://kamiii.000webhostapp.com/API/anime/listaAnimesEp.php";

//Logando no bot
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
//bot.login('Mzc2MTA4MjM2MDk4NzY0ODAw.XXlIjw.8J8KCUbFhoJrWskl5hHunCSYg_4');



//quando ficar pronto
bot.once('ready',() =>{ 
    console.log(`online ${bot.user.tag}`) 
});

//bot monitorando
bot.on('message', async msg =>{
    //console.log(msg)
    if(msg.content.includes("+camii")){

        /* ### NEW CARGO */
        if(msg.content.includes("addCargo")){
            const novo = msg.content.replace("+camii addCargo","").trim();
            if(novo != ""){
                let servidor = bot.guilds.get("239896675664003072");
                servidor.createRole({
                    name: novo,
                    color: 'BLUE',
                    mentionable: true
                })
                .then(role =>{
                        console.log(`Created new role with name ${role.name} and color ${role.color}`);
                        msg.channel.send("cargo Adcionado!");
                        msg.delete()
                        //msg.reply("cargo Adcionado!");
                 }
                )
                .catch(console.error)   
            }
            return;
        }


        /* ### DELETE CARGO */
        if(msg.content.includes("delCargo")){
            const del = msg.content.replace("+camii delCargo","").trim();
            if(del != ""){
                let servidor = bot.guilds.get("239896675664003072");
                //console.log(del)
                const cargo = servidor.roles.find("name", del);
                if(cargo !== null){
                    cargo.delete();
                    msg.channel.send("cargo Deletado");
                    msg.delete()
                }
            }
            return;
        }


        /* ### CAMII CRIANDO CARGO e Mensagem de Add Cargo */
        if(msg.content.includes("adm")){
            const cargo = msg.content.replace("+camii adm","").trim();
            if(cargo != ""){

                const txt = await bot.channels.find('name', 'notificação').fetchMessage("621437109034811392");
                
                txt.edit(cargo);
                txt.react("🔔");

                //msg.channel.send("+camii addCargo "+cargo);
                
            }
            return;

           

            //const del = msg.content.replace("+camii delCargo","").trim();

            //msg.channel.send("+camii addCargo boi");
            /* console.log(msg.id);
            const fi = await bot.channels.find('name', 'notificação').fetchMessage(msg.id);
            console.log(fi);
            fi.edit('otario'); */

            // 621437109034811392



            /* if(del != ""){
                let servidor = bot.guilds.get("239896675664003072");
                //console.log(del)
                const cargo = servidor.roles.find("name", del);
                if(cargo !== null){
                    cargo.delete();
                    msg.channel.send("cargo Deletado");
                }
            } */
            return;
        }


        /* #### ADD CARGO AO USUARIO */

       /*  const channel = bot.channels.find('name', 'notificação')
        
        channel.send('+camii cc').then((msg)=> {
            console.log(msg.id+" "+msg.content)
            
            /* setTimeout(function(){
                const fi = bot.channels.find('name', 'notificação').fetchMessage(msg.id);
                console.log(fi);
              //msg.edit('my others emotes');
            }, 1000)  
          }); */

        // id do canal pra postar 621431587015491605
        // add cargo a usuario
       // membro.addRole(cargo)
              
       
        //pega o usuario
        

        //criar cargo
        /* servidor.createRole({
            name: 'tai',
            color: 'BLUE',
            mentionable: true
        })
        .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
        .catch(console.error)  */


        //pega o cargo
       // const cargo = servidor.roles.find("name", "toco");

        /* console.log(cargo.id);
        console.log(msg.author.id); */

        // add cargo a usuario
       // membro.addRole(cargo)
           
        
       
        return;
    }
})





 bot.on("raw", async dados =>{
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    /* pegar o id antes disso de alguma maneira ou comparar no banco de dados o id */
    if(dados.d.message_id != "621437109034811392") return;
    
    

    let servidor = bot.guilds.get("239896675664003072");
    let membro = servidor.members.get(dados.d.user_id);

    let cargo = servidor.roles.find("name", "bola"),
        cargo2 = ""
    
    //const cargo = servidor.roles.find("name", "toco");
    //let cargo1 = servidor.roles.get('616331128340480003')

   

    
    if(dados.t === "MESSAGE_REACTION_ADD"){
       // if(dados.d.emoji.id === "566966275578789888"){
        if(dados.d.emoji.name === "🔔"){
            if(membro.roles.has(cargo)) return
            membro.addRole(cargo)
        }
    }
 
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        // if(dados.d.emoji.id === "566966275578789888"){
         if(dados.d.emoji.name === "🔔"){
             if(membro.roles.has(cargo)) return
             membro.removeRole(cargo)
         }
     } 
}) 



//bot monitorando
/* bot.on('message', msg =>{
    if(msg == "v"){
        msg.reply("Voto Comfirmado");
         request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                
            }
        }) 
     
    }
}) */

//delete
/* bot.on('message', msg =>{
    if(msg == "!d"){
        msg.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
}) */
