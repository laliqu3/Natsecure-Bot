const axios = require('axios')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "instagram",
    category: "extra",
    run: async (client, message, args) => {
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur: Veuillez mettre le pseudonyme d'instagram !  \`\`\`")
        }
        let url, response, account, details;
        try {
            url = `https://instagram.com/${args[0]}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            return message.channel.send("\`\`\`❌ | Erreur: Ce n'est pas un compte instagram !  \`\`\`")
        }

        const embed = new MessageEmbed()
            .setTitle(`${details.is_verified ? `${details.username} ✅` : ` ${details.username}`} ${details.is_private ? '(compte privé.e)' : ''} `)
            .setDescription(details.biography)
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "👩 | Nb totale de posts",
                    value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "⬆️ | Abonné.es:",
                    value: details.edge_followed_by.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "⬇️ | Abonnements:",
                    value: details.edge_follow.count.toLocaleString(),
                    inline: true
                }
            )
        await message.channel.send(embed)

    }
}