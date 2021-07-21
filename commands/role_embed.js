const { RoleEmoji } = require('../ids');

module.exports = {
    name: 'role_embed',
    description: 'makes a role embed',
    execute(Discord, message) {
        var RoleEmbed = new Discord.MessageEmbed()
            .setTitle("Choose your role");
            .setDescription('Click on the symbol, so we know which role you want to play in RAIDS! You can chose just ONE role, even if you click more symbols you just get the role of the latest icon you clicked.');
            .setColor('#004A94');
        message.channel.send({embed: RoleEmbed})
        .then(embedMessage => {
            for (key in RoleEmoji)
                embedMessage.react(`<:${key}:${RoleEmoji[key]}>`);
        });
        message.delete();
    }
}