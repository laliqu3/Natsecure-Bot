const fs = require('fs');
const { MessageEmbed, DiscordAPIError, MessageCollector } = require('discord.js');

//const { BAN_EMOJI_ID } = process.env;

module.exports = {
  name: 'ipban',
  category: "moderation",

  run: async (client, message, args, member) => {
    if (!message.guild.available) return client.logger.info(```❌| Erreur de la Gulide```);
    
    const userID = args[0];
    const reason = args.slice(1).join(" ") || ` sans raison `;
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("```❌| Vous n'avez pas l'autorisation pour utiliser cette commande```");

    if (!userID || !reason) return message.reply("```❌| !ipban <ID> <Raison.s> ```");
    if (userID === message.author.id) return message.channel.send("```❌| Pourquoi je vais te bannir ?```");

   // ---
   
    let ipBannedMembers = fs.existsSync('./ipBannedMembers.json') ? JSON.parse(fs.readFileSync('./ipBannedMembers.json', 'utf-8')) : {};

    if(userID in ipBannedMembers) return message.reply("```❌| L'utilisateur'ice en question est déjà dans la liste des IP-Bans```");

    ipBannedMembers[userID] = reason;

    fs.writeFileSync('./ipBannedMembers.json', JSON.stringify(ipBannedMembers));
    
    if (message.guild.member(userID)){
      message.guild.member(userID).ban({ days: 0, reason: reason })
     
        //.then((member) => {
         // const channel = member.guild.channels.cache.find(ch => ch.name === '🔑-admin');
         // if (!channel) return;
         // channel.send("\`\`\`✅ | L'utilisateur'ice / ID: [ " + memnber + " ] est ip-banni.e du serveur ainsi dans les autres serveurs avec succès !  \`\`\`");
       // })
       // .catch(console.error)
    }

    const embed = new MessageEmbed()
      .setTitle("⚠️ IPBAN ⚠️")
      .setColor('RANDOM')
      
      .addField('❌ | identifiant :', "\`\`\`" + userID + "\`\`\`")
      .addField('👮 | Mod/Admin:', "\`\`\`" + message.author.tag + "\`\`\`")
      .addField('🙎 | Raison:', "\`\`\`" + reason + "\`\`\`")
      .setFooter("Nat'Secure, Dev par Soleil, Nathanaëlle et Sakura")
      .setTimestamp();

      const channel = message.guild.channels.cache.find(ch => ch.id === '771732036092035092');
    channel.send({ embed });

  
     //const channel = client.channels.cache.find(channel => channel.name === '🔑-admin')
message.channel.send("\`\`\`✅ | L'utilisateur'ice / ID: [ " + userID + " ] est ip-banni.e du serveur ainsi dans les autres serveurs avec succès !  \`\`\`");


    message.delete().catch(O_o=>{});
  }
}