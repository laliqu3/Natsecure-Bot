const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "delete",
    category: "moderation",
    run: async (client, message, args) => {




        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send("\`\`\`❌ | Erreur: il faut être mod pour l'utiliser lol \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice  \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const reason = args.slice(1).join(" ") || ` Votre demande d'adhésion à été refusé la modération et vous êtes exclu.e du serveur. Bonne journée/soirée.`;
        if (!member) return message.reply("```❌| !delete <mention> <Raison.s avec détails> ou <réponse auto> ```").then(msg => {msg.delete({ timeout: 10000 })});
      
        

    var embed = new MessageEmbed()
    .setTitle("Demande d'adhésion refusé.e + exclusion (compte-rendu)")
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
    .addField("👩| Pseudo","\`\`\`" + member.user.username + "\`\`\`",false)
    .setImage("https://cdn.discordapp.com/attachments/655265319606157322/777698213113233415/original.gif")
    .addField("👮 | Refusé.e par:", "\`\`\`" + message.author.username + "\`\`\`",false)
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .setTimestamp()
    .setFooter("Nat'Secure")


    var embed2 = new MessageEmbed()
    .setColor("RED")
        .setTitle("Vous êtes exclu.e du serveur")
        .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
        .setImage("https://cdn.discordapp.com/attachments/655265319606157322/777698213113233415/original.gif")
       .setDescription("\`\`\` Raisson:     " + reason + "\`\`\`")
       .setTimestamp()
       .setFooter("Code de contestation: [TC-47824K]")



    const channel = member.guild.channels.cache.find(ch => ch.id === '655192018028331010');
    let role = member.guild.roles.cache.find(r => r.id === "650812483401154580");

  

  try {

    channel.send(embed);
    member.send(embed2)
    member.roles.remove(role);


    await member.kick();


    await message.channel.send("\`\`\`✅ | L'utilisateur'ice "+ member + " à été exclu.e du serveur  \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
} catch (e) {
    return message.channel.send("\`\`\`❌ | Erreur: L'utilisateur'ice "+ member +" n'est pas dans le serveur  \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
}
 
  


    }


}