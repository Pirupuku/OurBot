module.exports = {
    name: 'norogue',
    description: "remove discord role of ROGUE",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798497604035805184')){
            message.author.send('You are not a ROGUE!');
        } else {
            message.member.roles.delete('798497604035805184').catch(console.error);
            message.author.send('You are not a ROGUE anymore!');
        }
    }
}
