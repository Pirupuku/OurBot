module.exports = {
    name: 'guest',
    description: "give discord role of a guest",
    execute(message, args) {
        message.member.roles.add('808291239924465694').catch(console.error);
        message.author.send('You are a guest now!');
    }
}