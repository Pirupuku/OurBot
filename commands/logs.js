module.exports = {
    name: 'logs',
    description: "creates an embed for combat logs",
    execute(Discord, message, args, nickname) {
        var embedLogs = new Discord.MessageEmbed;
        console.log(args[0]);
        console.log(args[1]);

        if (args[0] == 'mc') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Molten Core")
                .setURL(`${args[1]}`)
                .setThumbnail('https://i.ibb.co/CBVZw8h/molten-core.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'ony') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Onyxia")
                .setURL(`${args[1]}`)
                .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Onyxias-Lair-Guide.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'azuregos') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Azuregos")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'kazzak') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Kazzak")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'bwl') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Blackwing Lair")
                .setURL(`${args[1]}`)
                .setThumbnail('https://i.ibb.co/pf2q7CL/BWL.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'ysondre') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Ysondre")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'lethon') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Lethon")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'taerar') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Taerar")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'emeriss') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Emeriss")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'aq40') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Temple of Ahn'Qiraji")
                .setURL(`${args[1]}`)
                .setThumbnail('https://i.ibb.co/zGjSH2p/aq40.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'naxx') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                .setTitel("Naxxramas")
                .setURL(`${args[1]}`)
                .setThumbnail('https://i.ibb.co/zs4wJnb/naxx.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'zg') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                .setTitel("Zul Gurub")
                .setURL(`${args[1]}`)
                .setThumbnail('https://i.ibb.co/gyW9KsQ/zg.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'aq20') {
            embedLogs
                .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                .setTitel("Ruines of Ahn'Qiraji")
                .setURL(`${args[1]}`)
                .setThumbnail('https://i.ibb.co/3yf7qjJ/aq20.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        message.channel.send(embedLogs);
    }
}