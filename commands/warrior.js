module.exports = {
    name: 'warrior',
    description: "give discord role of WARRIOR",
    execute(message, args){
        
        if (message.member.roles.cache.has('784698785586348032')){
            message.author.send('You already are a WARRIOR!')
        } else {
            message.author.send('You are a WARRIOR now!');
            message.member.roles.add('784698785586348032').catch(console.error);
        }
    }
}