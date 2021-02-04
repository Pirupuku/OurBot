module.exports = {
    name: 'healer',
    description: "give discord role of HEALER",
    execute(message, args){
        
        if (message.member.roles.cache.has('798507050752933909')){
            message.author.send('You already are a HEALER!')
        } else {
            message.author.send('You are a HEALER now!');
            message.member.roles.add('798507050752933909').catch(console.error);
        }  
    }
}