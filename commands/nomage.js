module.exports = {
    name: 'nomage',
    description: "remove discord role of MAGE",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798497704976056350')){
            message.author.send('You are not a MAGE!');
        } else {
            message.member.roles.remove('798497704976056350').catch(console.error);
            message.author.send('You are not a MAGE anymore!');
        }
    }
}
