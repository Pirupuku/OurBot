module.exports = {
    name: 'role',
    description: "give discord role of a role of WoW",
    execute(message, args){
        
        if (args[0] == 'tank'){
            if (message.member.roles.cache.has('798507023020589066')){
                message.author.send('You already are a TANK!');
            } else {
                message.member.roles.add('798507023020589066').catch(console.error);
                message.author.send('You are a TANK now!');
            }
        } else if (args[0] == 'notank'){
            if (!message.member.roles.cache.has('798507023020589066')){
                message.author.send('You are not a TANK!');
            } else {
                message.member.roles.remove('798507023020589066').catch(console.error);
                message.author.send('You are not a TANK anymore!');
            }
        } else if (args[0] == 'healer'){
            if (message.member.roles.cache.has('798507050752933909')){
                message.author.send('You already are a HEALER!');
            } else {
                message.member.roles.add('798507050752933909').catch(console.error);
                message.author.send('You are a HEALER now!');
            }
        } else if (args[0] == 'nohealer'){
            if (!message.member.roles.cache.has('798507050752933909')){
                message.author.send('You are not a HEALER!');
            } else {
                message.member.roles.remove('798507050752933909').catch(console.error);
                message.author.send('You are not a HEALER anymore!');
            }
        } else if (args[0] == 'dps'){
            if (message.member.roles.cache.has('798507075353182218')){
                message.author.send('You already are a DPS!');
            } else {
                message.member.roles.add('798507075353182218').catch(console.error);
                message.author.send('You are a DPS now!');
            }
        } else if (args[0] == 'nodps'){
            if (!message.member.roles.cache.has('798507075353182218')){
                message.author.send('You are not a DPS!');
            } else {
                message.member.roles.remove('798507075353182218').catch(console.error);  
                message.author.send('You are not a DPS anymore!');
            }
        }
    }
}