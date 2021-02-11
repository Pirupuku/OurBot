module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, nickname){
        message.channel.send(`Here is your pong, ${nickname}!`);
        console.log(message.guild.roles.cache.get('798497871376547881').members.map(m=>m.user.tag));
    }
}