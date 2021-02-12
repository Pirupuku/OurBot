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
        var test = '';

        for (var i = 0; i < druidName.length; i++) {
            test = args[i] + ',' + ' ' + test;
        }
        console.log(test);

        if (classrole == 'druid') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${druidName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'hunter') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${hunterName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'mage') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${mageName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'paladin') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${paladinName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'priest') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${priestName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'rogue') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${rogueName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'warlock') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${warlockName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'warrior') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${warriorName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'tank') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${tankName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'healer') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${healerName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        } else if (classrole == 'dps') {
            const embedList = new Discord.MessageEmbed()
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setColor('#004A94')
                .addFields (
                    {
                        name: `Hey ${nickname}, those are all the ${classrole}s I found.`,
                        value: `${dpsName}`,
                        inline: false
                    }
                )
            message.author.send(embedList);
        }
    }
}