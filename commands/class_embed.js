const { ClassEmoji } = require('../ids');

module.exports = {
    name: 'class_embed',
    description: 'makes a class embed',
    execute(Discord, message) {
        var ClassEmbed = new Discord.MessageEmbed()
            .setTitle("Choose your class");
        message.channel.send({embed: ClassEmbed})
        .then(embedMessage => {
            for (key in ClassEmoji)
                embedMessage.react(`<:${key}:${ClassEmoji[key]}>`);
        });
        message.delete();
    }
}