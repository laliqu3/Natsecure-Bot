const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send("\`\`\`❌ |  Toutes les salons sont bloquées par mesures de sécurité \`\`\`")
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send("\`\`\`✅ |  Toutes les salons ont été rétablies  \`\`\`")
        }
    }
}