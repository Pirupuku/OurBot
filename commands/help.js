module.exports = {
    name: 'help',
    description: "shows all available commands for members",
    execute(Discord, message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('How to use the Guild Bot aka ManyWhelps')
            .setColor('#004A94')
            .addFields (
                {
                    name: '$help',
                    value: 'Prints this message.',
                    inline: false
                },
                {
                    name: '$fokya, $image {what to search for}, $thistime, $where',
                    value: 'Try them out to see what the bot can do!\nFor the image command you write e.g. `$image many whelps` to print random images for the topic you want.',
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