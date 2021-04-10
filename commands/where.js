module.exports = {
    name: 'where',
    description: "where the fuck are you all!",
    execute(bot, message, args, nickname){
        let user = message.mentions.users.first().toString();
        message.channel.send(`${nickname} is looking ` + user + `\n` +'https://imgur.com/gallery/mKKAr')
    }
}