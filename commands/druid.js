module.exports = {
    name: 'druid',
    description: "give discord role of DRUID",
    execute(message, args){

        if (message.member.roles.cache.has('798497796541513759')){
            message.author.send('You already are a DRUID!')
        } else {
            message.author.send('You are a DRUID now!');
            message.member.roles.add('798497796541513759').catch(console.error);
        }  
    }
}