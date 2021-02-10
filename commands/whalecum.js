const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'whalecum',
    description: "a lot of whalecum!",
    execute(message, args){
        //const attachment = new MessageAttachment ('https://i.redd.it/u1uz1jkyshjy.jpg');
        message.channel.send('https://i.redd.it/u1uz1jkyshjy.jpg');
    }
}