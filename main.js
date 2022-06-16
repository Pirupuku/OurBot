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
        raid = `${values}`;
      })
      
      bossEmbed
          .setAuthor({name: `${raid}`})
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor('#004A94')
      if (raid.toLowerCase() === 'lucifron') {
        bossEmbed
          .setThumbnail('https://wow.zamimg.com/uploads/guide/seo/8929.jpg?1568747152')
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds + boss and cleave hard!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'magmadar') {
        bossEmbed
          .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2021/11/Magmadar-WoW-Classic-Season-of-Mastery-Strategy-Guide.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'Do not stand in the fire!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'gehennas') {
        bossEmbed
          .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0FQ7fOJY9xNZ-fh3Za9A8hLoi0du-7mp_w&usqp=CAU')
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds + boss and cleave hard!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'garr') {
        bossEmbed
          .setThumbnail('https://static.wikia.nocookie.net/wowwiki/images/8/8b/Garr.jpg/revision/latest/scale-to-width-down/480?cb=20050829014520')
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds, kill boss fast, kill adds!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'baron geddon') {
        bossEmbed
          .setThumbnail('https://wow.zamimg.com/uploads/screenshots/normal/762804-baron-geddon.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'Position him out of Line-Of-Sight of healers!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'shazzrah') {
        bossEmbed
          .setThumbnail('https://wow.zamimg.com/uploads/screenshots/normal/86833-shazzrah.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'All in, nuke boss, pray to the healers (as melee)!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'golemagg the incinerator') {
        bossEmbed
          .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2021/11/Golemagg-WoW-Classic-Season-of-Mastery-Strategy-Guide-1024x506.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'One tank get both doggos, other tank on boss -> nuke!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'sulfuron harbringer') {
        bossEmbed
          .setThumbnail('https://www.warcrafttavern.com/wp-content/uploads/2021/11/Sulfuron-Harbringer-WoW-Classic-Season-of-Mastery-Strategy-Guide.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds, interrupt and kill -> nuke boss!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'majordomo executus') {
        bossEmbed
          .setThumbnail('https://www.wow-freakz.com/img/screenshots/wowhead_332853.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'Kill two elites, kite the other two elites, sheep all healers!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === 'ragnaros') {
        bossEmbed
          .setThumbnail('https://wow.zamimg.com/uploads/screenshots/normal/1061-ragnaros-ragnaros-after-killing-us.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'Kill it before first submerge!',
              inline: false,
            }
          )
      } else if (raid.toLowerCase() === `c'thun`) {
        bossEmbed
          .setThumbnail('https://2img.net/u/2512/28/98/52/album/pr/310_800x600.jpg')
          .addFields(
            {
              name: 'Positioning',
              value: 'Kill it before first submerge!',
              inline: false,
            }
          )
      } else {
        bossEmbed
          .addFields(
            {
              name: 'NaN',
              value: `The strategy for **${raid}** is currently missing.`,
              inline: false,
            }
          )    
      }

      await interaction.reply({ embeds: [bossEmbed],
        files: [{
        attachment: 'https://cdn.discordapp.com/attachments/800716895417532526/984182070588895272/CthunClowns.mp4'
        }],
        files: [{
          attachment: 'https://cdn.discordapp.com/attachments/808984734939742228/985634623415529572/unknown.png'
        }],
        files: [{
          attachment: 'https://cdn.discordapp.com/attachments/800716895417532526/985353334758178856/Dark_Glare.png'
        }]
      })
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
