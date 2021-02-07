const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ODA2MDgwODg0NDE5NTkyMjEy.YBkPUw.txooYMWcwZgOo3bzuv4dukqntRI';
const prefix = '$';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const manyWhelps = require('./counters/member-counter');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
     const command = require(`./commands/${file}`);

     bot.commands.set(command.name, command);
}

var version = '1.0.0';

bot.on('ready', () => {
     console.log('Many Whelps hands out 50 DKP minus');
     bot.user.setActivity('commands with $', { type: 'WATCHING'}).catch(console.error);
     manyWhelps(bot);
});

bot.on('message', message =>{
   if(!message.content.startsWith(prefix) || message.author.bot) return;
   if (message.content.startsWith(prefix)) message.delete();
      else return;
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

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
   } else if(command === 'ping'){
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
      bot.commands.get('clear').run(client, message, args);
   }
});



bot.login(token);