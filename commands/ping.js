module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(bot, message, args){
        let guild = bot.guilds.fetch('773542499049668608');
        let member = guild.member(message.author);
        let nickname = member ? member.displayName : null;
        
        console.log(message.author.username);
        console.log(nickname);
        message.channel.send('pong!');
    }
}