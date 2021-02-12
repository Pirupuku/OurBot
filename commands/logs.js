const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: 'logs',
    description: "creates an embed for combat logs",
    execute(Discord, message, args, nickname) {
        var embedLogs = new Discord.MessageEmbed;
        
        if (args[0] == 'mc') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Molten-Core-Guide-1024x729.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'ony') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Onyxias-Lair-Guide.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'azuregos') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'kazzak') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'bwl') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'ysondre') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'lethon') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'taerar') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'emeriss') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'aq40') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'naxx') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'zg') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'aq20') {
            embedLogs
                .setAuthor(`${args[0]}`)
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
    }
}