module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, nickname){
        message.channel.send(`Here is your pong, ${nickname}!`);
    }
}