module.exports = {
    name: 'nopaladin',
    description: "remove discord role of PALADIN",
    execute(message, args){
        
        if (!message.member.roles.cache.has('799233980570402816')){
            message.author.send('You are not a PALADIN!');
        } else {
            message.member.roles.remove('799233980570402816').catch(console.error);
            message.author.send('You are not a PALADIN anymore!');
        }
    }
}
