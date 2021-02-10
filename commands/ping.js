module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        console.log(message.author.name);
        message.channel.send('pong!');
    }
}