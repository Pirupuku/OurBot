module.exports = {
    name: 'fokya',
    description: "fock ya!",
    execute(bot, message, args, nickname){
        let user = message.mentions.users.first().toString();
        message.channel.send(`Greetings from ${nickname} to ` + user + `\n` + 'https://giphy.com/gifs/XHr6LfW6SmFa0')
    }
}