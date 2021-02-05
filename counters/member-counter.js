module.exports = async(bot) =>{
    const guild = bot.guilds.cache.get('773542499049668608');
    setInterval(() =>{
        const memberCounter = guild.members.cache.filter(member => !member.user.bot).size;
        const channel = guild.channels.cache.get('805473191177748491');
        channel.setName(`Total Members: ${memberCounter}`);
        console.log('Updating Member Count');
    }, 5000);
}