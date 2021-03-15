const { MessageEmbed } = require('discord.js')
const fs = require('fs');

module.exports = {
    name: "valid",
    category: "moderation",
    run: async (client, message, args) => {

        var Text = fs.readFileSync("Storage/Text1.txt", "utf8");

        const moment = require("moment");
require("moment-duration-format");





        var Err1 = new MessageEmbed()
        .setColor("RED")
        .setTitle('Erreur')
        .setDescription("Exemple: !valid1 <@mention>")
        .setFooter("Nat'secure")
        .setTimestamp()



        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send("\`\`\`❌ | Erreur: il faut être mod pour l'utiliser lol \`\`\`").then(msg => {msg.delete({ timeout: 10000 })})
        }
        if (!args[0]) {
            return message.channel.send(Err1).then(msg => {msg.delete({ timeout: 10000 })})
        }//Err1
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        var creaatedAT = (moment(member.user.createdAt, "dd").fromNow(), moment.utc(member.user.createdAt).format( 'Do MMMM  YYYY'));
  const E = creaatedAT

        if (member.roles.cache.find(r => r.id === "650812483401154580")) {
        

    //embed rapport > admin
    var embed = new MessageEmbed()
    .setTitle("Demande d'adhésion accepté.e (compte rendu)")
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/669390815591661598/2339863-valid-policy-certificate-management-icon-with-png-and-vector-valid-png-512_512_preview.png")
    .addField("👩| Pseudo","\`\`\`" + member.user.username + "\`\`\`",false)
    .addField("👮 | Validé.e par:", "\`\`\`" + message.author.username + "\`\`\`",false)
    .addField("**📆 | Création du compte :**", "```" + E + "```", false) 
    .setTimestamp()
    .setFooter("Nat'Secure")
    //embed > utilisateur
    var embed2 = new MessageEmbed()
    .setColor("GREEN")
        .setTitle("Demande d'adhésion accepté.e")
        .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/669390815591661598/2339863-valid-policy-certificate-management-icon-with-png-and-vector-valid-png-512_512_preview.png")
       .setDescription("\`\`\` Votre demande d'adhésion vient d'être validé.e par la modération // Je vous invite à ajouter vos rôles pour qu'on vous identifie correctement (obligatoire), vous pouvez changer la couleur de votre pseudo, de vous présenter ou de paramètrer les notifications (falcutatives) \`\`\`")
       .addField("**🌸 Ajouter vos rôles **", "```🔴Obligatoire``` [🔧-role-menu](https://discord.com/channels/650808518538035235/776477728806273074/776482293044740106)",false)
       .addField("**🎨 Changer la couleur de votre pseudo**", "```🟢Facultative``` [🔧-couleurs](https://discord.com/channels/650808518538035235/776490248472494080/776501701439914025)",false)
       .addField("**🎤 Présentez vous**", "```🟢Facultative``` [📝-présentations](https://discord.com/channels/650808518538035235/656348291037921280)",false)
       .addField("**🔔 Notifications interne**", "```🟢Facultative``` [🔧-notifications](https://discord.com/channels/650808518538035235/778650504251047967/796576084778942485)",false)
       .setTimestamp()
       .setFooter("Nat'Secure")

       var embed55 = new MessageEmbed()
       .setColor("PURPLE")
           .setTitle("Conseils pour s'intégrer sur ce serveur")
           .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/819751883777376276/pngaaa.com-1223189.png")
          .setDescription("\`\`\`" + Text + "\`\`\`")
          .setFooter("Nat'Secure")



       var ewelcome = new MessageEmbed()
    .setTitle("Nouveau membre !")
    .setColor("GREEN")
    .setDescription("\`\`\` Je vous souhaite la bienvenue  " + member.user.username + "  !\`\`\`")
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("souhaitez lui la bienvenue :)")

    

    const channel = member.guild.channels.cache.find(ch => ch.id === '655192018028331010');
    const channel2 = member.guild.channels.cache.find(ch => ch.id === '777316753738956801');


    let role = member.guild.roles.cache.find(r => r.id === "650817424953966618");//membres
   
    let role3 = member.guild.roles.cache.find(r => r.id === "650812483401154580");// visiteur
    let role4 = member.guild.roles.cache.find(r => r.id === "819545008989536277");// controle
    
  message.channel.send("```✅ | Commande effectué.e! ```").then(msg => {msg.delete({ timeout: 10000 })});
  member.roles.add(role);
  
  member.roles.remove(role3);
  member.roles.remove(role4);
//membres 650817424953966618
//controle 819545008989536277
//adulte 777298779522334740
//salon générale
  channel2.send(ewelcome);
  //"\`\`\`✅ Nat'secure | L'utilisateur'ice: [ " + member.user.username + " ] est entré dans le serveur souhaitez lui la bienvenue :) \`\`\`", 
  channel.send(embed);
  member.send(embed2)
  member.send(embed55)

 
  
}else {
    var Error2 = new MessageEmbed()
    .setColor("RED")
    .setTitle('Erreur')
    .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/777674204278554704/system-error-1550732-1316130.png")
    .setDescription("\`\`\`❌| L'utilisateur'ice: " + member.user.username + " est déjà membre du serveur\`\`\`")
    .setTimestamp()
    .setFooter("Nat'Secure")

message.channel.send(Error2).then(msg => {msg.delete({ timeout: 10000 })});

    // not allowed access
 }


    }


}