const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {


        const moment = require("moment");
require("moment-duration-format");


        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send("\`\`\`❌ | Erreur: il faut être mod pour l'utiliser lol \`\`\`")
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice  \`\`\`")
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const raison = args.slice(1).join(" ") || `Suite a votre mauvais comportement sur le serveur, vous êtes banni.e du serveur. Vous avez le droit de contester selon vos niveau de votre sanction.`;

        
            var creaatedAT = (moment(member.user.createdAt, "dd").fromNow(), moment.utc(member.user.createdAt).format( 'Do MMMM  YYYY'));
  const E = creaatedAT

            //embed rapport > admin
    var embed = new MessageEmbed()
    .setTitle("Ban (compte rendu)")
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/821011967790809098/BanHammer-Icon-Full.png")
    .addField("👩| Pseudo: ","\`\`\`" + member.user.username + "\`\`\`",false)
    .addField("👮 | Ban par: ", "\`\`\`" + message.author.username + "\`\`\`",false)
    .addField("📋 | Raison: ", "\`\`\`" + raison + "\`\`\`",false)
    
    .setTimestamp()
    .setFooter("Nat'Secure")
    //embed > utilisateur
    var embed2 = new MessageEmbed()
    .setColor("GREEN")
        .setTitle("Vous êtes banni.e du serveur")
        .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/821011967790809098/BanHammer-Icon-Full.png")

       
       .addField("👮 | Ban par: ", "\`\`\`" + message.author.username + "\`\`\`",false)
       .addField("📋 | Raison: ", "\`\`\`" + raison + "\`\`\`",false)
       
       .addField("**Si vous êtes éligible**", "```Contester en ligne``` [clique ici](https://forms.gle/R3NgcW1Ku6gkfZkeA)",false)
       .setTimestamp()
       .setFooter("Nat'Secure")





       const channel = member.guild.channels.cache.find(ch => ch.id === '771731597275824178');
       channel.send(embed);
       member.send(embed2)
    await member.ban();
            await message.channel.send("\`\`\`✅ | L'utilisateur'ice "+ member +" est banni.e du serveur avec succès  \`\`\`")
        } 

    }
