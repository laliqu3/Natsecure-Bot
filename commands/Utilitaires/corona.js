const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "Utilitaires",
    run: async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send("\`\`\`❌ | Erreur: " + args[0] + " n'existe pas, ou les données ne sont pas collectées \`\`\`")
        }
        ("\`\`\`❌ | Erreur:  \`\`\`")
        const embed = new MessageEmbed()
            .setTitle(args[0] ? `Coronavirus en: ${args[0].toUpperCase()} ` : 'Coronavirus dans le monde')
            .setColor('#RANDOM')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .setFooter("CoronaV2.js | Adapté par Nathanaëlle")
            .setTimestamp()
            .addFields(
                {
                    name: 'Cas (total):',
                    value:  "\`\`\`" + corona.cases.toLocaleString() + "\`\`\`",
                    inline: true
                },
                {
                    name: 'Décès (total):',
                    value:  "\`\`\`" + corona.deaths.toLocaleString() + "\`\`\`",
                    inline: true
                },
                {
                    name: 'Guerissons (total)',
                    value:  "\`\`\`" + corona.recovered.toLocaleString() + "\`\`\`",
                    inline: true
                },
                {
                    name: "Cas (aujourd'hui):",
                    value:  "\`\`\`+ " + corona.active.toLocaleString() + "\`\`\`",
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: "Réanimation (aujourd'hui):",
                    value:  "\`\`\`+ " + corona.critical.toLocaleString() + "\`\`\`",
                    inline: true
                },
                {
                    name: "Guérisons (aujourd'hui):",
                    value:  "\`\`\`+ " + corona.todayRecovered.toLocaleString().replace("-", "") + "\`\`\`",
                    inline: true
                },
                {
                    name: "Décès (aujourd'hui):",
                    value:   "\`\`\`+ " + corona.todayDeaths.toLocaleString() + "\`\`\`",
                    inline: true
                })

        await message.channel.send(embed)
    }
};