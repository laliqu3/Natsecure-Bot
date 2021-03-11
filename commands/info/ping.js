const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("chargement en cours...");
      const Embed = new MessageEmbed()
        .setTitle("Pong!")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `⌛ Votre latence est de: ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n⏲️ l'API: ${Math.round(client.ws.ping)}`
        )
        .setColor('#fb644c');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};