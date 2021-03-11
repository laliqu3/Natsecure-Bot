const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send("\`\`\`❌ | Erreur: il faut être mod pour l'utiliser lol \`\`\`")
        }
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mentionner L'utilisateur'ice  \`\`\`")
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send("\`\`\`✅ | L'utilisateur'ice "+ member +" est banni.e du serveur avec succès  \`\`\`")
        } catch (e) {
            return message.channel.send("\`\`\`❌ | Erreur: L'utilisateur'ice n'est pas dans le serveur mais vous pouvez utiliser l'IPBAN \`\`\`")
        }

    }
}