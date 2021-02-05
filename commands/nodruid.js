module.exports = {
    name: 'nodruid',
    description: "remove discord role of DRUID",
    execute(message, args){

        if (message.member.roles.cache.has('798497796541513759')){
            message.author.send('You are not a DRUID!');
        } else {
            message.member.roles.delete('798497796541513759').catch(console.error);
            message.author.send('You are not a DRUID anymore!');
        }  
    }
}
