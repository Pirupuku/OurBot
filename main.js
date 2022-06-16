/*
const mySecret = process.env['TOKEN'];
const mySecret2 = process.env['GUILD_ID_ManyWhelps']
const mySecret3 = process.env['MONGO_URI']
*/
require("dotenv").config();
const fs = require("fs");
//const keepAlive = require("./server");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

const memberCount = require('./memberCount/member-counter.js');

client.once("ready", () => {
  console.log(`OurBot is online!`);

  const CLIENT_ID = client.user.id;

  const rest = new REST({
    version: "9"
  }).setToken(process.env.TOKEN);


  const manyWhelpsServer = client.guilds.cache.get(process.env.GUILD_ID);
  const allMembers = manyWhelpsServer.members.fetch();

  memberCount(client);

  (async () => {

    try {
      if (process.env.ENV === "production") {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: commands
        });
        console.log("Successfully registered commands globally.");
      } else {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
          body: commands
        });
        console.log("Successfully registered commands locally");
      }
    } catch (err) {
      if (err) console.error(err);
    }
  })();
});

client.on("interactionCreate", async interaction => {
  let member = interaction.member;
  let nickname = member ? member.displayName : null;

  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction, nickname, client);
    } catch (err) {
      if (err) console.error(err);

      await interaction.reply({
        content: "An error occurred while executing that command.",
        ephemeral: true,
      });
    }
  } else if (interaction.isSelectMenu()) {

    const bossEmbed = new MessageEmbed();

    if (interaction.customId === 'boss') {
      let raid = "";

      await interaction.values.forEach(async values => {
        raid += `${values} `;
      })
      console.log(raid)
      bossEmbed
          .setName(`**${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor('#004A94')
      if (raid.toLowerCase() === 'lucifron') {
        bossEmbed
          .setThumbnail('https://wow.zamimg.com/uploads/guide/seo/8929.jpg?1568747152')
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds + boss and hard cleave!',
              inline: false,
            }
          )
      } else {
        bossEmbed
          .setThumbnail('https://wow.zamimg.com/uploads/guide/seo/8929.jpg?1568747152')
          .addFields(
            {
              name: 'NaN',
              value: `The strategy for **${raid}** is currently missing.`,
              inline: false,
            }
          )    
      }
      await interaction.reply({ embed: [bossEmbed] })
    }
  }
});

client.on("messageCreate", message => {
  if (message.content.startsWith("$")) {

    if (message.content.substring(1) === "ping") {
      message.reply("pong");
    }
  }
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  const channelControlId = '852649234355585098';
  const channelControl = client.channels.cache.get(channelControlId);

  if (oldMember.guild.id != process.env.GUILD_ID) {
    return;
  } else {
    if (newMember.displayName && oldMember.displayName !== newMember.displayName) {
      if (!oldMember.displayName || oldMember.displayName === undefined) {
        channelControl.send(`**${oldMember.user.tag}: ${oldMember.displayName}** changed his nickname to **${newMember.displayName}**`);
      } else {
        channelControl.send(`**${oldMember.user.tag}: ${oldMember.displayName}** changed his nickname to **${newMember.displayName}**`);
      }
    }
  }
});

client.on("guildMemberAdd", (member) => {
  const channelWelcomeId = '798525055994298370';
  const channelWelcome = client.channels.cache.get(channelWelcomeId);

  channelWelcome.send(`**${member.user.tag}**: **${member.user.username}** has joined this server.`);
});

client.on("guildMemberBan", (member) => {
  const channelGoodbyeId = '817319885444218882';
  const channelGoodbye = client.channels.cache.get(channelGoodbyeId);

  channelGoodbye.send(`**${member.user.tag}**: **${member.user.username}** has left this server (Banned).`);
});

client.on("guildMemberRemove", (member) => {
  const channelGoodbyeId = '817319885444218882';
  const channelGoodbye = client.channels.cache.get(channelGoodbyeId);

  channelGoodbye.send(`**${member.user.tag}**: **${member.user.username}** has left this server (left or kicked).`);
});

//keepAlive();
client.login(process.env.TOKEN);
