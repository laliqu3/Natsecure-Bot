const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bans",
    category: "Utilitaires",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send("\`\`\`❌ il y a : " + bans.size + " dans ce serveur \`\`\`")
        })

    }
}