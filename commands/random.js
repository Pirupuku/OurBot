const request = require("request");

module.exports = {
    name: 'random',
    description: "random bullshit",
    execute(message, args){
        image(message);

        function image(message){
            
            var options = {
                url:"http://results.dogpile.com/serp?qc=images&q=" + args[0],
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

                var urls = new Array(linkgs.length).fill(0).map((v, i) => links.eq(i).attr("href"));

                console.log(urls);
                if (!urls.length) {
                    return;
                }
                
                message.channel.send(urls[Math.floor(Math.random() * urls.length)] + " " + message.guild.member.random());
            });
        }
    }
}