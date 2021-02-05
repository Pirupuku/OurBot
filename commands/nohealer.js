module.exports = {
    name: 'nohealer',
    description: "remove discord role of HEALER",
    execute(message, args){
        
        if (!message.member.roles.cache.has('798507050752933909')){
            message.author.send('You are not a HEALER!');
        } else {
            message.member.roles.remove('798507050752933909').catch(console.error);
            message.author.send('You are not a HEALER anymore!');
        }  
    }
}
