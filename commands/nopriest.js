module.exports = {
    name: 'nopriest',
    description: "remove discord role of PRIEST",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798497653058830339')){
            message.author.send('You are not a PRIEST!');
        } else {
            message.member.roles.remove('798497653058830339').catch(console.error);
            message.author.send('You are not a PRIEST anymore!');
        }
    }
}
