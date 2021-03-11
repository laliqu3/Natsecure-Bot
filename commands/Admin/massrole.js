const { MessageEmbed } = require('discord.js')
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
const { REPL_MODE_SLOPPY } = require('repl');
require("moment-duration-format");


module.exports = {
    name: "massrole",
    category: "moderation",
    run: async (client, message, args) => {

          
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("```❌| Vous n'avez pas l'autorisation pour utiliser cette commande```");

//code

if (args[0] === 'add') {
//roles
const addrole = args.slice(1).join(" ") 
if (!addrole)return reply("erreur");
let R1 = message.guild.roles.cache.find(r => r.id === addrole ) //ajoute
if(!args[0]) return message.channel.send("```❌| exemple: !maintenance <add/remove> <ID>```")

//embed
var E1 = new MessageEmbed()
.setTitle("Massrole [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774028814061010954/ajax-loader.gif")
  .addField("**Délai de chargement:**", "``` Entre 3  minutes ```", true)
  .setDescription("\`\`\` Remarque: " + "Attribution du rôle (@everyone) en cours" + " \`\`\`")
    .setColor("RED")
    .setFooter("Nat'secure | id: A1000")

var E2 = new MessageEmbed()
.setTitle("Massrole")
  .setThumbnail("https://cdn.discordapp.com/attachments/548696423663927306/667498433103396883/userjoin.png")
  .setDescription("```Chargement terminé  !```")
    .setColor("ORANGE")
     .setFooter("Nat'secure | id: A2000")
      
//748278771584335872
//748275988315635784
//748275835064156221
//748275822607204423

//768632012172034048
//code execution true
message.channel.send("```✅ | [Add] Commande effectuée !```").then(msg => {msg.delete({ timeout: 10000 })})
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(R1))

//envoi embed
message.channel.send(E1).then((msg)=> {setTimeout(function(){msg.edit(E2);}, 120000)}); 

//fin



















}else if (args[0] === 'remove') { 
//roles
const removerole = args.slice(1).join(" ") 
if (!removerole)return reply("erreur");
let R1 = message.guild.roles.cache.find(r => r.id === removerole ) //retire
if(!args[0]) return message.channel.send("```❌| exemple: !maintenance <add/remove> <ID>```")
//embed
var E3 = new MessageEmbed()
.setTitle("Massrole [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774028814061010954/ajax-loader.gif")
  .addField("**Délai de chargement:**", "``` Entre 3  minutes ```", true)
  .setDescription("```Suppr.. du rôle (@everyone) en cours..```")
    .setColor("ORANGE")
      .setFooter("Nat'secure | id: A3000")

var E4 = new MessageEmbed()
.setTitle("Massrole [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/548696423663927306/667498430519836683/leave_user.png")
  .setDescription("```Chargement terminé!```")
    .setColor("GREEN")
     .setFooter("Nat'secure | id: A4000")

//code execution false
message.channel.send("```✅ | [Remove] Commande effectuée !```").then(msg => {msg.delete({ timeout: 10000 })})
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(R1))
//envoi embed
message.channel.send(E3).then((msg)=> {setTimeout(function(){msg.edit(E4);}, 120000)});

}
    }
}