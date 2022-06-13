module.exports = (client) => {
    const channelId = '805473191177748491';
  
    var updateMembers = (guild) => {
        if (guild.id === '773542499049668608') {
            const channel = guild.channels.cache.get(channelId);
            var bots = guild.members.cache.filter(member => !member.user.bot).size;
            //var realNumber = guild.memberCount - bots;
            
            var roleOfficerId = guild.roles.cache.find(role => role.id === '798497871376547881');
            var roleOfficer = guild.members.cache.filter(member => member.roles.cache.find(role => role === roleOfficerId)).map(member => member.user.tag).length;
            var roleRaiderId = guild.roles.cache.find(role => role.id === '798498626442887199');
            var roleRaider = guild.members.cache.filter(member => member.roles.cache.find(role => role === roleRaiderId)).map(member => member.user.tag).length;
            var roleSocialId = guild.roles.cache.find(role => role.id === '798512429175668736');
            var roleSocial = guild.members.cache.filter(member => member.roles.cache.find(role => role === roleSocialId)).map(member => member.user.tag).length;
            var roleMemberId = guild.roles.cache.find(role => role.id === '773548993040482346');
            var roleMember = guild.members.cache.filter(member => member.roles.cache.find(role => role === roleMemberId)).map(member => member.user.tag).length;
            var roleGuestId = guild.roles.cache.find(role => role.id === '808291239924465694');
            var roleGuest = guild.members.cache.filter(member => member.roles.cache.find(role => role === roleGuestId)).map(member => member.user.tag).length;
            var realNumber = roleOfficer + roleRaider + roleMember;
            channel.setName(`Whelps: ${realNumber}`);
        }
    }
    
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
    client.on('guildMemberUpdate', (member) => updateMembers(member.guild))

    const guild = client.guilds.cache.get('773542499049668608')

    setInterval(function () {
        updateMembers(guild);
    }, 1000*60*30)

    updateMembers(guild)
}
