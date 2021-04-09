const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'whalecum',
    description: "a lot of whalecum!",
    execute(bot, message, args, nickname){
        let user = message.mentions.users.first().toString();
        message.channel.send(`BIG whalecum from ${nickname} to ` + user + `\n` + 'https://i.redd.it/u1uz1jkyshjy.jpg\n');
    }
}