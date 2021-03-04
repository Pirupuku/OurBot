module.exports = {
    name: 'list',
    description: "list all the members of a ceratin roll",
    execute(Discord, message, args, nickname) {
        const druidName = message.guild.roles.cache.get('798497796541513759').members.map(m=>m.displayName);
        const hunterName = message.guild.roles.cache.get('798497755952578560').members.map(m=>m.displayName);
        const mageName = message.guild.roles.cache.get('798497704976056350').members.map(m=>m.displayName);
        const paladinName = message.guild.roles.cache.get('799233980570402816').members.map(m=>m.displayName);
        const priestName = message.guild.roles.cache.get('798497653058830339').members.map(m=>m.displayName);
        const rogueName = message.guild.roles.cache.get('798497604035805184').members.map(m=>m.displayName);
        const warlockName = message.guild.roles.cache.get('798497338561789993').members.map(m=>m.displayName);
        const warriorName = message.guild.roles.cache.get('784698785586348032').members.map(m=>m.displayName);
        const tankName = message.guild.roles.cache.get('798507023020589066').members.map(m=>m.displayName);
        const healerName = message.guild.roles.cache.get('798507050752933909').members.map(m=>m.displayName);
        const dpsName = message.guild.roles.cache.get('798507075353182218').members.map(m=>m.displayName);
        const classrole = args[0];
        var druids = druidName[0];
        var hunters = hunterName[0];
        var mages = mageName[0];
        var paladins = paladinName[0];
        var priests = priestName[0];
        var rogues = rogueName[0];
        var warlocks = warlockName[0];
        var warriors = warriorName[0];
        var tanks = tankName[0];
        var healers = healerName[0];
        var dps = dpsName[0];
        var embedList = new Discord.MessageEmbed();

        for (var i = 1; i < druidName.length; i++) {
            druids = druids + ', ' + druidName[i];
        }
        for (var i = 1; i < hunterName.length; i++) {
            hunters = hunters + ', ' + hunterName[i];
        }
        for (var i = 1; i < mageName.length; i++) {
            mages = mages + ', ' + mageName[i];
        }
        for (var i = 1; i < paladinName.length; i++) {
            paladins = paladins + ', ' + paladinName[i];
        }
        for (var i = 1; i < priestName.length; i++) {
            priests = priests + ', ' + priestName[i];
        }
        for (var i = 1; i < rogueName.length; i++) {
            rogues = rogues + ', ' + rogueName[i];
        }
        for (var i = 1; i < warlockName.length; i++) {
            warlocks = warlocks + ', ' + warlockName[i];
        }       
        for (var i = 1; i < warriorName.length; i++) {
            warriors = warriors + ', ' + warriorName[i];
        }
        for (var i = 1; i < tankName.length; i++) {
            tanks = tanks + ', ' + tankName[i];
        }
        for (var i = 1; i < healerName.length; i++) {
            healers = healers + ', ' + healerName[i];
        }
        for (var i = 1; i < dpsName.length; i++) {
            dps = dps + ', ' + dpsName[i];
        }
        if (classrole == 'druid') {
            embedList
                .setAuthor('[A][LC] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${druids}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'hunter') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${hunters}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'mage') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${mages}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'paladin') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${paladins}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'priest') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${priests}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'rogue') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${rogues}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'warlock') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${warlocks}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'warrior') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${warriors}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'tank') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${tanks}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'healer') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${healers}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'dps') {
            embedList
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${dps}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        }
    }
}