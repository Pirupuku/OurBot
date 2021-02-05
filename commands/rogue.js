module.exports = {
    name: 'rogue',
    description: "give discord role of ROGUE",
    execute(message, args){
        
        if (message.member.roles.cache.has('798497604035805184')){
            message.author.send('You already are a ROGUE!');
        } else {
            message.member.roles.add('798497604035805184').catch(console.error);
            message.author.send('You are a ROGUE now!');
        }
    }
}
