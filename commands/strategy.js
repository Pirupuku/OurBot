const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("strategy")
    .setDescription("Strategy for bosses!")
    .addStringOption((option) => 
      option 
        .setName(`raid`)
        .setDescription(`Which raid you want the strategy for?`)
        .setRequired(true)
        .addChoices(
          { name: "Molten Core", value: "Molten Core" },
          { name: "Blackwing Lair", value: "Blackwing Lair" },
          { name: "Temple of Ahn'Qiraj", value: `Temple of Ahn'Qiraj` },
          { name: "Naxxramas", value: "Naxxramas" },
        )
    ),
  async execute(interaction, nickname, client) {
    const row = new MessageActionRow()
    const selectedRaid = interaction.options.getString('raid')
    console.log(selectedRaid)
    if (selectedRaid === 'Molten Core') {
      row
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('boss')
          .setPlaceholder('Nothing is selected.')
          .setMinValues(1)
          .setMaxValues(10)
          .addOptions([
            {
              label: `Lucifron`,
              description: `Strategies for **Lucifron**.`,
              value: `lucifron`
            },
            {
              label: `Magmadar`,
              description: `Strategies for **Magmadar**.`,
              value: `magmadar`
            },
            {
              label: `Gehennas`,
              description: `Strategies for **Gehennas**.`,
              value: `gehennas`
            },
            {
              label: `Garr`,
              description: `Strategies for **Garr**.`,
              value: `garr`
            },
            {
              label: `Geddon`,
              description: `Strategies for **Baron Geddon**.`,
              value: `geddon`
            },
            {
              label: `Shazzrah`,
              description: `Strategies for **Shazzrah**.`,
              value: `shazzrah`
            },
            {
              label: `Sulfuron`,
              description: `Strategies for **Sulfuron Harbinger**.`,
              value: `sulfuron`
            },
            {
              label: `Golemagg`,
              description: `Strategies for **Golemagg the Incinerator**.`,
              value: `golemagg`
            },
            {
              label: `Majordomo`,
              description: `Strategies for **Majordomo Executus**.`,
              value: `majordomo`
            },
            {
              label: `Ragnaros`,
              description: `Strategies for **Ragnaros**.`,
              value: `ragnaros`
            },
          ])
      )
    } else if (selectedRaid === 'Blackwing Lair') {
      row
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('boss')
          .setPlaceholder('Nothing is selected.')
          .setMinValues(1)
          .setMaxValues(8)
          .addOptions([
            {
              label: `Razorgore`,
              description: `Strategies for **Razorgore the Untamed**.`,
              value: `razorgore`
            },
            {
              label: `Vaelastrasz`,
              description: `Strategies for **Vaelastrasz the Corrupt**.`,
              value: `vael`
            },
            {
              label: `Broodlord`,
              description: `Strategies for **Broodlord Lashlayer**.`,
              value: `broodlord`
            },
            {
              label: `Firemaw`,
              description: `Strategies for **Firemaw**.`,
              value: `firemaw`
            },
            {
              label: `Ebonroc`,
              description: `Strategies for **Ebonroc**.`,
              value: `ebonroc`
            },
            {
              label: `Flamegor`,
              description: `Strategies for **Flamegor**.`,
              value: `flamegor`
            },
            {
              label: `Chromaggus`,
              description: `Strategies for **Chromaggus**.`,
              value: `chromaggus`
            },
            {
              label: `Nefarian`,
              description: `Strategies for **Nefarian**.`,
              value: `nef`
            },
          ])
      )
    } else if (selectedRaid === `Temple of Ahn'Qiraj`) {
      row
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('boss')
          .setPlaceholder('Nothing is selected.')
          .setMinValues(1)
          .setMaxValues(9)
          .addOptions([
            {
              label: `Skeram`,
              description: `Strategies for **The Prophet Skeram**.`,
              value: `skeram`
            },
            {
              label: `Bug Trio`,
              description: `Strategies for **Bug Trio**.`,
              value: `bugTrio`
            },
            {
              label: `Satura`,
              description: `Strategies for **Battleguard Satura**.`,
              value: `satura`
            },
            {
              label: `Fankriss`,
              description: `Strategies for **Fankriss the Unyielding**.`,
              value: `fankriss`
            },
            {
              label: `Viscidus`,
              description: `Strategies for **Viscidus**.`,
              value: `viscidus`
            },
            {
              label: `Huhuran`,
              description: `Strategies for **Princess Huhuran**.`,
              value: `huhuran`
            },
            {
              label: `Twin Emperors`,
              description: `Strategies for **Twin Emperors**.`,
              value: `twinEmps`
            },
            {
              label: `Ouro`,
              description: `Strategies for **Ouro**.`,
              value: `ouro`
            },
            {
              label: `C'Thun`,
              description: `Strategies for **C'Thun**.`,
              value: `cThun`
            },
          ])
      )
    } else if (selectedRaid === 'Naxxramas') {
      row
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('boss')
          .setPlaceholder('Nothing is selected.')
          .setMinValues(1)
          .setMaxValues(15)
          .addOptions([
            {
              label: `Anub'Rekhan`,
              description: `Strategies for **Anub'Rekhan**.`,
              value: `anub`
            },
            {
              label: `Faerlina`,
              description: `Strategies for **Grand Widow Faerlina**.`,
              value: `faerlina`
            },
            {
              label: `Maexxna`,
              description: `Strategies for **Maexxna**.`,
              value: `maexxna`
            },
            {
              label: `Noth`,
              description: `Strategies for **Noth the Plaguebringer**.`,
              value: `noth`
            },
            {
              label: `Heigan`,
              description: `Strategies for **Heigan the Unclean**.`,
              value: `heigan`
            },
            {
              label: `Loatheb`,
              description: `Strategies for **Loatheb**.`,
              value: `loatheb`
            },
            {
              label: `Razuvious`,
              description: `Strategies for **Instructor Razuvious**.`,
              value: `razuvious`
            },
            {
              label: `Gothik`,
              description: `Strategies for **Gothik the Harvester**.`,
              value: `gothik`
            },
            {
              label: `Four Horsemen`,
              description: `Strategies for **The Four Horsemen**.`,
              value: `4hm`
            },
            {
              label: `Patchwerk`,
              description: `Strategies for **Patchwerk**.`,
              value: `patchwerk`
            },
            {
              label: `Grobbulus`,
              description: `Strategies for **Grobbulus**.`,
              value: `grob`
            },
            {
              label: `Gluth`,
              description: `Strategies for **Gluth**.`,
              value: `gluth`
            },
            {
              label: `Thaddius`,
              description: `Strategies for **Thaddius**.`,
              value: `thaddius`
            },
            {
              label: `Sapphiron`,
              description: `Strategies for **Sapphiron**.`,
              value: `sapphiron`
            },
            {
              label: `Kel'Thuzad`,
              description: `Strategies for **Kel'Thuzad**.`,
              value: `kt`
            },
          ])
      )
    }
      
    await interaction.reply({ content: `The strategy for which boss of **${selectedRaid}** you want to see?`, components: [row]})

      /*
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
      .setAuthor({name: '<Many Whelps>'})
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
  */
  }
  
}