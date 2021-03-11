// this is where you add your stuff for when a user leavesconst { MessageEmbed } = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports = async member => {

    // this is finding the channel goodbye
    const channel = member.guild.channels.cache.find(ch => ch.id === '655192033568358422');
    if (!channel) return;

    const embed = new MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://cdn.discordapp.com/attachments/548696423663927306/667498430519836683/leave_user.png")
    .setAuthor("Départ ","https://cdn.discordapp.com/attachments/548696423663927306/548696848899112991/411826733516324866.png")
    .addField("👩|Pseudo:", "\`\`\`" + member.user.username + "\`\`\`", true)
    .addField("📌| Membre N°: ","\`\`\`" + member.guild.memberCount + "\`\`\`", true)

    // this is sending a message
    channel.send(embed);
    return
};