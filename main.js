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

const druidID = '798497796541513759';
const hunterID = '798497755952578560';
const warriorID = '784698785586348032';
const warlockID = '798497338561789993';
const paladinID = '799233980570402816';
const priestID = '798497653058830339';
const rogueID = '798497604035805184';
const mageID = '798497704976056350';
const tankID = '798507023020589066';
const healerID = '798507050752933909';
const dpsID = '798507075353182218';

const druidEmoji = '808301207206494228';
const hunterEmoji = '808302350162591784';
const warriorEmoji = '808301549712572426';
const warlockEmoji = '808301265388830730';
const paladinEmoji = '808301574761742346';
const priestEmoji = '808301254677495848';
const rogueEmoji = '808302389223489557';
const mageEmoji = '808301245877059604';
const tankEmoji = '808302563530768394';
const healerEmoji = '808302584103305236';
const dpsEmoji = '808302546677923860';

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
     const command = require(`./commands/${file}`);

     bot.commands.set(command.name, command);
}

var version = '1.0.0';

bot.on('ready', () => {
     console.log('Many Whelps hands out 50 DKP minus');
     bot.user.setActivity('$help', { type: 'WATCHING'}).catch(console.error);
     memberCount(bot);
      
});

bot.on('guildMemberRemove', (member) => {
   bot.channels.cache.get('817319885444218882').send(`**${member.displayName}** has left the server...`);
})

bot.on('guildBanRemove', (member) => {
   bot.channels.cache.get('817319885444218882').send(`**${member.displayName}** has left the server...`);
})

bot.on('message', message => {
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
   let guild = bot.guilds.cache.get('773542499049668608');
   let member = guild.member(message.author);
   let nickname = member ? member.displayName : null;
   
   if (message.channel.id === '808820077561774100') {
      if (!message.content.startsWith(prefix) && !message.author.bot) {
         message.delete({ timeout: 10000 });
      }
      if (!message.member.roles.cache.get('808291239924465694')) {
         if (command == 'trial') {
            bot.commands.get('trial').execute(message, args);
         }
      }
      if (!message.member.roles.cache.get('798498129661263882')) {
         if (command == 'guest') {
            bot.commands.get('guest').execute(message, args);
         }
      }
      if (message.member.roles.cache.get('798498129661263882')) {
         if (command == 'class'){
            if (args[0] !== undefined) {
               bot.commands.get('class').execute(message, args);
            } else if (args[0] === undefined) {
               message.author.send('Please enter the class you are playing with your main! (eg: $class rogue)');
            }
         } else if (command == 'role'){
            if (args[0] !== undefined) {
               bot.commands.get('role').execute(Discord, message, args);
            } else if (args[0] === undefined) {
               message.author.send('Please enter the role you are playing with your main! (eg: $role healer)');
            }
         }
      }
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
      } else if (command == 'class') {
         if (args[0] !== undefined) {
            bot.commands.get('class').execute(message, args);
         } else if (args[0] === undefined) {
            message.author.send('Please enter the class you are playing with your main! (eg: $class rogue)');
         }
      } else if (command == 'role') {
         if (args[0] !== undefined) {
            bot.commands.get('role').execute(Discord, message, args);
         } else if (args[0] === undefined) {
            message.author.send('Please enter the role you are playing with your main! (eg: $role healer)');
         }
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
      } else if (message.member.roles.cache.get('798497898434134066') || message.member.roles.cache.get('798497871376547881') || message.member.roles.cache.get('800024729997148161')) {
         if (command == 'newmember') {
            bot.commands.get('newmember').execute(Discord, bot, message, args);
         } 
      } else {
         message.author.send("That command doesn't exist. Please type $help in any of <Many Whelps>' channel to see a list of all my commands.")
      }
   } else {
      message.author.send('You don not have the permission to use commands!');
   }
});

bot.login(token);
