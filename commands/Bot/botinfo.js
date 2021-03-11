const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo",
    category: "Bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('état du bot')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Serveurs',
                    value: `sur  ${client.guilds.cache.size} serveurs.`,
                    inline: true
                },
                {
                    name: '📺 Salons',
                    value: ` ${client.channels.cache.size} salons.`,
                    inline: true
                },
                {
                    name: '👥 Membres',
                    value: ` ${client.users.cache.size} membres.`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'date de création:',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Guild info',
                    value: `coeurs: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: 'Hébergeur',
                    value: `NodSoft`,
                    inline: true
                },
                {
                    name: 'Crédits',
                    value: `Nathanaëlle, Soleil et Sakura: Dev`,
                    inline: true
                },
            )
            

        await message.channel.send(embed)
    }
}