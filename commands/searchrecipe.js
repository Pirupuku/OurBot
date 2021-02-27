async function searchrecipe(Discord, MongoClient, mongoPath, message, nickname, args, bot) {
    var embedRecipe = new Discord.MessageEmbed();
    var someText = arrayToString(args);
    someText = someText.toLowerCase();
    var crafterArray = [];
    
    const client = await MongoClient.connect(mongoPath, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(err => {console.log('LoadData failed to connect');});
        if (!client)
          return;
    try {
        var db = client.db('recipes');
        var wowRecipe = await db.listCollections().toArray()
            .catch(err => {console.log('LoadData failed to connect');});
        var items = arrayToString(args);
        var col;
        var crafterName;
        for (var i = 0; i < wowRecipe.length; i++) {
            
            if (IsSubstr(items, wowRecipe[i].name)) {
                col = await db.collection(wowRecipe[i].name).find({}).toArray();
                for (var j = 0; j < col.length; j++) {
                    crafterName = bot.guilds.cache.get('773542499049668608').member(col[j].crafter).displayName;
                    crafterArray = crafterName + ", " + crafterArray;
                }
                embedRecipe
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .setDescription(`Hey ${nickname}, those are all the recipes and crafters I found for your search "**${items}**".`)
                    .addField(`${titleCase(wowRecipe[i].name)}`, `${crafterArray.slice(0, -1)}`, false)
            } else {
                embedRecipe
                    .setAuthor('[A] <Many Whelps>', 'https://cdn.discordapp.com/attachments/801916760482644008/808741524204290058/many_whelps_final.png')
                    .setColor('#004A94')
                    .setDescription(`Hey ${nickname}, this recipe is not available.`)
            }
            crafterArray = [];
        }
        
        message.author.send(embedRecipe);
        embedRecipe = '';
        
    } catch {
       console.log('error');
    } finally {
       client.close();
    }
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

function arrayToString(array) {
    var some_string = '';
    if (array != null && array.length != 0) {
        for (var i = 0; i < array.length; i++) {
            some_string += array[i];
            if (i < array.length - 1)
                some_string += ' ';
        }
    }
    return some_string;
}

function IsSubstr(s1, s2) { // checks if s1 is a substr of s2
    let m = s1.length;
    let n = s2.length;
    for (var i = 0; i <= n - m; i++) {
        for (var j = 0; j < m; j++) {
            if (s2[i + j] != s1[j])
                break;
        }
        if (j == m)
            return true;
    }
    return false;
}

module.exports = {
    name: 'searchrecipe',
    description: "searchs for a recipe!",
    execute(Discord, MongoClient, mongoPath, message, nickname, args, bot){
        searchrecipe(Discord, MongoClient, mongoPath, message, nickname, args, bot);
    }
}