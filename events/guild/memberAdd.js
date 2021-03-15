const fs = require('fs');
const { MessageEmbed } = require('discord.js');

const moment = require("moment");
var date = moment().format( '  Do MMMM  YYYY');
var semaine = moment().format( ' Do MMMM');
var dateheure = moment().format( '  Do MMMM  YYYY  hh HH:mm');
var dateheuresec = moment().format( '  Do MMMM  YYYY  hh HH:mm ss');
require("moment-duration-format");
moment.locale('fr');



module.exports = async (member) => {



  const channel = member.guild.channels.cache.find(ch => ch.name === '655192033568358422');
 
  if (!channel) return;

  var creaatedAT = (moment(member.user.createdAt, "dd").fromNow(), moment.utc(member.user.createdAt).format( 'Do MMMM  YYYY'));
  const E = creaatedAT
    
  
  var vembed = new MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Arrivée ","https://cdn.discordapp.com/attachments/548696423663927306/548696861670899733/411826733785022464.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/548696423663927306/667498433103396883/userjoin.png")
  .addField("**👩 | Pseudo: **", "\`\`\`" + member.user.username + "\`\`\`", true)
  .addField("**🔎 | Identifiant : **", "\`\`\`" + member + "\`\`\`", true)
  .addField("**📌 | Membre N°: **","\`\`\`" + member.guild.memberCount + "\`\`\`", true)
  .addField("**❓ | Remarque : **","\`\`\`✅ | L'utilisateur'ice: " + member.user.username + " est en règle.\`\`\`", false)
  .addField("**📆 | Création du compte :**", "```" + E + "```", false) 
    


    var userbed = new MessageEmbed()
    
        .setTitle("Nat'secure")
        .setThumbnail("https://cdn.discordapp.com/attachments/659932537610698772/668977895326089312/1484601.png")
       .setDescription("\`\`\` Bonjour, suivez les étaptes ci-dessous pour accdéder au serveur. Vous avez un délai de 24h pour compléter votre demande, passé ce délai, vous serez exclu.e du serveur. \`\`\`")

       
          .addField("**1️⃣ |étapte 1:**", "```remplissez le formulaire d'adhésion``` [clique ici (pour valider votre compte)](https://forms.gle/GefbaWVBQt8xKmiE8)",true)
   .addField("**2️⃣ |patientez:**", "```écoutez de la musique en attendant :3``` [clique ici pour patienter ^^](https://www.youtube.com/watch?v=LHyXwRoeGTg&list=LL&index=3)",true)
   .addField("**🔎 |Des problèmes ?**", "```je vous invite à nous signaler``` [clique ici](https://forms.gle/VvQ39FBqAiHJRyXQ9)",true)
    .setFooter("Powered by Google Forms");


  // this is sendint the message
  member.send(userbed)
  channel.send(vembed);
  //channel2.send(cembed);
 // channel3.send(aembed);


  let role1 = member.guild.roles.cache .find(r => r.id === "650812483401154580");

  member.roles.add(role1);







};