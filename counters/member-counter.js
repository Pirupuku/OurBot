module.exports = async (bot) => {
    const channelId = '805473191177748491';
    const botRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798524203120197652');
    const guestRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '808291239924465694');
    const trialRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798498129661263882');
    const memberRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '773548993040482346');
    const socialRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798512429175668736');
    const raiderRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798498626442887199');
    const officerRole = bot.guilds.cache.get('773542499049668608').roles.cache.find(role => role == '798497871376547881');
    var bots = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == botRole)).map(member => member.user.tag).length
    var guests = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == guestRole)).map(member => member.user.tag).length
    var trial = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == trialRole)).map(member => member.user.tag).length
    var member = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == memberRole)).map(member => member.user.tag).length
    var social = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == socialRole)).map(member => member.user.tag).length
    var raider = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == raiderRole)).map(member => member.user.tag).length
    var officer = bot.guilds.cache.get('773542499049668608').members.cache.filter(member => member.roles.cache.find(role => role == officerRole)).map(member => member.user.tag).length
    var withoutRole = guests + trial + member + social + raider + officer + bots

    console.log(`guest: ${guests}`);
    console.log(`trial: ${trial}`);
    console.log(`member: ${member}`);
    console.log(`social: ${social}`);
    console.log(`raider: ${raider}`);
    console.log(`officer: ${officer}`);
    console.log(`bots: ${bots}`);

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(channelId);
        var realNumber = guild.memberCount - bots - guests - (guild.memberCount - withoutRole);
        channel.setName(`Members: ${realNumber}`);
    }
    
    bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    bot.on('guildMemberRemove', (member) => updateMembers(member.guild))
    bot.on('guildMemberUpdate', (member) => updateMembers(member.guild))

    setInterval(function () {
        updateMembers(guild);
    }, 1000*60*30)

    const guild = bot.guilds.cache.get('773542499049668608')
    updateMembers(guild)
}
