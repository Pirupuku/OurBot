const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cheer")
    .setDescription("Get cheered"),
  async execute(interaction, nickname, client) {
    interaction.reply({
      content: "You won't ever be able to kill C'thun - you little piece of shit!"
    });
  }
}