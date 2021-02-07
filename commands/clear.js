module.exports = {
    name: 'clear',
    description: "clear discord messages",
    execute(message, args){
            
            (async () => {
                let deleted;
                deleted = await message.channel.bulkDelete(args[0]);
            })();
    }
}