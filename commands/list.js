const { ClassID, RaidID, GuildID } = require ('../ids');

function getRolesAsString(roleNames) {
    var temp = roleNames[0];
    for (var i = 1; i < roleNames.length; i++)
        temp = temp + ', ' + roleNames[i];
    return temp;
}

function getEmptyField(nickname, role) {
    return {
        name: `Hey ${nickname}, I couldn't find any **${role}s**`,
        value: `0`,
        inline: false
    };
}

function getRoleField(nickname, role, roleNames) {
    return {
        name: `Hey ${nickname}, those are all the **${role}s (${roleNames.length})** I found.`,
        value: `${getRolesAsString(roleNames)}`,
        inline: false
    };
}

function getGenericField(role, roleNames) {
    return {
        name: `${role}s (${roleNames.length}):`,
        value: `${getRolesAsString(roleNames)}`,
        inline: false
    };
}

module.exports = {
    name: 'list',
    description: "list all the members of a ceratin roll",
    execute(Discord, message, args, nickname) {
        const guild = message.guild;
        const arg = args[0];
        var roleNames;
        var embed = new Discord.MessageEmbed()
            .setAuthor('[A][LC][EU] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
            .setColor('#004A94');
        if (arg == 'all') {
            embed.setDescription(`Hey ${nickname}, here is a list of every class from the guild.`);
            for (var key in ClassID) {
                var roleNames = guild.roles.cache.get(ClassID[key]).members.map(m=>m.displayName);
                embed.addFields(getGenericField(key, roleNames));
            }
            message.author.send(embed);
            return;
        }
        if (arg in ClassID) 
            roleNames = guild.roles.cache.get(ClassID[args]).members.map(m=>m.displayName);
        else if (arg in RaidID)
            roleNames = guild.roles.cache.get(RaidID[args]).members.map(m=>m.displayName);  
        else if (arg in GuildID)
            roleNames = guild.roles.cache.get(GuildID[args]).members.map(m=>m.displayName);
        else {
            message.author.send('No such role exists');
            return;
        }
        if (roleNames.length == 0)
            embed.addFields(getEmptyField(nickname, arg));
        else {
            embed.addFields(getRoleField(nickname, arg, roleNames));
            message.author.send(embed);
        }
    }
}