module.exports = {
    name: 'newmember',
    description: "embed for new members",
    execute(Discord, bot, message, args){
        const embedNewmember = new Discord.MessageEmbed()
            .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
            //.setDescription("Hey there! If you are here to join the guild as a TRIAL than DM one of the officers @Ajso , @Divi or @Dieken.\nIf you are here as a PuG for a raid, to participate in PVP/Premades or as friend, than type $guest into the chat.")
            .setColor('#004A94')
            .setDescription('Currently under construction')
        bot.channels.cache.get('808820077561774100').send(embedNewmember);
    }
}