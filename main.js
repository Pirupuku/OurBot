const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
require('dotenv').config();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const mongoPath = 'mongodb+srv://professions:m4n1wh3lpsprofession@professions.r1p0r.mongodb.net'

const prefix = '$';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const memberCount = require('./counters/member-counter');
var CronJob = require('cron').CronJob;

const talkedRecently = new Set();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
     const command = require(`./commands/${file}`);

     bot.commands.set(command.name, command);
}

var version = '1.0.0';
let ManyWhelps;
let FirstStep;
const { RoleID, ClassID } = require('./ids');

bot.on('ready', () => {
   const allGuilds = bot.guilds.cache.map(guild => guild.id);
   ManyWhelps = bot.guilds.cache.get('773542499049668608');
   FirstStep = ManyWhelps.channels.cache.get('808820077561774100'); // #first-step;
   FirstStep.messages.fetch({});
   console.log('Many Whelps hands out 50 DKP minus');
   bot.user.setActivity('$help', { type: 'WATCHING'}).catch(console.error);
   memberCount(bot);
});

bot.on('guildMemberAdd', (member) => {
     member.guild.channels.cache.get('798525055994298370').send(`**${member.user.tag}: ${member.displayName}** hopped on the server...`); 
});

bot.on('guildMemberRemove', (member) => {
   if(member.guild.id != ManyWhelps) {
     return;
   } else {  
     bot.channels.cache.get('817319885444218882').send(`**${member.user.tag}: ${member.displayName}** has left the server...`);
   }
})

bot.on('guildBanRemove', (member) => {
   if(member.guild.id != ManyWhelps) {
     return;
   } else {
     bot.channels.cache.get('817319885444218882').send(`**${member.user.tag}: (${member.displayName})** was banned from the server...`);
   }
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
   if(oldMember.guild.id != ManyWhelps) {
     return;
   } else {
     if(newMember.nickname && oldMember.nickname !== newMember.nickname) {
          if (!oldMember.nickname || oldMember.nickname === undefined) {
               bot.channels.cache.get('852649234355585098').send(`**${oldMember.user.tag}: ${oldMember.user.username}** changed his nickname to **${newMember.nickname}**`);
          } else {
               bot.channels.cache.get('852649234355585098').send(`**${oldMember.user.tag}: ${oldMember.nickname}** changed his nickname to **${newMember.nickname}**`);
          }
     }
   }
});

bot.on('message', message => {
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
   let member = message.member;
   let nickname = member ? member.displayName : null;
   
   if (message.guild == '773542499049668608') { // If Many Whelps
      if (message.channel.id === '808820077561774100' || message.channel.id === '877483537056546826') {
         bot.channels.cache.get('852649234355585098').send(`**${nickname} (${message.author.tag}):** ${message}`);
         if (!message.content.startsWith(prefix) && !message.author.bot) {
            message.delete()
            message.author.send('If something is not working or you got a question -> pls DM Dieken, Ajso or Divi!!!');
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
         if (command == 'ping') {
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
         } else if (command == 'help') {
            bot.commands.get('help').execute(Discord, message, args);
         } else if (command == 'list') {
            bot.commands.get('list').execute(Discord, message, args, nickname);
         } else if (command == 'logs') {
               bot.commands.get('logs').execute(Discord, bot, message, args, nickname);
         }
      } else {
         message.author.send('You don not have the permission to use commands!');
      }
      if (IsOfficer(message)) {
         if (message.content.startsWith(prefix)) {
            message.delete();
         } else {
            return;
         }
         if (command == 'raidmc') {
            bot.commands.get('raidmc').execute(bot, message, args, CronJob);
         } else if (command == 'raidony') {
            bot.commands.get('raidony').execute(bot, message, args, CronJob);
         } else if (command == 'raidbwl') {
            bot.commands.get('raidbwl').execute(bot, message, args, CronJob);
         } else if (command == 'raidzg') {
            bot.commands.get('raidzg').execute(bot, message, args, CronJob);
         } else if (command == 'raidaq20') {
            bot.commands.get('raidaq20').execute(bot, message, args, CronJob);
         } else if (command == 'raidaq40') {
            bot.commands.get('raidaq40').execute(bot, message, args, CronJob);
         } else if (command == 'raidnaxx') {
            bot.commands.get('raidnaxx').execute(bot, message, args, CronJob);
         } else if (command == 'clear') {
            bot.commands.get('clear').execute(bot, message, args, nickname);
         } else if (command == 'testosterone') {
            let testus = new CronJob(`* 1 * * * 0-6`, () => {
               bot.channels.cache.get('773542499049668608').send(`+quickcreate [title: MOLTEN CORE][description: killing shit and getting lootz!!!][channel:sign-ups][date:${mcDate.getDate()}-${mcDate.getMonth()+1}-${mcDate.getFullYear()}][time:20:00][template:2][image: https://i.ibb.co/CBVZw8h/molten-core.jpg] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
           });
   
           if (args[0] == 'start') {
               testus.start();
           } else if (args[0] == 'stop') {
               testus.stop();
           }
           
           bot.channels.cache.get('773542499049668608').send('You will receive a message to quickly create your **Molten Core** in the channel #corruption.');
         }
      }
   } else { // if any other server
      if (command == 'addrecipe') {
         bot.commands.get('addrecipe').execute(MongoClient, mongoPath, message, nickname, args);
      } else if (command == 'searchrecipe') {
         bot.commands.get('searchrecipe').execute(Discord, MongoClient, mongoPath, message, nickname, args, bot);
      }
      if (message.content.startsWith(prefix)) {
         message.delete()
      }
      if (!message.content.startsWith(prefix) || message.author.bot) return;
   }
});

bot.on('messageReactionAdd', async (reaction, user) => {
   if (reaction.message.guild != '773542499049668608' || user.bot) return;
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

bot.login(process.env.TOKEN);