const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const mongoPath = 'mongodb+srv://professions:m4n1wh3lpsprofession@professions.r1p0r.mongodb.net'

const token = 'ODA2MDgwODg0NDE5NTkyMjEy.YBkPUw.txooYMWcwZgOo3bzuv4dukqntRI';
const prefix = '$';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const memberCount = require('./counters/member-counter');

const talkedRecently = new Set();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
     const command = require(`./commands/${file}`);

     bot.commands.set(command.name, command);
}

var version = '1.0.0';
var ManyWhelps;
var FirstStep;
const { RoleID, ClassID } = require('./ids');

bot.on('ready', () => {
   ManyWhelps = bot.guilds.cache.get('773542499049668608');
   FirstStep = ManyWhelps.channels.cache.get('808820077561774100'); // #first-step
   FirstStep.messages.fetch({});
   console.log('Many Whelps hands out 50 DKP minus');
   bot.user.setActivity('$help', { type: 'WATCHING'}).catch(console.error);
   memberCount(bot);
});

bot.on('guildMemberRemove', (member) => {
   bot.channels.cache.get('817319885444218882').send(`**${member.user.tag}: ${member.displayName}** has left the server...`);
})

bot.on('guildBanRemove', (member) => {
   bot.channels.cache.get('817319885444218882').send(`**${member.user.tag}: ${member.user.tag}** **(${member.displayName})** has left the server...`);
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
   if(newMember.nickname && oldMember.nickname !== newMember.nickname) {
      if (!oldMember.nickname || oldMember.nickname === undefined) {
         bot.channels.cache.get('852649234355585098').send(`**${oldMember.user.tag}: ${oldMember.user.username}** changed his nickname to **${newMember.nickname}**`);
      } else {
         bot.channels.cache.get('852649234355585098').send(`**${oldMember.user.tag}: ${oldMember.nickname}** changed his nickname to **${newMember.nickname}**`);
      }
   }
});

bot.on('message', message => {
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
   let guild = bot.guilds.cache.get('773542499049668608');
   let member = guild.member(message.author);
   let nickname = member ? member.displayName : null;
   
   
   if (message.channel.id === '808820077561774100') {
      bot.channels.cache.get('852649234355585098').send(`**${nickname} (${message.author.tag}):** ${message}`);
      if (!message.content.startsWith(prefix) && !message.author.bot) {
         message.delete()
         message.author.send('If something is not working or you got a question -> pls DM Dieken');
      }
      if (IsOfficer(message)) {
         if (command == 'class_embed') {
            bot.commands.get('class_embed').execute(Discord, message);
         } else if (command == 'role_embed') {
            bot.commands.get('role_embed').execute(Discord, message);
         }
      }
      if (message.content.startsWith(prefix)) {
         if (!message.member.roles.cache.get('798498129661263882')) {
            if (command == 'guest') {
               bot.commands.get('guest').execute(message, args);
            }
         }
         message.delete()
         if (message.member.roles.cache.get('798497898434134066') || message.member.roles.cache.get('798497871376547881') || message.member.roles.cache.get('800024729997148161')) {
            if (command == 'newmember') {
               bot.commands.get('newmember').execute(Discord, bot, message, args);
            }
         }
      }
      return;
   }
   
   if (!message.content.startsWith(prefix) || message.author.bot) return;
   
   
   if (message.member.hasPermission('CHANGE_NICKNAME')) {
      if (message.content.startsWith(prefix)) {
         message.delete();
      } else {
         return;
      }
      if (command === 'ping') {
         bot.commands.get('ping').execute(bot, message, args, nickname);
      } else if (command == 'fsigned') {
         bot.commands.get('fsigned').execute(message, args);
      } else if (command == 'addrecipe') {
         bot.commands.get('addrecipe').execute(MongoClient, mongoPath, message, nickname, args);
      } else if (command == 'searchrecipe') {
         bot.commands.get('searchrecipe').execute(Discord, MongoClient, mongoPath, message, nickname, args, bot);
      } else if (command == 'fokya'){
         bot.commands.get('fokya').execute(bot, message, args, nickname);
      } else if (command == 'thistime'){
         bot.commands.get('thistime').execute(bot, message, args, nickname);
      } else if (command == 'where'){
         bot.commands.get('where').execute(bot, message, args, nickname);
      } else if (command == 'whalecum'){
         bot.commands.get('whalecum').execute(bot, message, args, nickname);
      } else if (command == 'image') {
         var some_var = '';
         for (var i = 0; i < args.length; i++) {
            some_var += args[i];
            if (i < args.length - 1)
               some_var += ' ';
         }
         bot.commands.get('image').execute(talkedRecently, message, args, some_var, request, cheerio, nickname);
      } else if (command == 'clear') {
         bot.commands.get('clear').execute(bot, message, args, nickname);
      } else if (command == 'help') {
         bot.commands.get('help').execute(Discord, message, args);
      } else if (command == 'list') {
         bot.commands.get('list').execute(Discord, message, args, nickname);
      } else if (command == 'logs') {
            bot.commands.get('logs').execute(Discord, bot, message, args, nickname);
      } else {
         message.author.send("That command doesn't exist. Please type $help in any of <Many Whelps>' channel to see a list of all my commands.")
      }
   } else {
      message.author.send('You don not have the permission to use commands!');
   }
});

bot.on('messageReactionAdd', async (reaction, user) => {
   if (user.bot) return;
   var message = reaction.message;
   var emoji = reaction.emoji.name;
   var receivedEmbed = message.embeds[0];
   if (message.channel == FirstStep) {
       var GuildMember = ManyWhelps.members.cache.get(user.id);
       var arg = emoji.slice(3);
       if (receivedEmbed.title == 'Choose your class') {
           if (!arg in ClassID || GuildMember.roles.cache.has(ClassID[arg])) return;
           for (key in ClassID)
               if (GuildMember.roles.cache.has(ClassID[key]))
                   GuildMember.roles.remove(ClassID[key]).catch({});
           GuildMember.roles.add(ClassID[arg]).catch({});
       }
       else if (receivedEmbed.title == 'Choose your role') {
           if (!arg in RoleID || GuildMember.roles.cache.has(RoleID[arg])) return;
           for (key in RoleID)
               if (GuildMember.roles.cache.has(RoleID[key]))
                   GuildMember.roles.remove(RoleID[key]).catch({});
           GuildMember.roles.add(RoleID[arg]).catch({});
       }
       if (GuildMember.roles.cache.length == 0)
         GuildMember.roles.add('798498129661263882').catch({});
       const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
       try {
           for (const reaction of userReactions.values()) {
               await reaction.users.remove(user.id);
           }
       } catch (error) {
           console.error('Failed to remove reactions.');
       }
   }
});

function IsOfficer(message) {
   return message.author.id == '267331618413346817' || // Ajso
      message.author.id == '425955263355551746' || // Dieken
      message.author.id == '290907809552400385'; // Divi
}

bot.login(token);
