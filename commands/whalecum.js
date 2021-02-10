const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'whalecum',
    description: "a lot of whalecum!",
    execute(message, args, nickname){
        message.channel.send('BIG\n' + 'https://i.redd.it/u1uz1jkyshjy.jpg\n' + `from ${nickname}`);
    }
}