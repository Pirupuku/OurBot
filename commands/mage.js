module.exports = {
    name: 'mage',
    description: "give discord role of MAGE",
    execute(message, args){
        
        if (message.member.roles.cache.has('798497704976056350')){
            message.author.send('You already are a MAGE!');
        } else {
            message.member.roles.add('798497704976056350').catch(console.error);
            message.author.send('You are a MAGE now!');
        }
    }
}
