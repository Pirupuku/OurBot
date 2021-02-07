module.exports = async(bot, message) =>{
    const guild = bot.guilds.cache.get('773542499049668608');
    const classDruid = bot.guilds.roles.cache.has('798497796541513759');
    const classHunter = bot.guilds.roles.cache.has('798497755952578560');
    const classMage = bot.guilds.roles.cache.has('798497704976056350');
    const classRogue = bot.guilds.roles.cache.has('798497604035805184');
    const classWarlock = bot.guilds.roles.cache.has('798497338561789993');
    const classWarrior = bot.guilds.roles.cache.has('784698785586348032');
    const classPriest = bot.guilds.roles.cache.has('798497653058830339');
    const classShaman = bot.guilds.roles.cache.has('798497547642863626');
    const classPaladin = bot.guilds.roles.cache.has('799233980570402816');
    const roleTank = bot.guilds.roles.cache.has('798507023020589066');
    const roleDps = bot.guilds.roles.cache.has('798507075353182218');
    const roleHealer = bot.guilds.roles.cache.has('798507050752933909');
    const memberStatus = '773548993040482346';
    const trialStatus = '798498129661263882';
    
    setInterval(() =>{
        const memberCounter = guild.members.cache.filter(m => !m.user.bot).size;
        const channel = guild.channels.cache.get('805473191177748491');
        channel.setName(`Total Members: ${memberCounter}`);

        if (classDruid || classHunter || classMage || classRogue || classPaladin || classPriest || classWarlock || classWarrior || classShaman) {
            if (roleDps || roleHealer || roleTank) {
                if(bot.guilds.roles.cache.has(trialStatus)) {
                    bot.guilds.roles.add(memberStatus);
                }
            }
        } 
        
        console.log('Updating Member Count');
    }, 900000);
}