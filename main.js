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
     } else if (command == 'gbl_load') {
        Logs.loadData();
        message.channel.send("Data has been updated");
    }
    else if (command == 'gbl_pb') {
        Logs.printBags(message);
    }
    else if (command == 'gbl_pm') {
        Logs.printMail(message);
    }
});

class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

class Logs {
    static loadData() { // read GuildBankLogger.lua, update bags.json and mail.json
        var date_ob = new Date();
        var time = ('0' + date_ob.getDate()).slice(-2) + ('0' + (date_ob.getMonth() + 1)).slice(-2) + date_ob.getFullYear();
        var data = fs.readFileSync('GuildBankLogger.lua', 'UTF-8');
        var lines = data.split(/\r?\n/);
        lines = lines.slice(1).slice(0, -1);
        
        //Update bags.json
        var bag = [];
        var bagData = lines[0].slice(8).slice(0, -2);
        bagData = bagData.split('*');
        for (var i = 0; i < bagData.length; i++) {
            bagData[i] = bagData[i].split('~');
            var new_item = true;
            for (var j = 0; j < bag.length; j++) {
                if (bagData[i][1] == bag[j].name) {
                    new_item = false;
                    bag[j].quantity += parseInt(bagData[i][0]);
                }
            }
            if (new_item == true) {
                bag.push(new Item(bagData[i][1], parseInt(bagData[i][0])));
            }
        }
        fs.writeFileSync('bags.json', JSON.stringify(bag));

        //Update mail.json
        var mail = [];
        var mailData = lines[1].slice(8).slice(0, -2);
        mailData = mailData.split('*');
        for (var i = 0; i < mailData.length; i++) {
            mailData[i] = mailData[i].split('~');
        }
        if (fs.existsSync('mail.json')) {
            mail = JSON.parse(fs.readFileSync('mail.json', 'UTF-8'));
        }
        for (var i = 0; i < mailData.length; i++) {
            var sender = mailData[i][0];
            if (mailData[i][1] > 0) {
                mail.push([time, sender, new Item("Gold", mailData[i][1] / 10000)]);
            }
            if (mailData[i][3] > 0) {
                mail.push([time, sender, new Item(mailData[i][2], mailData[i][3])]);
            }
        }
        fs.writeFileSync('mail.json', JSON.stringify(mail))
    }
    static printBags(message) {
        var bank = JSON.parse(fs.readFileSync('bags.json', 'UTF-8'));
        var content = 'Guild Bank';
        for (var i = 0; i < bank.length; i++) {
            content = content + '\n' + bank[i].quantity + "x " + bank[i].name;
            if (content.length >= 1900) {
                message.channel.send(content);
                content = "";
            }
        }
        message.channel.send(content);    
    }
    static printMail(message) {
        var mail = JSON.parse(fs.readFileSync('mail.json', 'UTF-8'));
        var content = ''
        for (var i = 0; i < mail.length; i++) {
            var timestamp = mail[i][0].slice(0, 2) + '/' + mail[i][0].slice(2, 4) + '/' + mail[i][0].slice(4, 8);
            content = content + '\n' + timestamp + "  " + mail[i][1] + ' sent ' + mail[i][2].quantity + 'x ' + mail[i][2].name;
            if (content.length >= 1900) {
                message.channel.send(content);
                content = "";
            }
        }
        message.channel.send(content);
    }
}

bot.login(token);
