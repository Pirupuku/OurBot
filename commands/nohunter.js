module.exports = {
    name: 'nohunter',
    description: "remove discord role of HUNTER",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798497755952578560')){
            message.author.send('You are not a HUNTER!');
        } else {
            message.member.roles.remove('798497755952578560').catch(console.error);
            message.author.send('You are not a HUNTER anymore!');
        }
    }
}
