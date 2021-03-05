module.exports = async(bot, message) =>{
    const channelId = '805473191177748491';

    const memberCounter = guild => {
        const channel = guild.channels.cache.get(channelId);
        channel.setName(`Total Members: ${guild.memberCounter}`);
    }
    
    bot.on('guildMemberAdd', member => memberCounter(member.guild))
    bot.on('guildMemberRemove', member => memberCounter(member.guild))
    
    const guild = bot.guilds.cache.cache.get('773542499049668608')
    updateMembers(guild)
}
