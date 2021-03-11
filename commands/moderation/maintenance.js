const { MessageEmbed } = require('discord.js')
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
require("moment-duration-format");


module.exports = {
    name: "maintenance",
    category: "moderation",
    run: async (client, message, args) => {

          
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("```❌| Vous n'avez pas l'autorisation pour utiliser cette commande```");

//code

if (args[0] === 'true') {
//roles
let R1 = message.guild.roles.cache.find(r => r.id === "666399179748278283" ) //ajoute (maintenance)
let R2 = message.guild.roles.cache.find(r => r.id === "650817424953966618" ) //retire (membres)
if(!args[0]) return message.channel.send("```❌| exemple: !maintenance true/false```")

//embed
var E1 = new MessageEmbed()
.setTitle("Maintenance [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774028814061010954/ajax-loader.gif")
  .addField("**Délai de chargement:**", "``` Entre 3 - 5 minutes ```", true)
  .setDescription("\`\`\` Remarque: " + "maintenance en cours" + " \`\`\`")
    .setColor("RED")
    .setFooter("Nat'secure | id: E1000")

var E2 = new MessageEmbed()
.setTitle("Maintenance [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774022693753716786/777081.png")
  .setDescription("```Chargement terminé  !```")
    .setColor("ORANGE")
     .setFooter("Nat'secure | id: E2000")
      

//code execution true
message.channel.send("```✅ | [True] Commande effectuée !```").then(msg => {msg.delete({ timeout: 10000 })})
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(R1))
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(R2))
//envoi embed
message.channel.send(E1).then((msg)=> {setTimeout(function(){msg.edit(E2);}, 240000)}); 

//fin



















}else if (args[0] === 'false') { 
//roles
let R1 = message.guild.roles.cache.find(r => r.id === "666399179748278283" ) //retire (maintenance)
let R2 = message.guild.roles.cache.find(r => r.id === "650817424953966618" ) //ajoute (membres)
if(!R2) return message.channel.send("```❌| exemple: !maintenance true/false```").then(msg => {msg.delete({ timeout: 10000 })})
//embed
var E3 = new MessageEmbed()
.setTitle("Maintenance [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774028814061010954/ajax-loader.gif")
  .addField("**Délai de chargement:**", "``` Entre 3 - 5 minutes ```", true)
  .setDescription("```Chargement en cours...```")
    .setColor("ORANGE")
      .setFooter("Nat'secure | id: E3000")

var E4 = new MessageEmbed()
.setTitle("Maintenance [Beta]")
  .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774023732351598602/Pngtreevector_chat_icon_3762784.png")
  .setDescription("```Chargement terminé!```")
    .setColor("GREEN")
     .setFooter("Nat'secure | id: E4000")

//code execution false
message.channel.send("```✅ | [False] Commande effectuée !```").then(msg => {msg.delete({ timeout: 10000 })})
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(R2))
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(R1))
//envoi embed
message.channel.send(E3).then((msg)=> {setTimeout(function(){msg.edit(E4);}, 240000)});

}
    }
}