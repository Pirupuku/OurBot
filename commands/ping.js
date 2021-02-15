module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(bot, message, args, nickname){
        message.channel.send(`Here is your pong, ${nickname}!`);
        bot.channels.cache.get('798877748117635122').send('pong');
    }
}