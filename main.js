const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ODA2MDgwODg0NDE5NTkyMjEy.YBkPUw.txooYMWcwZgOo3bzuv4dukqntRI';
const prefix = '$';
const fs = require('fs');

const memberCounter = require('./counters/member-counter');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
     const command = require(`./commands/${file}`);

     bot.commands.set(command.name, command);
}

var version = '1.0.0';

bot.on('ready', () => {
     console.log('MemberCounter is currently counting..');
     bot.user.setActivity('commands with $', { type: 'WATCHING'}).catch(console.error);
     memberCounter(bot);
});

bot.on('message', message =>{
     if(!message.content.startsWith(prefix) || message.author.bot) return;
     if (message.content.startsWith(prefix)) message.delete();
        else return;
     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if (command == 'class'){
        console.log(args);
        if (args != null) {
            bot.commands.get('class').execute(message, args);
        } else if (args == null) {
           message.author.send('Please enter the class you are playing with your main! (eg: $class rogue)');
        }
     } else if (command == 'role'){
         if (args != null) {
            bot.commands.get('role').execute(message, args);
         } else if (args == null) {
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
     } else if (command == 'gbl_load') {
        Logs.loadData();
        message.channel.send("Data has been updated");
     } else if (command == 'gb') {
        bot.commands.get('gb').execute(message, args);
     }
});

bot.login(token);
