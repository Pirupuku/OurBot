const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
  async execute(interaction, nickname, client) {
    interaction.reply({
      content: "Pong!"
    });
  }
}