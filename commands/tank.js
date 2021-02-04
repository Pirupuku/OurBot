module.exports = {
    name: 'tank',
    description: "give discord role of TANK",
    execute(message, args){
        message.author.send('You are a TANK now!');
        message.member.roles.add('798507023020589066').catch(console.error);
    }
}