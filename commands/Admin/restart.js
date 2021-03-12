
module.exports = {
    name: "reset",
    category: "Admin",
    run: async (client, message, args) => {
        if (message.author.id !== '123456789') {
            return message.channel.send("\`\`\`❌ |  Non \`\`\`")
        }
        await message.channel.send("\`\`\`❌ |  Redémarrage du bot . . . . . .  \`\`\`")
        process.exit();
    }
}