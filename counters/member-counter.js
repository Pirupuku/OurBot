module.exports = (bot) => {
    const channelId = '805473191177748491';
    
    var updateMembers = (guild) => {
        console.log(guild.id);
        // if (guild.channels.exists('name', corruption)) {
            const botRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798524203120197652');
            const guestRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '808291239924465694');
            const trialRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798498129661263882');
            const memberRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '773548993040482346');
            const socialRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798512429175668736');
            const raiderRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798498626442887199');
            const officerRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798497871376547881');
            const bots = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == botRole)).map(member => member.user.tag).length
            const guests = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == guestRole)).map(member => member.user.tag).length
            const trial = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == trialRole)).map(member => member.user.tag).length
            const member = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == memberRole)).map(member => member.user.tag).length
            const social = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == socialRole)).map(member => member.user.tag).length
            const raider = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == raiderRole)).map(member => member.user.tag).length
            const officer = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == officerRole)).map(member => member.user.tag).length
            const withoutRole = guests + trial + member + social + raider + officer + bots
            const channel = guild.channels.cache.get(channelId);
            var realNumber = guild.memberCount - bots - guests - (guild.memberCount - withoutRole);
            channel.setName(`Whelps: ${realNumber}`);
            console.log(realNumber);
        //}
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    bot.on('guildMemberUpdate', (member) => updateMembers(member.guild))

    const guild = bot.guilds.cache.get('773542499049668608')

    setInterval(function () {
        updateMembers(guild);
    }, 1000*60*30)

    updateMembers(guild)
}
