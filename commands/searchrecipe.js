
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("searchrecipe")
    .setDescription("Searchs for a recipe!")
    .addStringOption((option) =>
      option
        .setName("recipe")
        .setDescription("The item you are looking for.")
        .setRequired(true)
    ),
  async execute(interaction, nickname, client) {

    var someText = interaction.options.getString('recipe');
    someText = someText.toLowerCase();

    const clientdb = MongoClient.connect(process.env.MONGO_URI, function(err, db) {
      if (err) throw err;
      var dbo = db.db('recipes');

      var wowRecipe = getRecipes(dbo, nickname, someText, client, interaction)

    })

    if (!clientdb) return;
  }
}

async function getRecipes(dbo, nickname, someText, client, interaction) {
  var recipeArray = await dbo.listCollections().toArray()
    .catch(err => {
      console.error(err);
    });

  var crafterArray = [];

  var colArray;
  var crafterExists;
  var recipeExists = false;

  var embedRecipe = new MessageEmbed()
    .setColor('#004A94')
    .setDescription(`Hey ${nickname}, those are all the recipes and crafters I found for your search "**${someText}**".`)

  for (var i = 0; i < recipeArray.length; i++) {

    if (IsSubstr(someText, recipeArray[i].name)) {
      crafterExists = false;
      var colArray = await dbo.collection(recipeArray[i].name).find({}).toArray();
      for (var j = 0; j < colArray.length; j++) {
        if (client.guilds.cache.get(interaction.guildId).members.cache.find(user => user.id === colArray[j].crafter)) {
          crafterExists = true;
          recipeExists = true;
          var crafter = client.guilds.cache.get(interaction.guildId).members.cache.find(user => user.id === colArray[j].crafter);
          crafterArray = crafter.displayName + ", " + crafterArray;
        }
      }
      if (crafterExists) {
        embedRecipe
          .addField(`${titleCase(recipeArray[i].name)}`, `${crafterArray.slice(0, -2)}`, false);
      }
    }
    crafterArray = [];
  }
  if (!recipeExists) {
    embedRecipe
      .setDescription(`Hey ${nickname}, this recipe is not available.`)
    await interaction.reply({
      embeds: [embedRecipe],
      ephemeral: true,
    });
    embedRecipe = '';
  } else {
    await interaction.reply({
      embeds: [embedRecipe],
      ephemeral: true,
    });
  }
  embedRecipe = '';
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

function arrayToString(array) {
  var some_string = '';
  if (array != null && array.length != 0) {
    for (var i = 0; i < array.length; i++) {
      some_string += array[i];
      if (i < array.length - 1)
        some_string += ' ';
    }
  }
  return some_string;
}

function IsSubstr(s1, s2) { // checks if s1 is a substr of s2
  let m = s1.length;
  let n = s2.length;
  for (var i = 0; i <= n - m; i++) {
    for (var j = 0; j < m; j++) {
      if (s2[i + j] != s1[j])
        break;
    }
    if (j == m)
      return true;
  }
  return false;
}
