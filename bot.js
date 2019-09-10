const Discord = require('discord.js');
const request = require('request');

var url = "https://kamiii.000webhostapp.com/API/anime/listaAnimesEp.php";

//Logando no bot
const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);
//bot.login('Mzc2MTA4MjM2MDk4NzY0ODAw.XXeoFw.QgdubESBBUohWAOt2iOLpvp8Pz8');

//quando ficar pronto
bot.once('ready',() =>{ 
    console.log(`online ${bot.user.tag}`) 
});

//bot monitorando
bot.on('message', msg =>{
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


        /* ### CAMII CRIANDO CARGO */
        if(msg.content.includes("cc")){
            //const del = msg.content.replace("+camii delCargo","").trim();

            msg.channel.send("+camii addCargo boi");

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
        const cargo = servidor.roles.find("name", "toco");

        /* console.log(cargo.id);
        console.log(msg.author.id); */

        // add cargo a usuario
       // membro.addRole(cargo)
           
        
       
     
    }
})





/* bot.on("raw", async dados =>{
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "620994508795936798") return;

    let servidor = bot.guilds.get("239896675664003072");
    let membro = servidor.members.get(dados.d.user_id);

    let cargo1 = servidor.roles.get('616331128340480003'),
        cargo2 = servidor.roles.get('620996326125076480')


    if(dados.t === "MESSAGE_REACTION_ADD"){
       // if(dados.d.emoji.id === "566966275578789888"){
        if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "😋"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }
    }

    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        // if(dados.d.emoji.id === "566966275578789888"){
         if(dados.d.emoji.name === "👌"){
             if(membro.roles.has(cargo1)) return
             membro.removeRole(cargo1)
         }else if(dados.d.emoji.name === "😋"){
             if(membro.roles.has(cargo2)) return
             membro.removeRole(cargo2)
         }
     }
}) */



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
