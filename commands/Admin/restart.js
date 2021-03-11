
module.exports = {
    name: "restart",
    category: "Admin",
    run: async (client, message, args) => {
        if (message.author.id !== '196097770044653568') {
            return message.channel.send("\`\`\`❌ |  Non \`\`\`")
        }
        await message.channel.send("\`\`\`❌ |  Redémarrage du bot . . . . . .  \`\`\`")
        process.exit();
    }
}