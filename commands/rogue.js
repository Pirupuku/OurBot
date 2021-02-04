module.exports = {
    name: 'rogue',
    description: "give discord role of ROGUE",
    execute(message, args){
        message.author.send('You are a ROGUE now!');
        message.member.roles.add('798497604035805184');
    }
}