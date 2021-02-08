module.exports = {
    name: 'joinserver',
    description: "Class and Role on joining the server.",
    async execute(args, Discord, bot) {
        let welcomeRole = guildMember.guild.roles.cache.has('798498129661263882');

        const druid = guildMember.guild.roles.cache.has('798497796541513759');
        const hunter = guildMember.guild.roles.cache.has('798497755952578560');
        const warrior = guildMember.guild.roles.cache.has('784698785586348032');
        const warlock = guildMember.guild.roles.cache.has('798497338561789993');
        const paladin = guildMember.guild.roles.cache.has('799233980570402816');
        const priest = guildMember.guild.roles.cache.has('798497653058830339');
        const rogue = guildMember.guild.roles.cache.has('798497604035805184');
        const mage = guildMember.guild.roles.cache.has('798497704976056350');
        const tank = guildMember.guild.roles.cache.has('798507023020589066');
        const healer = guildMember.guild.roles.cache.has('798507050752933909');
        const dps = guildMember.guild.roles.cache.has('798507075353182218');

        const druidEmoji = '808303286339764225';
        const hunterEmoji = '808303320854560768';
        const warriorEmoji = '808303170472247306';
        const warlockEmoji = '808303398834405406';
        const paladinEmoji = '808303306521968661';
        const priestEmoji = '808303419546402836';
        const rogueEmoji = '808303296535724072';
        const mageEmoji = '808303367880966166';
        const tankEmoji = '808303426676457492';
        const healerEmoji = '808303449581158451';
        const dpsEmoji = '808303435408605184';

        let embed = new Discord.MessageEmbed()
        .setcolor('#004A94')
        .setTitle('Choose the class of your main!')
        .setDescription('Choosing your class is a must to get "Member" status later.\n\n'
            + `${druidEmoji} for druid\n`
            + `${hunterEmoji} for hunter\n`
            + `${warriorEmoji} for warrior\n`
            + `${warlockEmoji} for warlock\n`
            + `${paladinEmoji} for paladin\n`
            + `${priestEmoji} for priest\n`
            + `${rogueEmoji} for rogue\n`
            + `${mageEmoji} for mage\n`);

        let messageEmbed = await member.guild.cache.get(`${member.id}`).send(embed);
        messageEmbed.react(druidEmoji);
        messageEmbed.react(hunterEmoji);
        messageEmbed.react(warriorEmoji);
        messageEmbed.react(warlockEmoji);
        messageEmbed.react(paladinEmoji);
        messageEmbed.react(priestEmoji);
        messageEmbed.react(rogueEmoji);
        messageEmbed.react(mageEmoji);

        guildMember.roles.add(welcomeRole);
        guildMember.guild.auther.send
    }

}