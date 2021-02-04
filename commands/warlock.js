module.exports = {
    name: 'warlock',
    description: "give discord role of WARLOCK",
    execute(message, args){
        message.author.send('You are a WARLOCK now!');
        message.member.roles.add('798497338561789993');
    }
}