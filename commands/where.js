module.exports = {
    name: 'where',
    description: "where the fuck are you all!",
    execute(message, args, nickname){
        message.channel.send(`${nickname} is looking for his friends.\n` +'https://imgur.com/gallery/mKKAr')
    }
}