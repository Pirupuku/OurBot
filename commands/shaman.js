module.exports = {
    name: 'shaman',
    description: "give discord role of SHAMAN",
    execute(message, args){
        message.author.send('You are a SHAMAN now!');
        message.member.roles.add('798497547642863626').catch(console.error);
    }
}