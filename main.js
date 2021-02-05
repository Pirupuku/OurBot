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
     bot.user.setActivity('the slaves', { type: 'WATCHING'}).catch(console.error);
     memberCounter(bot);
});

bot.on('message', message =>{
     if(!message.content.startsWith(prefix) || message.author.bot) return;
     if (message.content.startsWith(prefix)) message.delete();
        else return;
     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if (command == 'class') {
        if (args[0] != '') {
            bot.commands.get('class').execute(message, args);
        }
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
     } else if (command == 'dps'){
        bot.commands.get('dps').execute(message, args);
     } else if (command == 'druid'){
        bot.commands.get('druid').execute(message, args);
     } else if (command == 'healer'){
        bot.commands.get('healer').execute(message, args);
     } else if (command == 'mage'){
        bot.commands.get('mage').execute(message, args);
     } else if (command == 'paladin'){
        bot.commands.get('paladin').execute(message, args);
     } else if (command == 'priest'){
        bot.commands.get('priest').execute(message, args);
     } else if (command == 'rogue'){
        bot.commands.get('rogue').execute(message, args);
     } else if (command == 'shaman'){
        bot.commands.get('shaman').execute(message, args);
     } else if (command == 'tank'){
        bot.commands.get('tank').execute(message, args);
     } else if (command == 'warlock'){
        bot.commands.get('warlock').execute(message, args);
     } else if (command == 'warrior'){
        bot.commands.get('warrior').execute(message, args);
     } else if (command == 'hunter'){
        bot.commands.get('hunter').execute(message, args);
     } else if (command == 'nodps'){
        bot.commands.get('nodps').execute(message, args);
     } else if (command == 'nohealer'){
        bot.commands.get('nohealer').execute(message, args);
     } else if (command == 'notank'){
        bot.commands.get('notank').execute(message, args);
     } else if (command == 'nodruid'){
        bot.commands.get('nodruid').execute(message, args);
     } else if (command == 'nohunter'){
        bot.commands.get('nohunter').execute(message, args);
     } else if (command == 'nowarrior'){
        bot.commands.get('nowarrior').execute(message, args);
     } else if (command == 'nowarlock'){
        bot.commands.get('nowarlock').execute(message, args);
     } else if (command == 'norogue'){
        bot.commands.get('norogue').execute(message, args);
     } else if (command == 'nopriest'){
        bot.commands.get('nopriest').execute(message, args);
     } else if (command == 'nomage'){
        bot.commands.get('nomage').execute(message, args);
     } else if (command == 'noshaman'){
        bot.commands.get('noshaman').execute(message, args);
     } else if (command == 'nopaladin'){
        bot.commands.get('nopaladin').execute(message, args);
     } else if (command == 'gbl_load') {
        Logs.loadData();
        message.channel.send("Data has been updated");
    }
});

bot.login(token);
