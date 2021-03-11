const { MessageEmbed } = require('discord.js')
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
require("moment-duration-format");


module.exports = {
    name: "msg",
    category: "moderation",
    run: async (client, message, args) => {
          
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("```❌| Vous n'avez pas l'autorisation pour utiliser cette commande```");

//code

if (args[0] === 'alert') {
    const sayMessage = args.slice(1).join(" ") || `erreur d'envoi`;
    var E1 = new MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
    .setTitle('Sécurité et Protection via (ID protect)')
    .setDescription("\`\`\`" + sayMessage + "\`\`\`")
    .setFooter("Nat'secure")
    .setTimestamp()
    
message.channel.send(E1)


}else if (args[0] === 'cine') { 

    let s1 = args.splice(1).join(" ").split("|") || "erreur 1 ok";

    let ok1 = s1[2] || "..";
    let ok2 = s1[3] || "..";
   // let ok3 = s1[3] || "..";

    if (!s1)
	{
		return message.author.send(`error: !cine 1 | 2 | 3 `);
    }
    //1️⃣ 2️⃣ 3️⃣
    var E1 = new MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774053263392899102/popcorn-movie-time-512.png")
    .setTitle('Projection cinéma')
    .setDescription("\`\`\`" + s1 + "\`\`\`")
    .addField("Choix 1️⃣ |","\`\`\` ▶️ " + ok1 + "\`\`\`",true)
    .addField("Choix 2️⃣ | ","\`\`\` ▶️ " + ok2 + "\`\`\`",true)
    .addField("**🔴 Salon Live**", "```Clique pour rejoindre la télévision``` [clique ici](https://discord.gg/JBaTutNPE8)",false)
    .setFooter("Nat'secure")
    .setTimestamp()
    
message.channel.send(E1)



}else if (args[0] === 'system') { 

    const reason = args.slice(1).join(" ") || `erreur d'envoi`;
    var E1 = new MessageEmbed()
    .setColor("ORANGE")
    .setThumbnail("https://cdn.discordapp.com/attachments/776551113763717170/778824425880420382/icon.png")
    //https://cdn.discordapp.com/attachments/655265319606157322/774266088418181182/2037690.png
    .setTitle('Accessibilité | Text to Speech (TTS)')
    //événement
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .setFooter("Nat'secure")
    .setTimestamp()

message.channel.send(E1)


}else if (args[0] === 'voc') { 
    const reason = args.slice(1).join(" ") || `erreur d'envoi`;
    var E1 = new MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774278088946483240/microphone.png")
    .setTitle('Discussion vocale')
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .addField("**🔴 Salon Vocale**", "```Clique pour rejoindre le salon``` [clique ici](https://discord.gg/ExDGuNmCWu)",false)
    .setFooter("Nat'secure")
    .setTimestamp()
    
message.channel.send(E1)


}else if (args[0] === 'maintenance') { 
    const reason = args.slice(1).join(" ") || `Ceci est un test, ne prennez pas en compte ce message.`;
    var E1 = new MessageEmbed()
    .setColor("ORANGE")
    .setTitle('Maintenance')
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .setImage("https://cdn.discordapp.com/attachments/659932537610698772/777701547495784448/FANMADE_Apple_Bloom_using_a_hammer.gif")

    .setFooter("Nat'secure")
    .setTimestamp()
    
message.channel.send(E1)



}else { 
    const reason = args.slice(0).join(" ") || `erreur d'envoi`;
    var E1 = new MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774023732351598602/Pngtreevector_chat_icon_3762784.png")
    .setTitle('Message')
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .setFooter("Nat'secure")
    .setTimestamp()
    
    message.channel.send(E1)






}








    }
}