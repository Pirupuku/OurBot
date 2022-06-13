const { SlashCommandBuilder } = require("@discordjs/builders");
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addrecipe")
    .setDescription("Adds a recipe to the database.")
    .addStringOption((option) => 
        option
            .setName('recipe')
            .setDescription('Full name of the recipe.')
            .setRequired(true)
    ),
  async execute(interaction, nickname, client) {
    const recipeToAdd = interaction.options.getString('recipe').toLowerCase()

    MongoClient.connect(process.env.MONGO_URI, function(err, db) {
        if (err) throw err;
        var dbo = db.db('recipes');
        var myobj = { crafter: interaction.user.id };
        var newvalues = { $set: { crafter: interaction.user.id } };
        
        dbo.collection(recipeToAdd).updateOne(myobj, newvalues, {upsert: true, new: true}, function(err, res) {
            if (err) throw err;

            console.log('1 recipe added');
            db.close();
        });

    });
    interaction.reply({
      content: `This recipe was added to the database: ${interaction.options.getString('recipe')}`,
      ephemeral: true,
    });
  }
}
