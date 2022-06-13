const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("logs")
    .setDescription("Logs of a raid")
    .addStringOption((option) =>
      option
        .setName("raid")
        .setDescription("Name of the Raid")
        .setRequired(true)
        .addChoices(
          { name: "mc", value: "Molten Core" },
          { name: "ony", value: "Onyxia" },
          { name: "azu", value: "Azuregos" },
          { name: "kazzak", value: "Kazzak" },
          { name: "bwl", value: "Blackwing Lair" },
          { name: "emeriss", value: "Emeriss" },
          { name: "taerar", value: "Taerar" },
          { name: "ysondre", value: "Ysondre" },
          { name: "lethon", value: "Lethon" },
          { name: "zg", value: "Zul Gurub" },
          { name: "aq20", value: "Ruins of Ahn Qiraj" },
          { name: "aq40", value: "Temple of Ahn Qiraj" },
          { name: "naxx", value: "Naxxramas" },
        )
    )
    .addStringOption((option) =>
      option
        .setName("url")
        .setDescription("URL from legacyplayers.com")
        .setRequired(true)
    ),

  async execute(interaction, nickname, client) {
    const chosenStringRaid = interaction.options.getString("raid");
    const chosenStringUrl = interaction.options.getString("url");

    // channel #logs
    // '809669171734380544'
    const channelControlId = '809669171734380544';
    const channelControl = client.channels.cache.get(channelControlId);

    var thumbnail;

    if (chosenStringRaid === 'Molten Core') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177512411758592/molten_core.png';
    } else if (chosenStringRaid === 'Onyxia') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177512096792586/Onyxia.png';
    } else if (chosenStringRaid === 'Azuregos') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177511853916250/azuregos.png';
    } else if (chosenStringRaid === 'Kazzak') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177510376996884/lord_Kazzak.png';
    } else if (chosenStringRaid === 'Blackwing Lair') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177490617499689/Blackwing_lair.png';
    } else if (chosenStringRaid === 'Ysondre') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177491158827058/ysondre.png';
    } else if (chosenStringRaid === 'Lethon') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177433520832552/lethon.png';
    } else if (chosenStringRaid === 'Taerar') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177438075322378/taerar.png';
    } else if (chosenStringRaid === 'Emeriss') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177441670365184/emeriss.png';
    } else if (chosenStringRaid === 'Temple of Ahn Qiraj') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177304926879754/ahnquiraj.png';
    } else if (chosenStringRaid === 'Naxxramas') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177522373230602/naxxramas.png';
    } else if (chosenStringRaid === 'Zul Gurub') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177524587036712/zulgurub.png';
    } else if (chosenStringRaid === 'Ruins of Ahn Qiraj') {
      thumbnail = 'https://cdn.discordapp.com/attachments/801916760482644008/810177487417901076/aq20.png';
    }

    const logsEmbed = new MessageEmbed()
      .setAuthor({name: '<OurBot>'})
      .setTitle(`${chosenStringRaid}`)
      .setURL(`${chosenStringUrl}`)
      .setThumbnail(thumbnail)
      .setDescription(`${nickname} uploaded the logs for the raid.`)
      .setColor('#004A94')
      .setTimestamp()

    if (chosenStringUrl.includes('legacyplayers.com')) {
      await interaction.reply({
        content: `Thanks ${nickname} for uploading the logs!`,
        ephemeral: true,
      })
  
      channelControl.send({ embeds: [logsEmbed] });
    } else {
      await interaction.reply({
        content: `That's not a correct URL!`,
        ephemeral: true,
      })
    }
  }
}