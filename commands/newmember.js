const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'newmember',
    description: "embed for new members",
    execute(Discord, message, args){
        const embedTrialGuest = new Discord.MessageEmbed()
            .setColor('#004A94')
            .addFields (
                {
                    name: 'Do you want to join the guild and get **trial** status OR were you invited as a friend/for a PuG?',
                    value: '```Please write either $trial OR $guest```',
                    inline: false
                },
            );
        const embedClassRole = new Discord.MessageEmbed()
            .setDescription('To get the status of a **member** later on, doing as written below is a necessary step.')
            .setColor('#004A94')
            .addField (
                    'Class of the main character',
                    '```Please write $class {yourclass} so you get the role of your class.\n\nEg: $class druid -> you get the discord role of a druid```',
                    false
            )
            .addField (
                    'Role of the main character',
                    '```Please write $role {yourrole} so that the bot gives you the specific role, which you want to have in raids.\n\nEg: $role healer -> you get the discord role of a healer```',
                    false
            )
        message.channel.send( embedTrialGuest );
        message.channel.send( embedClassRole );
    }
}