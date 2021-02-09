module.exports = {
  name: 'reactionrole',
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
  
    const channel = '808584658765348865';
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
    
    const druidRole = message.guild.roles.cache.has(druidID);
    const hunterRole = message.guild.roles.cache.has(hunterID);
    const warriorRole = message.guild.roles.cache.has(warriorID);
    const warlockRole = message.guild.roles.cache.has(warlockID);
    const paladinRole = message.guild.roles.cache.has(paladinID);
    const priestRole = message.guild.roles.cache.has(priestID);
    const rogueRole = message.guild.roles.cache.has(rogueID);
    const mageEole = message.guild.roles.cache.has(mageID);
    const tankRole = message.guild.roles.cache.has(tankID);
    const healerRole = message.guild.roles.cache.has(healerID);
    const dpsRole = message.guild.roles.cache.has(dpsID);
    
    let embed = new Discord.MessageEmbed()
      .setColor('#004A94')
      .setTitle('Chose the class of your main character.')
      .setDescription("Choosing your class is a must to get **Member** status later.\n<:druid:808301207206494228> for druid\n<:hunter:808302350162591784> for hunter\n<:warrior:808301549712572426> for warrior\n<:warlock:808301265388830730> for warlock\n<:paladin:808301574761742346> for paladin\n<:priest:808301254677495848> for priest\n<:rogue:808302389223489557> for rogue\n<:mage:808301245877059604> for mage")
    
    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(druidEmoji);
    messageEmbed.react(hunterEmoji);
    messageEmbed.react(warriorEmoji);
    messageEmbed.react(warlockEmoji);
    messageEmbed.react(paladinEmoji);
    messageEmbed.react(priestEmoji);
    messageEmbed.react(rogueEmoji);
    messageEmbed.react(mageEmoji);
    
    bot.on('messageReactionAdd', async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;
      
      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === druidEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(druidID);
        }
        if (reaction.emoji.name === hunterEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(hunterID);
        }
        if (reaction.emoji.name === warriorEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(warriorID);
        }
        if (reaction.emoji.name === warlockEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(warlockID);
        }
        if (reaction.emoji.name === paladinEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(paladinID);
        }
        if (reaction.emoji.name === priestEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(priestID);
        }
        if (reaction.emoji.name === rogueEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(rogueID);
        }
        if (reaction.emoji.name === mageEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(mageID);
        }
      } else {
        return;
      }
    });
  }
}
