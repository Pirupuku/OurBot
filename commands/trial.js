module.exports = {
    name: 'trial',
    description: "give discord role of a trial",
    execute(message, args) {
        message.member.roles.add('798498129661263882').catch(console.error);
        message.author.send('You got trial status!');
    }
}