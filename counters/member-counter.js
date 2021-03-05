module.exports = (bot) =>{
    const channelId = '805473191177748491';

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId);
        channel.setName(`Members: ${guild.memberCount}`);
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
    const guild = bot.guilds.cache.get('773542499049668608')
    console.log(guild.members.cache.filter(m => !m.user.bot).size);
    updateMembers(guild)
}
