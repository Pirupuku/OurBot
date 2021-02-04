module.exports = {
    name: 'warrior',
    description: "give discord role of WARRIOR",
    execute(message, args){
        message.author.send('You are a WARRIOR now!');
        message.member.roles.add('784698785586348032').catch(console.error);
    }
}