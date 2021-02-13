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
                    .setThumbnail('https://www.google.com/search?q=bild+4:3&rlz=1C1CHBF_deDE893DE893&sxsrf=ALeKk01UgQg9CuWV3uhS09AW919gsGkzdA:1613217817214&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjmr8LX6ObuAhWx3eAKHVU5CqMQ_AUoAXoECBcQAw&biw=1920&bih=937#imgrc=2bD1i0qQ3I-7JM')
                    //.setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966789307531315/molten_core.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ony') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Onyxia")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://www.google.com/search?q=bild+4:3&rlz=1C1CHBF_deDE893DE893&sxsrf=ALeKk01UgQg9CuWV3uhS09AW919gsGkzdA:1613217817214&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjmr8LX6ObuAhWx3eAKHVU5CqMQ_AUoAXoECBcQAw&biw=1920&bih=937#imgrc=2bD1i0qQ3I-7JM&imgdii=SMSaOt99qgKmgM')
                    //.setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966787088482314/Onyxia.png')
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
                    //.setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966755422273536/azuregos.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'kazzak') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Kazzak")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966771674677258/lord_Kazzak.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'bwl') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Blackwing Lair")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966747209039903/Blackwing_lair.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'ysondre') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Ysondre")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966790805291058/ysondre.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'lethon') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Lethon")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966764406079488/lethon.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'taerar') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Taerar")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966787151921152/taerar.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'emeriss') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Emeriss")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966760857305118/emeriss.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq40') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Temple of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966584415387698/ahnquiraj.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'naxx') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                    .setTitle("Naxxramas")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966789135302686/naxxramas.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'zg') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')    
                    .setTitle("Zul Gurub")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966792210120704/zulgurub.png')
                    .setDescription(`${nickname} uploaded the logs for the raid.`)
                    .setColor('#004A94')
                    .setTimestamp()
            }
            if (args[0] == 'aq20') {
                embedLogs
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setTitle("Ruines of Ahn'Qiraji")
                    .setURL(`${args[1]}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/801916760482644008/809966727235633202/aq20.png')
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