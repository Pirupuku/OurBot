module.exports = {
    name: 'role',
    description: "give discord role of a role of WoW",
    execute(Discord, message, args){
        
        const roleTank = '798507023020589066';
        const roleHealer = '798507050752933909';
        const roleDps = '798507075353182218';

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

        if (args[0] == 'tank'){
            if (message.member.roles.cache.has(roleTank)){
                message.author.send('You already are a TANK!');
            } else {
                message.member.roles.add(roleTank).catch(console.error);
                message.member.roles.remove(roleHealer).catch(console.error);
                message.member.roles.remove(roleDps).catch(console.error);
                message.author.send('You are a TANK now!');
                message.author.send(embedRole);
            }
        } else if (args[0] == 'notank'){
            if (!message.member.roles.cache.has(roleTank)){
                message.author.send('You are not a TANK!');
            } else {
                message.member.roles.remove(roleTank).catch(console.error);
                message.author.send('You are not a TANK anymore!');
            }
        } else if (args[0] == 'healer'){
            if (message.member.roles.cache.has(roleHealer)){
                message.author.send('You already are a HEALER!');
            } else {
                message.member.roles.add(roleHealer).catch(console.error);
                message.member.roles.remove(roleTank).catch(console.error);
                message.member.roles.remove(roleDps).catch(console.error);
                message.author.send('You are a HEALER now!');
                message.author.send(embedRole);
            }
        } else if (args[0] == 'nohealer'){
            if (!message.member.roles.cache.has(roleHealer)){
                message.author.send('You are not a HEALER!');
            } else {
                message.member.roles.remove(roleHealer).catch(console.error);
                message.author.send('You are not a HEALER anymore!');
            }
        } else if (args[0] == 'dps'){
            if (message.member.roles.cache.has(roleDps)){
                message.author.send('You already are a DPS!');
            } else {
                message.member.roles.add(roleDps).catch(console.error);
                message.member.roles.remove(roleHealer).catch(console.error);
                message.member.roles.remove(roleTank).catch(console.error);
                message.author.send('You are a DPS now!');
                message.author.send(embedRole);
            }
        } else if (args[0] == 'nodps'){
            if (!message.member.roles.cache.has(roleDps)){
                message.author.send('You are not a DPS!');
            } else {
                message.member.roles.remove(roleDps).catch(console.error);  
                message.author.send('You are not a DPS anymore!');
            }
        }
    }
}