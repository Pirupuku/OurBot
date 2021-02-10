module.exports = {
    name: 'image',
    description: "sends random image from google search",
    execute(message, args, some_var, request, cheerio, nickname){
      
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
    
        console.log(urls);
        if (!urls.length) {
            return;
        }
        
        message.channel.send(`I found this image for you, ${nickname}.\n`, urls[Math.floor(Math.random() * urls.length)] + " " + message.guild.members.cache.random());
        });
    }
}