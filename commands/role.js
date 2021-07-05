const { RaidID } = require ('../ids');

module.exports = {
    name: 'role',
    description: "give discord role of a role of WoW",
    execute(Discord, message, args){
        const embedRole = new Discord.MessageEmbed()
            .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
            .setTitle('A short instruction how our Discord server works.')
            .setColor('#004A94')
            .setImage('https://cdn.discordapp.com/attachments/803340340894367837/815597005002768414/unknown.png')
            .addFields(
                {
                    name: 'Guild Bank Bot',
                    value: 'See the image below -> type %help to check the commands',
                    inline: true
                },
                {
                    name: 'Guild Bot',
                    value: 'See the image below -> type $help to check the commands',
                    inline: true
                },
                {
                    name: 'Classic DB',
                    value: "If you write an item like that [item name] -> this bot spits out a picture from the database www.classicdb.ch. This bot doesn't work in all channels.",
                    inline: false
                },
                {
                    name: 'Rhytm (Music Bot)',
                    value: 'Plays music for you! That bot just works in the channel #chatting and you have to be connected to the voice chat #shitting',
                    inline: false
                }
            )
        var arg = args[0].toLowerCase();
        if (arg in RaidID) {
            if (message.member.roles.cache.has(RaidID[arg]))
                message.author.send(`You already are a ${arg.toUpperCase()}!`);
            else {
                for (key in RaidID)
                    message.member.roles.remove(RaidID[key]).catch(console.error);
                message.member.roles.add(RaidID[arg]).catch(console.error);
                message.author.send(`You are a ${arg.toUpperCase()} now!`);
                message.author.send(embedRole);
            }
        }
        else if (arg.substr(0, 2) == 'no' && arg.slice(2) in RaidID) {
            arg = arg.slice(2);
            if (!message.member.roles.cache.has(RaidID[arg]))
                message.author.send(`You are not a ${arg.toUpperCase()}!`);
            else {
                message.member.roles.remove(RaidID[arg]).catch(console.error);
                message.author.send(`You are not a ${arg.toUpperCase()} anymore!`);
            }
        }
    }
}