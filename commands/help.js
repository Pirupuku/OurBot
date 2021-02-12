module.exports = {
    name: 'help',
    description: "shows all available commands for members",
    execute(Discord, message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('How to use the Guild Bot aka ManyWhelps')
            .setColor('#004A94')
            .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
            .addFields (
                {
                    name: '$help',
                    value: 'Prints this message.',
                    inline: false
                },
                {
                    name: '$fokya, $image {what to search for}, $thistime, $where, $whalecum',
                    value: 'Try them out to see what the bot can do!\nFor the image command you write e.g. `$image many whelps` to print random images for the topic you want.',
                    inline: false
                },
                {
                    name: '$list {class or role}',
                    value: 'Sends you a DM with all the names of the class or role!\nClass: Druid, Hunter, Mage, Paladin, Priest, Rogue, Warlock, Warrior\nRole: Tank, Healer, DPS\n`e.g. $list mage -> all mages`\n`e.g. $list tank -> all tanks`',
                    inline: false
                },
                {
                    name: '$logs {raid} {URL}',
                    value: 'Sends and embed with the name of the raid and the combat logs in the channel.\n`e.g. $list mc https://mc_combatlogs.org`',
                    inline: false
                },
                {
                    name: 'Suggestions!!!',
                    value: 'Let the officer know (best you write into #suggestions) if there is anything good we should implement to the bot.',
                    inline: false
                },
            );
        message.channel.send( embed );
    }
}