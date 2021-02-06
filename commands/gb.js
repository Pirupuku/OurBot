module.exports = {
    name: 'gb',
    description: "poor quality",
    execute(message, args){
        
        if (args[0] == 'search'){
            if (args[1] == 'assiss'){
                message.channel.send('This is an item of poor quality. You do not want that!');
            }
        }
    }
}