module.exports = {
    name: 'healer',
    description: "give discord role of HEALER",
    execute(message, args){
        message.author.send('You are a HEALER now!');
        message.member.roles.add('798507050752933909').catch(console.error);
    }
}