module.exports = {
    name: 'newmember',
    description: "embed for new members",
    execute(Discord, bot, message, args){
        const embedNewmember = new Discord.MessageEmbed()
            .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
            .setDescription('Hey there! If you are here to join the guild as Trial or you came as a friend who wants to chat or as a PuG for a raid, you are in the right place.')
            .setColor('#004A94')
            .addFields (
                {
                    name: '**1.** Change your *Nickname* to your ingame name.',
                    value: 'Right-click on your profile and chose Change Nickname (it applies only to this server)',
                    inline: false
                },
                {
                    name: '**2.** Let us know: Trial to join the guild OR Guest either friend or PuG?',
                    value: '```Please write either $trial OR $guest```',
                    inline: false
                },
                {
                    name: '**3.** If you have chosen TRIAL -> write the Class of your main character',
                    value: '```Please write $class {yourclass} so you get the role of your class.\n\nEg: $class druid -> you get the discord role of a druid```',
                    inline: false
                },
                {
                    name: '**4.** Role of your main character in raids',
                    value: '```Please write $role {yourrole} so that the bot gives you the specific role, which you want to have in raids.\nRoles can be: tank, healer or dps\n\nEg: $role healer -> you get the discord role of a healer```',
                    inline: false
                },
            );
        bot.channels.cache.get('808820077561774100').send(embedNewmember);
    }
}