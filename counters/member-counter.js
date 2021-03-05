module.exports = (bot) =>{
    const channelId = '805473191177748491';

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId);
        var realNumber = guild.memberCount - guild.members.cache.filter(m => m.user.bot).size;
        channel.setName(`Members: ${realNumber}`);
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = bot.guilds.cache.get('773542499049668608')
    updateMembers(guild)
}
