module.exports = {
    name: 'paladin',
    description: "give discord role of PALADIN",
    execute(message, args){
        
        if (message.member.roles.cache.has('799233980570402816')){
            message.author.send('You already are a PALADIN!');
        } else {
            message.member.roles.add('799233980570402816').catch(console.error);
            message.author.send('You are a PALADIN now!');
        }
    }
}
