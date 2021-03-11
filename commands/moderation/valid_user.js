const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "valid", //valid1
    category: "moderation",
    run: async (client, message, args) => {


        var Err1 = new MessageEmbed()
        .setColor("RED")
        .setTitle('Erreur')
        .setDescription("Exemple: !valid1 <@mention> [Junior/Adult]")
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
       .setDescription("\`\`\` Votre demande d'adhésion vient d'être validé.e par la modération \`\`\`")
       .setTimestamp()
       .setFooter("Nat'Secure")

    

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
  channel2.send("\`\`\`✅ Nat'secure | L'utilisateur'ice: [ " + member.user.username + " ] est entré dans le serveur souhaitez lui la bienvenue :) \`\`\`", );
  channel.send(embed);
  member.send(embed2)

 
  
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