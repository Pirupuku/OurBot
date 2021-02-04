module.exports = {
    name: 'priest',
    description: "give discord role of PRIEST",
    execute(message, args){
        
        if (message.member.roles.cache.has('798497653058830339')){
            message.author.send('You already are a PRIEST!')
        } else {
            message.author.send('You are a PRIEST now!');
            message.member.roles.add('798497653058830339').catch(console.error);
        }
    }
}