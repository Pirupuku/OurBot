module.exports = {
    name: 'paladin',
    description: "give discord role of PALADIN",
    execute(message, args){
        message.author.send('You are a PALADIN now!');
        message.member.roles.add('799233980570402816').catch(console.error);
    }
}