module.exports = {
    name: 'clear',
    description: "clear discord messages",
    execute(message, args){
            
            (async () => {
                let deleted;
                do {
                deleted = await message.channel.bulkDelete(args[0]);
                } while (deleted.size != 0);
            })();
    }
}