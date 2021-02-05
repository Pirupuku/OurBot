module.exports = {
    name: 'hunter',
    description: "give discord role of HUNTER",
    execute(message, args){
        
        if (message.member.roles.cache.has('798497755952578560')){
            message.author.send('You already are a HUNTER!');
        } else {
            message.member.roles.add('798497755952578560').catch(console.error);
            message.author.send('You are a HUNTER now!');
        }
    }
}
