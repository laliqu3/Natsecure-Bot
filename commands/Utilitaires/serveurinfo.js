const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serveurinfo",
    category: "Utilitaires",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} état du serveur`)
            .addFields(
                {
                    name: "propriétaire: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Membres: ",
                    value: ` ${message.guild.memberCount} membres!`,
                    inline: true
                },
                {
                    name: "Members en ligne: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} membres en ligne`,
                    inline: true
                },
                {
                    name: "Bots: ",
                    value: `${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Création du serveur: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Nb de tôles: ",
                    value: `${message.guild.roles.cache.size} rôles.`,
                    inline: true,
                },
                {
                    name: `🗺 Région: `,
                    value: region,
                    inline: true
                },
                {
                    name: `serveur vérifié ?: `,
                    value: message.guild.verified ? 'vérifié' : `pas vérifié`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `il y a ${message.guild.premiumSubscriptionCount} Boosters` : `pas de boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `il y a ${message.guild.emojis.cache.size} emojis!` : 'pas' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}