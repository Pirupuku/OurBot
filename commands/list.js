const { SlashCommandBuilder } = require("@discordjs/builders");
const { ClassID, RoleID, GuildID } = require('../ids');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("list")
    .setDescription("List the members of specific or all discord roles")
    .addStringOption((option) => 
        option
            .setName('role')
            .setDescription('Which class or role are you looking for?')
            .setRequired(true)
            .addChoices(
              { name: "druid", value: "druid" },
              { name: "hunter", value: "hunter" },
              { name: "warlock", value: "warlock" },
              { name: "warrior", value: "warrior" },
              { name: "rogue", value: "rogue" },
              { name: "paladin", value: "paladin" },
              { name: "shaman", value: "shaman" },
              { name: "mage", value: "mage" },
              { name: "priest", value: "priest" },
              { name: "guest", value: "guest" },
              { name: "member", value: "member" },
              { name: "social", value: "social" },
              { name: "classleader", value: "classleader" },
              { name: "raider", value: "raider" },
              { name: "officer", value: "officer" },
              { name: "tank", value: "tank" },
              { name: "healer", value: "healer" },
              { name: "dps", value: "dps" },
            )
    ),

  async execute(interaction, nickname, client) {
    const manyWhelps = client.guilds.cache.get("773542499049668608");
    var args = interaction.options.getString('role');
    var roleNames;
    var listEmbed = new MessageEmbed()
        .setAuthor({name: '<OurBot>'})
        .setColor('#004A94')
    
    if (args === 'all') {
        listEmbed
            .setDescription(`Hey ${nickname}, here is a list of every class from the guild.`);
        for (var key in ClassID) {
            var roleNames = manyWhelps.members.cache.filter(member => member.roles.cache.find(r => r.id === ClassID[key])).map(m => m.displayName);
            listEmbed
                .addFields(getGenericField(key, roleNames));
        }
        await interaction.reply({
            embeds: [listEmbed],
            ephemeral: true,
        });
        return;
    }

    if (args in ClassID) {
      roleNames = manyWhelps.members.cache.filter(member => member.roles.cache.find(r => r.id === ClassID[args])).map(m => m.displayName)
      console.log(roleNames);
    } else if (args in RoleID) {
      roleNames = manyWhelps.members.cache.filter(member => member.roles.cache.find(r => r.id === RoleID[args])).map(m => m.displayName)
    } else if (args in GuildID) {
      roleNames = manyWhelps.members.cache.filter(member => member.roles.cache.find(r => r.id === GuildID[args])).map(m => m.displayName)
    } else {
        await interaction.reply({
            content: 'No such role exists',
            ephemeral: true,
        });
        return;
    }

    if (roleNames.length == 0) {
      listEmbed
        .addFields(getEmptyField(nickname, args));
    } else {
      listEmbed
        .addFields(getRoleField(nickname, args, roleNames));
    }

    await interaction.reply({
      embeds: [listEmbed],
      ephemeral: true,
    });

  }
}

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
