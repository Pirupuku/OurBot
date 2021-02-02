const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODA2MDgwODg0NDE5NTkyMjEy.YBkPUw.txooYMWcwZgOo3bzuv4dukqntRI';

const prefix = '$';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
     const command = require(`./commands/${file}`);

     bot.commands.set(command.name, command);
}

var version = '1.0.0';

bot.once('ready', () => {
     console.log('MemberCounter is currently counting..');
     bot.user.setActivity('the slaves', { type: 'WATCHING'}).catch(console.error);
});

bot.on('message', message =>{
     if(!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if(command === 'ping'){
          bot.commands.get('ping').execute(message, args);
     } else if (command == 'fokya'){
          bot.commands.get('fokya').execute(message, args);
     }
           //    'whalecum'
            //const attachment = new Discord.Attachment('https://i.redd.it/u1uz1jkyshjy.jpg');
            //message.channel.send(message.author, attachment);

   
});

bot.login(token);