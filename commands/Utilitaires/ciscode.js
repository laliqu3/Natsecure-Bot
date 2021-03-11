const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ciscode",
    category: "Utilitaires",
    run: async (client, message, args) => {
        let reason = args.slice().join(" ");
        if (!reason) return message.reply("```❌| !ciscode < pseudo de l'invité. exemple chino#1234 >```");
        const Responses1 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses2 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses3 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses4 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses5 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses6 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses7 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const Responses8 = [
            "1","2","3","4","5","6","7","8","9","0"
        ];
        const A = [
            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        ];
        
        const Response1 = Math.floor(Math.random() * Responses1.length);
        const Response2 = Math.floor(Math.random() * Responses2.length);
        const Response3 = Math.floor(Math.random() * Responses3.length);
        const Response4 = Math.floor(Math.random() * Responses4.length);
        const Response5 = Math.floor(Math.random() * Responses5.length);
        const Response6 = Math.floor(Math.random() * Responses6.length);
        const Response7 = Math.floor(Math.random() * Responses7.length);
        const Response8 = Math.floor(Math.random() * Responses8.length);
        const Response9 = Math.floor(Math.random() * A.length);




        var embed = new MessageEmbed()
        .setTitle("Nat'secure: voici votre Ciscode")
        .setColor("GREEN")
        .setThumbnail("https://cdn.discordapp.com/attachments/655265319606157322/774308667528970260/Security-Approved.png")
        .setDescription("``` Voici votre code à transmettre à L'utilisateur'ice que vous vouhaitez l'inviter dans ce serveur pour le formulaire.  ATTENTION invitez que si vous êtes sur.e que la personne que vous souhaitez est safe ```")
        .addField("👩| Pseudo que vous souhaiter l'inviter: ","\`\`\`" + reason + "\`\`\`",false)
        .addField(" 🔐 | Ciscode ", "\`\`\`TC-" + Response1 + Response2 + Response3 + Response4 + Response5 + Response6 + Response7 + Response8 + Response9 + "\`\`\`",false)
        .setTimestamp()
        .setFooter("Nat'Secure")

       message.author.send(embed)
    }
}
