module.exports = {
    name: 'priest',
    description: "give discord role of PRIEST",
    execute(message, args){
        message.author.send('You are a PRIEST now!');
        message.member.roles.add('798497653058830339').catch(console.error);
    }
}