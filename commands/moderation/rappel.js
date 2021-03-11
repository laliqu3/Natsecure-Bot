const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "rappel",
    category: "moderation",
    run: async (client, message, args) => {




        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send("\`\`\`❌ | Erreur: il faut être mod pour l'utiliser lol \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice  \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       
        if (!member) return message.reply("```❌| !rappel <mention> <Raison.s avec détails> ou <réponse auto> ```"); const reason = args.slice(1).join(" ") || `Nous constatons que vous êtes toujours visiteur, nous vous demandons de bien remplir votre demande d'adhésion dans les 8 heures qui suivent, si nous avons toujours pas de réponses de votre part, vous serez exclu.e du serveur. `;
        if (member.roles.cache.find(r => r.id === "650812483401154580")) {
        

    var embed = new MessageEmbed()
    .setTitle("Rappel (compte rendu)")
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
    .addField("👩| Pseudo","\`\`\`" + member.user.username + "\`\`\`",false)
    .addField("👮 | rappelé.e par:", "\`\`\`" + message.author.username + "\`\`\`",false)
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .setTimestamp()
    .setFooter("Nat'Secure")


    var embed2 = new MessageEmbed()
    .setColor("RED")
        .setTitle("Dernier rappel avant exclusion du serveur")
        .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
        .addField("👮 | mod:", "\`\`\`" + message.author.username + "\`\`\`",false)
       .setDescription("\`\`\` Remarque:     " + reason + "\`\`\`")
       .addField("**1️⃣ faire la demande**", "```obligatoire``` [clique ici](https://forms.gle/GefbaWVBQt8xKmiE8)",false)
       .setTimestamp()
       .setFooter("Nat'Secure")



    const channel = member.guild.channels.cache.find(ch => ch.id === '655192018028331010');
    

  
  channel.send(embed);
  member.send(embed2)

 
  
}else {

message.reply("```❌| erreur : L'utilisateur'ice que vous souhaitez rappeler n'est pas visiteur```").then(msg => {msg.delete({ timeout: 10000 })})

    // not allowed access
 }


    }


}