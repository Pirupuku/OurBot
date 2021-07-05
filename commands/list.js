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
        const shamanName = message.guild.roles.cache.get('798497547642863626').members.map(m=>m.displayName);
        const warlockName = message.guild.roles.cache.get('798497338561789993').members.map(m=>m.displayName);
        const warriorName = message.guild.roles.cache.get('784698785586348032').members.map(m=>m.displayName);
        const tankName = message.guild.roles.cache.get('798507023020589066').members.map(m=>m.displayName);
        const healerName = message.guild.roles.cache.get('798507050752933909').members.map(m=>m.displayName);
        const dpsName = message.guild.roles.cache.get('798507075353182218').members.map(m=>m.displayName);
        const trialName = message.guild.roles.cache.get('798498129661263882').members.map(m=>m.displayName);
        const memberName = message.guild.roles.cache.get('773548993040482346').members.map(m=>m.displayName);
        const socialName = message.guild.roles.cache.get('798512429175668736').members.map(m=>m.displayName);
        const raiderName = message.guild.roles.cache.get('798498626442887199').members.map(m=>m.displayName);
        const officerName = message.guild.roles.cache.get('798497871376547881').members.map(m=>m.displayName);
        const classrole = args[0];
        var druids = druidName[0];
        var hunters = hunterName[0];
        var mages = mageName[0];
        var paladins = paladinName[0];
        var priests = priestName[0];
        var rogues = rogueName[0];
        var shamans = shamanName[0];
        var warlocks = warlockName[0];
        var warriors = warriorName[0];
        var tanks = tankName[0];
        var healers = healerName[0];
        var dps = dpsName[0];
        var trials = trialName[0];
        var members = memberName[0];
        var socials = socialName[0];
        var raiders = raiderName[0];
        var officers = officerName[0];
        var embedList = new Discord.MessageEmbed();
        
        if (classrole == 'druid') {
            if (druidName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${druidName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < druidName.length; i++) {
                    druids = druids + ', ' + druidName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${druidName.length})** I found.`,
                            value: `${druids}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'hunter') {
            if (hunterName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${hunterName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < hunterName.length; i++) {
                    hunters = hunters + ', ' + hunterName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${hunterName.length})** I found.`,
                            value: `${hunters}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'mage') {
            if (mageName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${mageName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < mageName.length; i++) {
                    mages = mages + ', ' + mageName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${mageName.length})** I found.`,
                            value: `${mages}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'paladin') {
            if (paladinName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${paladinName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < paladinName.length; i++) {
                    paladins = paladins + ', ' + paladinName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${paladinName.length})** I found.`,
                            value: `${paladins}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'priest') {
            if (priestName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${priestName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < priestName.length; i++) {
                    priests = priests + ', ' + priestName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${priestName.length})** I found.`,
                            value: `${priests}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'rogue') {
            if (rogueName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${rogueName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < rogueName.length; i++) {
                    rogues = rogues + ', ' + rogueName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${rogueName.length})** I found.`,
                            value: `${rogues}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'shaman') {
            if (shamanName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${shamanName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < shamanName.length; i++) {
                    shamans = shamans + ', ' + shamanName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${shamanName.length})** I found.`,
                            value: `${shamans}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'warlock') {
            if (warlockName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${warlockName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < warlockName.length; i++) {
                    warlocks = warlocks + ', ' + warlockName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${warlockName.length})** I found.`,
                            value: `${warlocks}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'warrior') {
            if (warriorName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${warriorName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < warriorName.length; i++) {
                    warriors = warriors + ', ' + warriorName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${warriorName.length})** I found.`,
                            value: `${warriors}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'tank') {
            if (tankName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${tankName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < tankName.length; i++) {
                    tanks = tanks + ', ' + tankName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${tankName.length})** I found.`,
                            value: `${tanks}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'healer') {
            if (healerName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${healerName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < healerName.length; i++) {
                    healers = healers + ', ' + healerName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${healerName.length})** I found.`,
                            value: `${healers}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'dps') {
            if (dpsName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${dpsName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < dpsName.length; i++) {
                    dps = dps + ', ' + dpsName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${dpsName.length})** I found.`,
                            value: `${dps}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'trial') {
            if (trialName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${trialName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < trialName.length; i++) {
                    trials = trials + ', ' + trialName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${trialName.length})** I found.`,
                            value: `${trials}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'member') {
            if (memberName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${memberName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < memberName.length; i++) {
                    members = members + ', ' + memberName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${memberName.length})** I found.`,
                            value: `${members}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'social') {
            if (socialName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${socials}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < socialName.length; i++) {
                    socials = socials + ', ' + socialName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${socialName.length})** I found.`,
                            value: `${socials}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        }
        if (classrole == 'raider') {
            if (raiderName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${raiderName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < raiderName.length; i++) {
                    raiders = raiders + ', ' + raiderName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${raiderName.length})** I found.`,
                            value: `${raiders}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'officer') {        
            if (officerName.length == 0) {
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, I couldn't find any **${classrole}s**`,
                            value: `${officerName.length}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            } else {
                for (var i = 1; i < officerName.length; i++) {
                    officers = officers + ', ' + officerName[i];
                }
                embedList
                    .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .addFields (
                        {
                            name: `Hey ${nickname}, those are all the **${classrole}s (${officerName.length})** I found.`,
                            value: `${officers}`,
                            inline: false
                        }
                    )
                message.author.send(embedList);
            }
        } else if (classrole == 'all') {
            embedList
                .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .setDescription(`Hey ${nickname}, here is a list of every class from the guild.`)
                .addFields (
                    {
                        name: `Druids (${druidName.length}):`,
                        value: `${druids}`,
                        inline: false
                    },
                    {
                        name: `Hunters (${hunterName.length}):`,
                        value: `${hunters}`,
                        inline: false
                    },
                    {
                        name: `Mages (${mageName.length}):`,
                        value: `${mages}`,
                        inline: false
                    },
                    {
                        name: `Paladins (${paladinName.length}):`,
                        value: `${paladins}`,
                        inline: false
                    },
                    {
                        name: `Priests (${priestName.length}):`,
                        value: `${priests}`,
                        inline: false
                    },
                    {
                        name: `Rogues (${rogueName.length}):`,
                        value: `${rogues}`,
                        inline: false
                    },
                    {
                        name: `Shamans (${shamanName.length}):`,
                        value: `${shamans}`,
                        inline: false
                    },
                    {
                        name: `Warlocks (${warlockName.length}):`,
                        value: `${warlocks}`,
                        inline: false
                    },
                    {
                        name: `Warriors (${warriorName.length}):`,
                        value: `${warriors}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        }
    }
}