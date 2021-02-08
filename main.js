const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const token = 'ODA2MDgwODg0NDE5NTkyMjEy.YBkPUw.txooYMWcwZgOo3bzuv4dukqntRI';
const prefix = '$';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const manyWhelps = require('./counters/member-counter');

const druid = guildMember.guild.roles.cache.has('798497796541513759');
const hunter = guildMember.guild.roles.cache.has('798497755952578560');
const warrior = guildMember.guild.roles.cache.has('784698785586348032');
const warlock = guildMember.guild.roles.cache.has('798497338561789993');
const paladin = guildMember.guild.roles.cache.has('799233980570402816');
const priest = guildMember.guild.roles.cache.has('798497653058830339');
const rogue = guildMember.guild.roles.cache.has('798497604035805184');
const mage = guildMember.guild.roles.cache.has('798497704976056350');
const tank = guildMember.guild.roles.cache.has('798507023020589066');
const healer = guildMember.guild.roles.cache.has('798507050752933909');
const dps = guildMember.guild.roles.cache.has('798507075353182218');

const druidEmoji = '808303286339764225';
const hunterEmoji = '808303320854560768';
const warriorEmoji = '808303170472247306';
const warlockEmoji = '808303398834405406';
const paladinEmoji = '808303306521968661';
const priestEmoji = '808303419546402836';
const rogueEmoji = '808303296535724072';
const mageEmoji = '808303367880966166';
const tankEmoji = '808303426676457492';
const healerEmoji = '808303449581158451';
const dpsEmoji = '808303435408605184';

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

bot.on('guildMemberAdd', async guildMember => {
   let welcomeRole = guildMember.guild.roles.cache.has('798498129661263882');
   //works
   let dmEmbed = new Discord.MessageEmbed()
      .setcolor('#004A94')
      .setTitle('Choose the class of your main!')
      .setDescription('Choosing your class is a must to get "Member" status later.\n\n'
         + `${druidEmoji} for druid\n`
         + `${hunterEmoji} for hunter\n`
         + `${warriorEmoji} for warrior\n`
         + `${warlockEmoji} for warlock\n`
         + `${paladinEmoji} for paladin\n`
         + `${priestEmoji} for priest\n`
         + `${rogueEmoji} for rogue\n`
         + `${mageEmoji} for mage\n`);

   let messageEmbed = await guildMember.send(dmEmbed);
   messageEmbed.react(druidEmoji);
   messageEmbed.react(hunterEmoji);
   messageEmbed.react(warriorEmoji);
   messageEmbed.react(warlockEmoji);
   messageEmbed.react(paladinEmoji);
   messageEmbed.react(priestEmoji);
   messageEmbed.react(rogueEmoji);
   messageEmbed.react(mageEmoji);
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
      bot.commands.get('clear').execute(bot, message, args);
   } else if (command == 'test') {
      let trialID = '798498129661263882';
      let officerID = '798497871376547881';
      let trialCount = message.guild.roles.cache.get(trialID).members.size;
      let officerCount = message.guild.roles.cache.get(officerID).members.size;
      console.log(trialCount);
      console.log(officerCount);
   }
});

bot.login(token);