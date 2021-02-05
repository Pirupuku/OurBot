module.exports = {
    name: 'nodps',
    description: "remove discord role of DPS",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798507075353182218')){
            message.author.send('You are not a DPS!');
        } else {
            message.member.roles.add('798507075353182218').catch(console.error);  
            message.author.send('You are not a DPS anymore!');
        }  
    }
}
