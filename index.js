const Discord = require('discord.js');
const request = require('request');

var url = "https://kamiii.000webhostapp.com/API/anime/listaAnimesEp.php";

//Logando no bot
const bot = new Discord.Client();
bot.login('Mzc2MTA4MjM2MDk4NzY0ODAw.XWXHTg.44cT4mu-UB-h3r9bQwEC2Th_jIM');

//quando ficar pronto
bot.once('ready',() =>{ console.log(`online ${bot.user.tag}`) });

//bot monitorando
bot.on('message', msg =>{
    if(msg == "v"){
        msg.reply("Voto Comfirmado");
        /* request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                console.log(body) // Print the json response
                
            }
        }) */
     
    }
})

//delete
bot.on('message', msg =>{
    if(msg == "!d"){
        msg.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
})
