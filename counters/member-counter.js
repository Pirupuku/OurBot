module.exports = async(bot, message) =>{
    const guild = bot.guilds.cache.get('773542499049668608');
    const classDruid = bot.guilds.cache.get('798497796541513759');
    const classHunter = bot.guilds.cache.get('798497755952578560');
    const classMage = bot.guilds.cache.get('798497704976056350');
    const classRogue = bot.guilds.cache.get('798497604035805184');
    const classWarlock = bot.guilds.cache.get('798497338561789993');
    const classWarrior = bot.guilds.cache.get('784698785586348032');
    const classPriest = bot.guilds.cache.get('798497653058830339');
    const classShaman = bot.guilds.cache.get('798497547642863626');
    const classPaladin = bot.guilds.cache.get('799233980570402816');
    const roleTank = bot.guilds.cache.get('798507023020589066');
    const roleDps = bot.guilds.cache.get('798507075353182218');
    const roleHealer = bot.guilds.cache.get('798507050752933909');
    const memberStatus = '773548993040482346';
    const trialStatus = '798498129661263882';
    
    setInterval(() =>{
        const memberCounter = guild.members.cache.filter(m => !m.user.bot).size;
        const channel = guild.channels.cache.get('805473191177748491');
        channel.setName(`Total Members: ${memberCounter}`);

        if (classDruid || classHunter || classMage || classRogue || classPaladin || classPriest || classWarlock || classWarrior || classShaman) {
            if (roleDps || roleHealer || roleTank) {
                if(bot.guilds.cache.get(trialStatus)) {
                    bot.guilds.cache.add(memberStatus);
                }
            }
        } 
        
        console.log('Updating Member Count');
    }, 900000);
}