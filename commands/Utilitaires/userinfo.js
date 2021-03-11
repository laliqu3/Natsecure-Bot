const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "userinfo",
    category: "Utilitaires",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 En ligne";
                break;
            case "dnd":
                status = "🔕 Ne pas dérranger";
                break;
            case "idle":
                status = "🌙 Abscent.e";
                break;
            case "offline":
                status = "⚫️ Hors-ligne";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Pseudo: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Tags: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Jeux en cours: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `Je joue pas!`,
                    inline: true
                },
                {
                    name: 'Avatar: ',
                    value: `[Clique pour voir](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Création du compte: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Date d'adhésion: ",
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}