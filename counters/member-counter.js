module.exports = (bot) =>{
    const channelId = '805473191177748491';

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId);
        console.log(guild.channels.cache.get(channelId).members.cache.filter(m => !m.user.bot).size);
        channel.setName(`Members: ${guild.memberCount}`);
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = bot.guilds.cache.get('773542499049668608')
    updateMembers(guild)
}
