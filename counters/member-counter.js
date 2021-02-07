module.exports = async(bot, message) =>{
    const guild = bot.guilds.cache.get('773542499049668608');
    const classDruid = message.member.roles.cache.has('798497796541513759');
    const classHunter = message.member.roles.cache.has('798497755952578560');
    const classMage = message.member.roles.cache.has('798497704976056350');
    const classRogue = message.member.roles.cache.has('798497604035805184');
    const classWarlock = message.member.roles.cache.has('798497338561789993');
    const classWarrior = message.member.roles.cache.has('784698785586348032');
    const classPriest = message.member.roles.cache.has('798497653058830339');
    const classShaman = message.member.roles.cache.has('798497547642863626');
    const classPaladin = message.member.roles.cache.has('799233980570402816');
    const roleTank = message.member.roles.cache.has('798507023020589066');
    const roleDps = message.member.roles.cache.has('798507075353182218');
    const roleHealer = message.member.roles.cache.has('798507050752933909');
    const memberStatus = '773548993040482346';
    const trialStatus = '798498129661263882';
    setInterval(() =>{
        const memberCounter = guild.members.cache.filter(member => !member.user.bot).size;
        const channel = guild.channels.cache.get('805473191177748491');
        channel.setName(`Total Members: ${memberCounter}`);

        if (classDruid || classHunter || classMage || classRogue || classPaladin || classPriest || classWarlock || classWarrior || classShaman) {
            if (roleDps || roleHealer || roleTank) {
                if(message.member.roles.cache.has(trialStatus)) {
                    message.member.roles.add(memberStatus);
                }
            }
        } 
        console.log('Updating Member Count');
    }, 900000);
}