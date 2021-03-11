const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "purge",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.channel.send(
                ("\`\`\`❌ | Erreur: Vous n'avez pas l'autorisation pour cette commande \`\`\`") // returns this message to user with no perms
            );
        if (!args[0]) {
            return message.channel.send("\`\`\`❌ | Erreur:  Entre 1 - 100 \`\`\`")
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Paquets de messages supprimées ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
    }
}