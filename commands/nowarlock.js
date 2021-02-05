module.exports = {
    name: 'nowarlock',
    description: "remove discord role of WARLOCK",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798497338561789993')){
            message.author.send('You are not a WARLOCK!');
        } else {
            message.member.roles.remove('798497338561789993').catch(console.error);
            message.author.send('You are not a WARLOCK anymore!');
        }
    }
}
