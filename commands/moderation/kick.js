const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    run: async (client, message, args) => {

        const moment = require("moment");
require("moment-duration-format");


        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send ("\`\`\`❌ | Erreur: Tu es modo ? Non? Alors pourquoi tu utilise cette commande ? \`\`\`")
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice en question  \`\`\`")
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const raison = args.slice(1).join(" ") || `Suite a votre mauvais comportement sur le serveur, vous êtes exclu.e du serveur. Vous avez le droit de contester selon vos niveau de votre sanction.`;
        
        const channel = member.guild.channels.cache.find(ch => ch.id === '771731597275824178');
    
        var creaatedAT = (moment(member.user.createdAt, "dd").fromNow(), moment.utc(member.user.createdAt).format( 'Do MMMM  YYYY'));
        const E = creaatedAT

                   //embed rapport > admin
    var embed = new MessageEmbed()
    .setTitle("Kick (compte rendu)")
    .setColor("ORANGE")
    .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/821011419256324158/3248817221557740369-512.png")
    .addField("👩| Pseudo: ","\`\`\`" + member.user.username + "\`\`\`",false)
    .addField("👮 | Exclu.e par: ", "\`\`\`" + message.author.username + "\`\`\`",false)
    .addField("📋 | Raison: ", "\`\`\`" + raison + "\`\`\`",false)
    
    .setTimestamp()
    .setFooter("Nat'Secure")
    //embed > utilisateur
    var embed2 = new MessageEmbed()
    .setColor("ORANGE")
        .setTitle("Vous êtes exclu.e du serveur")
        .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/821011419256324158/3248817221557740369-512.png")
       .addField("👮 | Exclu.e par: ", "\`\`\`" + message.author.username + "\`\`\`",false)
       .addField("📋 | Raison: ", "\`\`\`" + raison + "\`\`\`",false)
       
       .addField("**Si vous êtes éligible**", "```Contester en ligne``` [clique ici](https://forms.gle/R3NgcW1Ku6gkfZkeA)",false)
       .setTimestamp()
       .setFooter("Nat'Secure")






       channel.send(embed);
       member.send(embed2)
        await member.kick();
            await message.channel.send("\`\`\`✅ | L'utilisateur'ice "+ member + " à été exclu.e du serveur  \`\`\`")
        } 
        
        

    }


    
