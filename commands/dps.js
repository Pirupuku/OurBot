module.exports = {
    name: 'dps',
    description: "give discord role of DPS",
    execute(message, args){
        message.author.send('You are a DPS now!');
        message.member.roles.add('798507075353182218').catch(console.error);
    }
}