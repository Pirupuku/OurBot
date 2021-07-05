const { ClassID } = require ('../ids');

module.exports = {
    name: 'class',
    description: "give discord role of a class of WoW",
    execute(message, args) {
        var arg = args[0].toLowerCase();
        if (arg in ClassID) {
            if (message.member.roles.cache.has(ClassID[role]))
                message.author.send(`You already are a ${arg.toUpperCase()}!`);
            else {
                for (key in ClassID)
                    message.member.roles.remove(ClassID[key]).catch(console.error);
                message.member.roles.add(ClassID[role]).catch(console.error);
                message.author.send(`You are a ${arg.toUpperCase()} now!`);
            }
        }
        else if (arg.substr(0, 2) == 'no' && arg.slice(2) in ClassID) {
            arg = arg.slice(2);
            if (!message.member.roles.cache.has(ClassID[arg]))
                message.author.send(`You are not a ${arg.toUpperCase()}!`);
            else {
                message.member.roles.remove(ClassID[arg]).catch(console.error);
                message.author.send(`You are not a ${arg.toUpperCase()} anymore!`);
            }
        }
    }  
}