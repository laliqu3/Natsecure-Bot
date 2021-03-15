const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "check",
    category: "Moderation",
    run: async (client, message, args) => {


        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send ("\`\`\`❌ | Erreur: Tu es modo ? Non? Alors pourquoi tu utilise cette commande ? \`\`\`")
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice en question  \`\`\`")
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const channel = member.guild.channels.cache.find(ch => ch.id === '655192033568358422');
        
        

        

            

                   //embed rapport > admin
    var embed = new MessageEmbed()
    .setTitle("Membre+ (compte rendu)")
    .setColor("ORANGE")
    .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/821029939096191037/12-months-blue-check-mark-icon-11563057671iqij6eiii7.png")
    .addField("👩| Pseudo: ","\`\`\`" + member.user.username + "\`\`\`",false)
    .addField("👮 | validé.e par: ", "\`\`\`" + message.author.username + "\`\`\`",false)
   
    .setTimestamp()
    .setFooter("Nat'Secure")
    //embed > utilisateur
    var embed2 = new MessageEmbed()
    .setColor("ORANGE")
        .setTitle("Vous êtes désormais Membre+")
        .setImage("https://cdn.discordapp.com/attachments/659932537610698772/821028053366079528/partie_membre.png")
       .setTimestamp()
       .setFooter("Nat'Secure")






       let role = member.guild.roles.cache.find(r => r.id === "771731597275824178");//membres
       channel.send(embed);
       member.send(embed2)
       member.roles.add(role);
            
            await message.channel.send("\`\`\`✅ | L'utilisateur'ice "+ member + " est désormais Membre+  \`\`\`")
        }

    }


    

       

