const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'whalecum',
    description: "a lot of whalecum!",
    execute(bot, message, args, nickname){
        message.channel.send(`BIG whalecum from ${nickname}\n` + 'https://i.redd.it/u1uz1jkyshjy.jpg\n');
    }
}