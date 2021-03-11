const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send ("\`\`\`❌ | Erreur: Tu es modo ? Non? Alors pourquoi tu utilise cette commande ? \`\`\`")
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice en question  \`\`\`")
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.kick();
            await message.channel.send("\`\`\`✅ | L'utilisateur'ice "+ member + " à été exclu.e du serveur  \`\`\`")
        } catch (e) {
            return message.channel.send("\`\`\`❌ | Erreur: L'utilisateur'ice n'est pas dans le serveur  \`\`\`")
        }

    }


    
}