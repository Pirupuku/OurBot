module.exports = {
    name: 'logs',
    description: "creates an embed for combat logs",
    execute(Discord, bot, message, args, nickname) {
        var embedLogs = new Discord.MessageEmbed;

        if (message.content.includes("https://legacyplayers.com")) {
            if (args[0] == 'mc') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Molten Core")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177512411758592/molten_core.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ony') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Onyxia")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177512096792586/Onyxia.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'azuregos') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Azuregos")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177511853916250/azuregos.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'kazzak') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Kazzak")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177510376996884/lord_Kazzak.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'bwl') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Blackwing Lair")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177490617499689/Blackwing_lair.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ysondre') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Ysondre")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177491158827058/ysondre.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'lethon') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Lethon")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177433520832552/lethon.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'taerar') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Taerar")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177438075322378/taerar.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'emeriss') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Emeriss")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177441670365184/emeriss.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq40') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Temple of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177304926879754/ahnquiraj.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'naxx') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                    .setTitle("Naxxramas")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177522373230602/naxxramas.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'zg') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                    .setTitle("Zul Gurub")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177524587036712/zulgurub.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq20') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Ruines of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/810177487417901076/aq20.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            bot.channels.cache.get('809669171734380544').send(embedLogs);
        } else {
            message.author.send("The URL you provided isn't valid.");
        }
    }
}