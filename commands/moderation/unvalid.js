const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "unvalid",
    category: "moderation",
    run: async (client, message, args) => {




        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send("\`\`\`❌ | Erreur: il faut être mod pour l'utiliser lol \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice  \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       
        if (!member) return message.reply("```❌| !unvalid <mention> <Raison.s avec détails> ou <réponse auto> ```"); const reason = args.slice(1).join(" ") || ` Suite à votre demande d'adhésion, nous avons des doutes sur votre formulaire .  Nous vous demandons de prendre contact avec la modération ou de vous rendre dans le salon dédiée dans les délai d'une heure, passé ce délai, vous serez exclu.e du serveur. `;
        if (member.roles.cache.find(r => r.id === "650812483401154580")) {
        

    var embed = new MessageEmbed()
    .setTitle("doutes sur le formulaire (compte rendu)")
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
    .addField("👩| Pseudo","\`\`\`" + member.user.username + "\`\`\`",false)
    .addField("👮 | Refusé.e par:", "\`\`\`" + message.author.username + "\`\`\`",false)
    .setDescription("\`\`\`" + reason + "\`\`\`")
    .setTimestamp()
    .setFooter("Nat'Secure")


    var embed2 = new MessageEmbed()
    .setColor("RED")
        .setTitle("Nous avons un problème avec votre demande d'adhésion")
        .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774052492484804618/5a81af7d9123fa7bcc9b0793.png")
        .addField("👮 | mod:", "\`\`\`" + message.author.username + "\`\`\`",false)
       .setDescription("\`\`\` Remarque:     " + reason + "\`\`\`")
       .addField("**🔎Veuillez vous rendre sur ce salon**", "```🔒obligatoire``` [clique ici](https://discord.gg/ztWEvcNnSC)",false)
       .setTimestamp()
       .setFooter("Nat'Secure")



    const channel = member.guild.channels.cache.find(ch => ch.id === '655192018028331010');
    let role = member.guild.roles.cache.find(r => r.id === "819545008989536277");

  
  channel.send(embed);
  member.send(embed2)
  member.roles.add(role);

 
  
}else {

message.reply("```❌| erreur : L'utilisateur'ice que vous souhaitez refuser n'est pas visiteur```").then(msg => {msg.delete({ timeout: 10000 })})

    // not allowed access
 }


    }


}