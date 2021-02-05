module.exports = {
    name: 'nowarrior',
    description: "remove discord role of WARRIOR",
    execute(message, args){
        
        if (!message.member.roles.cache.has('784698785586348032')){
            message.author.send('You are not a WARRIOR!');
        } else {
            message.member.roles.delete('784698785586348032').catch(console.error);
            message.author.send('You are not a WARRIOR anymore!');
        }
    }
}
