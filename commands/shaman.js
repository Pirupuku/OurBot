module.exports = {
    name: 'shaman',
    description: "give discord role of SHAMAN",
    execute(message, args){
        
        if (message.member.roles.cache.has('798497547642863626')){
            message.author.send('You already are a SHAMAN!');
        } else {
            message.member.roles.add('798497547642863626').catch(console.error);
            message.author.send('You are a SHAMAN now!');
        }
    }
}
