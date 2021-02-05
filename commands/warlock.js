module.exports = {
    name: 'warlock',
    description: "give discord role of WARLOCK",
    execute(message, args){
        
        if (message.member.roles.cache.has('798497338561789993')){
            message.author.send('You already are a WARLOCK!');
        } else {
            message.member.roles.add('798497338561789993').catch(console.error);
            message.author.send('You are a WARLOCK now!');
        }
    }
}
