module.exports = {
    name: 'logs',
    description: "creates an embed for combat logs",
    execute(Discord, message, args, nickname) {
        var embedLogs = new Discord.MessageEmbed;
        console.log(args[0]);
        console.log(args[1]);

        if (args[0] == 'mc') {
            embedLogs
                .setAuthor("Molten Core")
                .setURL(`${args[1]}`)
                .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Molten-Core-Guide-1024x729.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'ony') {
            embedLogs
                .setAuthor("Onyxia")
                .setURL(`${args[1]}`)
                .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2020/10/WoW-Classic-Onyxias-Lair-Guide.jpg')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'azuregos') {
            embedLogs
                .setAuthor("Azuregos")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'kazzak') {
            embedLogs
                .setAuthor("Kazzak")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'bwl') {
            embedLogs
                .setAuthor("Blackwing Lair")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'ysondre') {
            embedLogs
                .setAuthor("Ysondre")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'lethon') {
            embedLogs
                .setAuthor("Lethon")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'taerar') {
            embedLogs
                .setAuthor("Taerar")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'emeriss') {
            embedLogs
                .setAuthor("Emeriss")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'aq40') {
            embedLogs
                .setAuthor("Temple of Ahn'Qiraji")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'naxx') {
            embedLogs
                .setAuthor("Naxxramas")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'zg') {
            embedLogs
                .setAuthor("Zul Gurub")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        if (args[0] == 'aq20') {
            embedLogs
                .setAuthor("Ruines of Ahn'Qiraji")
                .setURL(`${args[1]}`)
                .setThumbnail('')
                .setDescription(`${nickname} uploaded the logs for the raid.`)
                .setColor('#004A94')
                .setTimestamp()
        }
        message.channel.send(embedLogs);
    }
}