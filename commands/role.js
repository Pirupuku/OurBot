module.exports = {
    name: 'role',
    description: "give discord role of a role of WoW",
    execute(message, args){
        
        const roleTank = '798507023020589066';
        const roleHealer = '798507050752933909';
        const roleDps = '798507075353182218';

        if (args[0] == 'tank'){
            if (message.member.roles.cache.has(roleTank)){
                message.author.send('You already are a TANK!');
            } else {
                message.member.roles.add(roleTank).catch(console.error);
                message.member.roles.remove(roleHealer).catch(console.error);
                message.member.roles.remove(roleDps).catch(console.error);
                message.author.send('You are a TANK now!');
            }
        } else if (args[0] == 'notank'){
            if (!message.member.roles.cache.has(roleTank)){
                message.author.send('You are not a TANK!');
            } else {
                message.member.roles.remove(roleTank).catch(console.error);
                message.author.send('You are not a TANK anymore!');
            }
        } else if (args[0] == 'healer'){
            if (message.member.roles.cache.has(roleHealer)){
                message.author.send('You already are a HEALER!');
            } else {
                message.member.roles.add(roleHealer).catch(console.error);
                message.member.roles.remove(roletank).catch(console.error);
                message.member.roles.remove(roleDps).catch(console.error);
                message.author.send('You are a HEALER now!');
            }
        } else if (args[0] == 'nohealer'){
            if (!message.member.roles.cache.has(roleHealer)){
                message.author.send('You are not a HEALER!');
            } else {
                message.member.roles.remove(roleHealer).catch(console.error);
                message.author.send('You are not a HEALER anymore!');
            }
        } else if (args[0] == 'dps'){
            if (message.member.roles.cache.has(roleDps)){
                message.author.send('You already are a DPS!');
            } else {
                message.member.roles.add(roleDps).catch(console.error);
                message.member.roles.remove(roleHealer).catch(console.error);
                message.member.roles.remove(roletank).catch(console.error);
                message.author.send('You are a DPS now!');
            }
        } else if (args[0] == 'nodps'){
            if (!message.member.roles.cache.has(roleDps)){
                message.author.send('You are not a DPS!');
            } else {
                message.member.roles.remove(roleDps).catch(console.error);  
                message.author.send('You are not a DPS anymore!');
            }
        }
    }
}