module.exports = {
    name: 'fokya',
    description: "fock ya!",
    execute(bot, message, args, nickname){
        message.channel.send(`Greetings from ${nickname}\n` + 'https://giphy.com/gifs/XHr6LfW6SmFa0')
    }
}