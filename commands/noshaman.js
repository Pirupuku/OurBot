module.exports = {
    name: 'noshaman',
    description: "remove discord role of SHAMAN",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798497547642863626')){
            message.author.send('You are not a SHAMAN!');
        } else {
            message.member.roles.delete('798497547642863626').catch(console.error);
            message.author.send('You are not a SHAMAN anymore!');
        }
    }
}
