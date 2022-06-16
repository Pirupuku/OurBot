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

    const bossEmbed = [];

    if (interaction.customId === 'boss') {
      let raid = "";

      await interaction.values.forEach(async values => {
        raid = `${values}`;
      })

      if (raid.toLowerCase() === 'lucifron') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=Y-8CaOSdRzo&list=PLsAypabLoZsn-gAxy0BiOwl_Rv27kun_6&index=2`)
          .setImage(`https://wow.zamimg.com/uploads/guide/seo/8929.jpg?1568747152`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds + boss and cleave hard!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'magmadar') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=ayLkPn-qe7w&list=PLsAypabLoZsn-gAxy0BiOwl_Rv27kun_6&index=3`)
          .setImage(`https://www.warcrafttavern.com/wp-content/uploads/2021/11/Magmadar-WoW-Classic-Season-of-Mastery-Strategy-Guide.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Do not stand in the fire!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'gehennas') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=7Z1HPFARoRI&list=PLsAypabLoZsn-gAxy0BiOwl_Rv27kun_6&index=4`)
          .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0FQ7fOJY9xNZ-fh3Za9A8hLoi0du-7mp_w&usqp=CAU`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds + boss and cleave hard!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'garr') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=dRG8v4qh4nk&list=PLsAypabLoZsn-gAxy0BiOwl_Rv27kun_6&index=5`)
          .setImage(`https://static.wikia.nocookie.net/wowwiki/images/8/8b/Garr.jpg/revision/latest/scale-to-width-down/480?cb=20050829014520`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds, kill boss fast, kill adds!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'baron geddon') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=xHYl8Jp0hqk`)
          .setImage(`https://wow.zamimg.com/uploads/screenshots/normal/762804-baron-geddon.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Position him out of Line-Of-Sight of healers!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'shazzrah') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=5Y7b3Y2KP9M`)
          .setImage(`https://wow.zamimg.com/uploads/screenshots/normal/86833-shazzrah.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'All in, nuke boss, pray to the healers (as melee)!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'golemagg the incinerator') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=ROWDsUan29g`)
          .setImage(`https://www.warcrafttavern.com/wp-content/uploads/2021/11/Golemagg-WoW-Classic-Season-of-Mastery-Strategy-Guide-1024x506.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'One tank get both doggos, other tank on boss -> nuke!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'sulfuron harbringer') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=JoRxL-Qbv_Y`)
          .setImage(`https://www.warcrafttavern.com/wp-content/uploads/2021/11/Sulfuron-Harbringer-WoW-Classic-Season-of-Mastery-Strategy-Guide.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Stack all adds, interrupt and kill -> nuke boss!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'majordomo executus') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=PsTyxYwKlic`)
          .setImage(`https://www.wow-freakz.com/img/screenshots/wowhead_332853.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Kill two elites, kite the other two elites, sheep all healers!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === 'ragnaros') {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=4Wu8KbNOoPg`)
          .setImage(`https://wow.zamimg.com/uploads/screenshots/normal/1061-ragnaros-ragnaros-after-killing-us.jpg`)
          .setTitle(`${raid}`)
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Kill it before first submerge!',
              inline: false,
            }
          )
        ]
      } else if (raid.toLowerCase() === `c'thun`) {
        bossEmbed = [
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=vZcR-OcrJGg`)
          .setImage(``)
          .setTitle(`${raid}`)
          .setThumbnail('https://2img.net/u/2512/28/98/52/album/pr/310_800x600.jpg')
          .setDescription(`<Many Whelps> strategy for ${raid}`)
          .setColor(`#004A94`)
          .addFields(
            {
              name: 'Positioning',
              value: 'Killing is better than dying!',
              inline: false,
            }
          ),
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=vZcR-OcrJGg`)
          .setImage(`https://cdn.discordapp.com/attachments/800716895417532526/985353334414274570/CThun_Run_In.png`),
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=vZcR-OcrJGg`)
          .setImage(`https://cdn.discordapp.com/attachments/808984734939742228/985634623415529572/unknown.png`),
          new MessageEmbed()
          .setURL(`https://www.youtube.com/watch?v=vZcR-OcrJGg`)
          .setImage(`https://cdn.discordapp.com/attachments/800716895417532526/985353334758178856/Dark_Glare.png`),
        ]
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

      await interaction.reply({ bossEmbed })
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
