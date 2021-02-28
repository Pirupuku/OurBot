module.exports = {
    name: 'image',
    description: "sends random image from google search",
    execute(talkedRecently, message, args, some_var, request, cheerio, nickname){

        if (talkedRecently.has(message.author.id)) {
            message.reply("Wait 5 minute before typing this command again.");
        } else {

            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + `${some_var}`,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
                };
            
                request(options, function(error, response, responseBody) {
                if (error) {
                    return;
                }
            
                $ = cheerio.load(responseBody);
            
                var links = $(".image a.link");
            
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
            
                if (!urls.length) {
                    return;
                }
        
                message.channel.send(`I found this image for you, ${nickname}.\n` + urls[Math.floor(Math.random() * urls.length)] + " " + message.guild.members.cache.random());
                });

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5 * 60 * 1000);
    }     

        
    }
}