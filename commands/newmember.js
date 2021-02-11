module.exports = {
    name: 'newmember',
    description: "embed for new members",
    execute(Discord, message, args){
        const embedNewmember = new Discord.MessageEmbed()
            .setAuthor('ManyWhelps', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
            .setDescription('To get the status of a **member** later on, doing as written below is a necessary step.')
            .setColor('#004A94')
            .addFields (
                {
                    name: '**1.** Do you want to join the guild and get **trial** status OR were you invited as a friend/for a PuG?',
                    value: '```Please write either $trial OR $guest```',
                    inline: false
                },
                {
                    name: '**2.** If you choosed TRIAL -> write the Class of your main character',
                    value: '```Please write $class {yourclass} so you get the role of your class.\n\nEg: $class druid -> you get the discord role of a druid```',
                    inline: false
                },
                {
                    name: '**3.** Role of your main character in raids',
                    value: '```Please write $role {yourrole} so that the bot gives you the specific role, which you want to have in raids.\n\nEg: $role healer -> you get the discord role of a healer```',
                    inline: false
                },
            );
        message.channel.send( embedNewmember );
    }
}