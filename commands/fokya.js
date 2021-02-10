module.exports = {
    name: 'fokya',
    description: "fock ya!",
    execute(message, args, nickname){
        message.channel.send(`Greetings from ${nickname}\n` + 'https://giphy.com/gifs/XHr6LfW6SmFa0')
    }
}