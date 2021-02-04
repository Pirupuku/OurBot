module.exports = {
    name: 'hunter',
    description: "give discord role of HUNTER",
    execute(message, args){
        message.author.send('You are a HUNTER now!');
        message.member.roles.add('798497755952578560').catch(console.error);
    }
}