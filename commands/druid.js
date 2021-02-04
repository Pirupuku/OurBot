module.exports = {
    name: 'druid',
    description: "give discord role of DRUID",
    execute(message, args){
        message.author.send('You are a DRUID now!');
        message.member.roles.add('798497796541513759');
    }
}