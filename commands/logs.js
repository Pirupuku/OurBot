module.exports = {
    name: 'logs',
    description: "creates an embed for combat logs",
    execute(Discord, bot, message, args, nickname) {
        var embedLogs = new Discord.MessageEmbed;

        if (message.content.includes("https://legacyplayers.com")) {
            if (args[0] == 'mc') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966789307531315/molten_core.png')
                    .setTitle("Molten Core")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/CBVZw8h/molten-core.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ony') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966787088482314/Onyxia.png')
                    .setTitle("Onyxia")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Onyxias-Lair-Guide.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'azuregos') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966755422273536/azuregos.png')
                    .setTitle("Azuregos")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'kazzak') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966771674677258/lord_Kazzak.png')
                    .setTitle("Kazzak")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'bwl') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966747209039903/Blackwing_lair.png')
                    .setTitle("Blackwing Lair")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/pf2q7CL/BWL.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ysondre') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966790805291058/ysondre.png')
                    .setTitle("Ysondre")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'lethon') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966764406079488/lethon.png')
                    .setTitle("Lethon")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'taerar') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966787151921152/taerar.png')
                    .setTitle("Taerar")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'emeriss') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966760857305118/emeriss.png')
                    .setTitle("Emeriss")
                    .setURL(`${args[1]}`)
                    .setThumbnail('')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq40') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966584415387698/ahnquiraj.png')
                    .setTitle("Temple of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/zGjSH2p/aq40.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'naxx') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966789135302686/naxxramas.png')    
                    .setTitle("Naxxramas")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/zs4wJnb/naxx.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'zg') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966792210120704/zulgurub.png')    
                    .setTitle("Zul Gurub")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/gyW9KsQ/zg.jpg')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq20') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/809966727235633202/aq20.png')
                    .setTitle("Ruines of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://i.ibb.co/3yf7qjJ/aq20.jpg')
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