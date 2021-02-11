module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, nickname){
        message.channel.send(`Here is your pong, ${nickname}!`);
        console.log(message.guild.roles.cache.get('798497796541513759').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('798497755952578560').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('798497704976056350').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('799233980570402816').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('798497653058830339').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('798497604035805184').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('798497338561789993').members.map(m=>m.user.tag));
        console.log(message.guild.roles.cache.get('784698785586348032').members.map(m=>m.user.tag));
    }
}