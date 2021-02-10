const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const {Discord, MessageAttachment} = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const token = 'ODA2MDgwODg0NDE5NTkyMjEy.YBkPUw.txooYMWcwZgOo3bzuv4dukqntRI';
const prefix = '$';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const manyWhelps = require('./counters/member-counter');

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
     bot.user.setAvatar('https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png');
     manyWhelps(bot);
});

bot.on('message', message => {
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();
   
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
      if (message.member.roles.cache.get('798497898434134066') || message.member.roles.cache.get('798497871376547881') || message.member.roles.cache.get('800024729997148161')) {
         if (command == 'newmember') {
            bot.commands.get('newmember').execute(Discord, message, args);
         } 
      }
   }
   if (!message.content.startsWith(prefix) || message.author.bot) return;
   if (message.member.roles.cache.get('798498129661263882')) {
      if (command == 'class'){
         if (args[0] !== undefined) {
            bot.commands.get('class').execute(message, args);
         } else if (args[0] === undefined) {
            message.author.send('Please enter the class you are playing with your main! (eg: $class rogue)');
         }
      } else if (command == 'role'){
         if (args[0] !== undefined) {
            bot.commands.get('role').execute(message, args);
         } else if (args[0] === undefined) {
            message.author.send('Please enter the role you are playing with your main! (eg: $role healer)');
         }
      }
   }
   if (message.member.hasPermission('CHANGE_NICKNAME')) {
      if (message.content.startsWith(prefix)) {
         message.delete({ timeout: 10000 });
      } else {
         return;
      }
      if(command === 'ping'){
         bot.commands.get('ping').execute(message, args);
      } else if (command == 'fokya'){
         bot.commands.get('fokya').execute(message, args);
      } else if (command == 'thistime'){
         bot.commands.get('thistime').execute(message, args);
      } else if (command == 'where'){
         bot.commands.get('where').execute(message, args);
      } else if (command == 'whalecum'){
         bot.commands.get('whalecum').execute(message, args);
      } else if (command == 'image') {
         var some_var = '';
         for (var i = 0; i < args.length; i++) {
            some_var += args[i];
            if (i < args.length - 1)
               some_var += ' ';
         }
         bot.commands.get('image').execute(message, args, some_var, request, cheerio);
      } else if (command == 'clear') {
         bot.commands.get('clear').execute(bot, message, args);
      } else if (command == 'help') {
         bot.commands.get('help').execute(Discord, message, args);
      }
   } else {
      message.author.send('You don not have the permission to use commands!');
   }
});

bot.login(token);