module.exports = {
    name: 'tank',
    description: "give discord role of TANK",
    execute(message, args){
        
        if (message.member.roles.cache.has('798507023020589066')){
            message.author.send('You already are a TANK!');
        } else {
            message.member.roles.add('798507023020589066').catch(console.error);
            message.author.send('You are a TANK now!');
        }
    }
}
