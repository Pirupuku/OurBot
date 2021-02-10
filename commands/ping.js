module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        console.log(message.author.username);
        console.log(message.channel.server.detailsOf(message.author).nick);
        message.channel.send('pong!');
    }
}