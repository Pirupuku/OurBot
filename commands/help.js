const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Prints out the help screen"),

  async execute(interaction, nickname, client) {
    const helpEmbed = new MessageEmbed()
      .setAuthor({ name: '<OurBot>' })
      .setTitle(`Help Screen`)
      //.setThumbnail(thumbnail)
      .setDescription(`It's now possible to use slash commands, hence use **/** to interact with the bot`)
      .setColor('#004A94')
      .addFields(
        {
          name: '/help',
          value: 'Prints this message.',
          inline: false
        },
        {
          name: '/logs raid URL',
          value: 'Sends and embed with the name of the raid and the combat logs in the channel #logs.\nRaid: mc, ony, azuregos, kazzak, bwl, ysondre, lethon, taerar, emeriss, aq40, naxx, zg, aq20\n`e.g. $logs mc https://legacyplayers.org/mc`',
          inline: false
        },
        {
          name: '/list role',
          value: 'Replies with all names of the specific role.',
          inline: false
        },
        {
          name: '/absence start end reason',
          value: 'Start: The date you are leaving.\nEnd: The Date you are coming back.\nReason (optional): Why are you gone.\n**Format is: DD/MM/YYYY**\nEg: /absence 30/12/2022 03/01/2023 party hard',
          inline: false
        },
        {
          name: '/addrecipe recipe',
          value: 'Adds a recipe to the bot. Please put the whole name of the recipe, like: **/addrecipe Enchant Weapon: Crusader** or\n**/addrecipe Pattern: Black Dragonscale Leggings**',
          inline: false
        },
        {
          name: '/searchrecipe recipe',
          value: 'Returns the crafters of the recipe. You can search eg **/searchrecipe gloves** and it returns the crafters for every recipe that includes the name "gloves".',
          inline: false
        },
        {
          name: 'Suggestions!!!',
          value: 'Let the officer know if there is anything good we should implement to the bot.',
          inline: false
        },
        {
          name: 'Something not working!!!',
          value: 'Let me, Dieken, know if something is not working to fix it!',
          inline: false
        },
      )
      .setTimestamp()
    interaction.reply({
      embeds: [helpEmbed],
      ephemeral: true,
    });
  }
}