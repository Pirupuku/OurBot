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
                    .setThumbnail('https://i.ibb.co/CBVZw8h/molten-core.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ony') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Onyxia")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Onyxias-Lair-Guide.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'azuregos') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Azuregos")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'kazzak') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Kazzak")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'bwl') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Blackwing Lair")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/pf2q7CL/BWL.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ysondre') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Ysondre")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'lethon') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Lethon")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'taerar') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Taerar")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'emeriss') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Emeriss")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq40') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Temple of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/zGjSH2p/aq40.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'naxx') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                    .setTitle("Naxxramas")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/zs4wJnb/naxx.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'zg') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                    .setTitle("Zul Gurub")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/gyW9KsQ/zg.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq20') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Ruines of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/3yf7qjJ/aq20.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            bot.channels.cache.get('809669171734380544').send(embedLogs);
        } esle {
            message.author.send("The URL you provided isn't valid.")
        }
    }
}