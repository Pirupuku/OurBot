module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        
        
        console.log(message.author.username);
        console.log(nickname);
        message.channel.send('pong!');
    }
}