const { RoleEmoji } = require('../ids');

module.exports = {
    name: 'role_embed',
    description: 'makes a role embed',
    execute(Discord, message) {
        var RoleEmbed = new Discord.MessageEmbed()
            .setTitle("Choose your role");
        message.channel.send({embed: RoleEmbed})
        .then(embedMessage => {
            for (key in RoleEmoji)
                embedMessage.react(`<:${key}:${RoleEmoji[key]}>`);
        });
        message.delete();
    }
}