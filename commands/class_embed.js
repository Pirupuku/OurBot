const { ClassEmoji } = require('../ids');

module.exports = {
    name: 'class_embed',
    description: 'makes a class embed',
    execute(Discord, message) {
        var ClassEmbed = new Discord.MessageEmbed()
            .setTitle("Choose your class")
            .setDescription('Click on the symbol, so we know which class you MAIN is! You can chose just ONE class, even if you click more symbols you just get the class of the latest icon you clicked.')
            .setColor('#004A94')
        message.channel.send({embed: ClassEmbed})
        .then(embedMessage => {
            for (key in ClassEmoji)
                embedMessage.react(`<:${key}:${ClassEmoji[key]}>`);
        });
        message.delete();
    }
}