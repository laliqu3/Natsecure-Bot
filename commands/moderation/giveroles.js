const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'giverole',
    category: 'moderation',
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("\`\`\`❌ | Erreur: Vous n'avez pas l'autorisation pour l'éxécuter \`\`\`").then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("\`\`\`❌ | Erreur: incorrect  \`\`\`").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send("\`\`\`✅ | oops: L'utilisateur'ice à déjà le rôle  \`\`\`").then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Rôle: ${roleName.name}`)
                 .setDescription(`${message.author}Vous avez donné un rôle: ${roleName} à ${member.user}`)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send("\`\`\`❌ | Essaye de me donner un rôle qui existe déjà et on reparlera  \`\`\`").then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}
