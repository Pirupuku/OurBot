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

bot.on('ready', () => {
     console.log('MemberCounter is currently counting..');
     bot.user.setActivity('the slaves', { type: 'WATCHING'}).catch(console.error);
});

bot.on('message', message =>{
     if(!message.content.startsWith(prefix) || message.author.bot) return;
     if (message.content.startsWith(prefix)) message.delete();
        else return;
     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

     if(command === 'ping'){
          bot.commands.get('ping').execute(message, args);
     } else if (command == 'fokya'){
          bot.commands.get('fokya').execute(message, args);
     } else if (command == 'thistime'){
         bot.commands.get('thistime').execute(message, args);
     } else if (command == 'where'){
         bot.commands.get('where').execute(message, args);
     } else if (command == 'gbl') {
        var bank = [];
        var text = fs.readFileSync('GuildBankLogger.lua', 'utf-8').slice(9);
        text = text.slice(0, -3);
        text = text.split('*');
        for (i = 0; i < text.length; i++) {
            text[i] = text[i].split('~');
            var new_item = true;
            for (j = 0; j < bank.length; j++) {
                if (text[i][1] == bank[j].name) {
                    new_item = false;
                    bank[j].quantity += parseInt(text[i][0]);
                }
            }
            if (new_item == true) {
                bank.push(new item(text[i][1], parseInt(text[i][0])));
            }
        }
        var content = "Guild Bank";
        for (i = 0; i < bank.length - 1; i++) {
          content = content + '\n' + bank[i].quantity + "x " + bank[i].name;
          if (content.length >= 1900) {
               message.channel.send(content);
               content = "";
          }
        }
        message.channel.send(content);
    }

    //    'whalecum'
            //const attachment = new Discord.Attachment('https://i.redd.it/u1uz1jkyshjy.jpg');
            //message.channel.send(message.author, attachment);
});

class item {
     constructor(name, quantity) {
         this.name = name;
         this.quantity = quantity;
     }
 }

bot.login(token);
