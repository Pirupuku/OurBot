module.exports = async(bot, message) =>{
    const guildbot = bot.guilds.cache.get('773542499049668608');
    
    setInterval(() =>{
        const memberCounter = guildbot.members.cache.filter(m => !m.user.bot).size;
        const channel = guildbot.channels.cache.get('805473191177748491');
        channel.setName(`Total Members: ${memberCounter}`);

        let trialID = '798498129661263882';
        let memberID = '773548993040482346';
        let druidID = '798497796541513759';
        let hunterID = '798497755952578560';
        let warriorID = '784698785586348032';
        let warlockID = '798497338561789993';
        let shamanID = '798497547642863626';
        let paladinID = '799233980570402816';
        let priestID = '798497653058830339';
        let rogueID = '798497604035805184';
        let mageID = '798497704976056350';
        let tankID = '798507023020589066';
        let healerID = '798507050752933909';
        let dpsID = '798507075353182218';
        let trialCount = message.guild.roles.cache.get(trialID).members;
        let druidCount = message.guild.roles.cache.get(druidID).members;
        let hunterCount = message.guild.roles.cache.get(hunterID).members;
        let warriorCount = message.guild.roles.cache.get(warriorID).members;
        let warlockCount = message.guild.roles.cache.get(warlockID).members;
        let shamanCount = message.guild.roles.cache.get(shamanID).members;
        let paladinCount = message.guild.roles.cache.get(paladinID).members;
        let priestCount = message.guild.roles.cache.get(priestID).members;
        let rogueCount = message.guild.roles.cache.get(rogueID).members;
        let mageCount = message.guild.roles.cache.get(mageID).members;
        let tankCount = message.guild.roles.cache.get(tankID).members;
        let healerCount = message.guild.roles.cache.get(healerID).members;
        let dpsCount = message.guild.roles.cache.get(dpsID).members;

        if (trialCount) {
            if (druidCount || hunterCount || warlockCount || warriorCount || shamanCount || paladinCount || priestCount || rogueCount || mageCount) {
                if (tankCount || healerCount || dpsCount) {
                    message.guild.roles.add(memberID);
                }
            }
        }


        console.log('Updating Member Count');
    }, 5000);
}