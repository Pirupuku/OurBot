const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'whalecum',
    description: "a lot of whalecum!",
    execute(message, args){
        message.channel.send('https://i.redd.it/u1uz1jkyshjy.jpg');
    }
}