module.exports = async(bot, message) =>{
    const guildbot = bot.guilds.cache.get('773542499049668608');

    setInterval(() =>{
        const memberCounter = guildbot.members.cache.filter(m => !m.user.bot).size;
        const channel = guildbot.channels.cache.get('805473191177748491');
        channel.setName(`Total Members: ${memberCounter}`);
        console.log('Updating Member Count');
    }, 900000);
}