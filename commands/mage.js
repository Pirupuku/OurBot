module.exports = {
    name: 'mage',
    description: "give discord role of MAGE",
    execute(message, args){
        message.author.send('You are a MAGE now!');
        message.member.roles.add('798497704976056350').catch(console.error);
    }
}