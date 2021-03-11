const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",
    run: async (client, message, args) => {

        const member = args[0];

        if (!member) {
             return message.channel.send("\`\`\`❌ | Erreur: Veuillez mettre l'identifiant de la personne  \`\`\`")
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send("\`\`\`✅ | Nat'secure: L'utilisateur'ice: " + member + " est deban du serveur avec succès \`\`\`");
        } catch (e) {
            return message.channel.send("\`\`\`❌ | Erreur: ? Erreur / Error ? \`\`\`")
        }

    }
}