async function searchrecipe(Discord, MongoClient, mongoPath, message, nickname, args, bot) {
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
        var items = someText;
        var col;
        var crafterExists;
        var recipeExists = false;
        var embedRecipe = new Discord.MessageEmbed()
            .setColor('#004A94')
            .setDescription(`Hey ${nickname}, those are all the recipes and crafters I found for your search "**${items}**".`);
        for (var i = 0; i < wowRecipe.length; i++) {
            if (IsSubstr(items, wowRecipe[i].name)) {
                crafterExists = false;
                col = await db.collection(wowRecipe[i].name).find({}).toArray();
                for (var j = 0; j < col.length; j++) {
                    if (bot.guilds.cache.get(message.guild.id).members.cache.find(user => user.id === col[j].crafter)) {
                        crafterExists = true;
                        recipeExists = true;
                        var crafter = bot.guilds.cache.get(message.guild.id).member(col[j].crafter);
                        crafterArray = crafter.displayName + ", " + crafterArray;
                    }
                }
                if (crafterExists) {
                    embedRecipe
                        .addField(`${titleCase(wowRecipe[i].name)}`, `${crafterArray.slice(0, -2)}`, false);
                }
            }
            crafterArray = [];
        }
        if (!recipeExists) {
            embedRecipe
                .setDescription(`Hey ${nickname}, this recipe is not available.`)
        }
        message.author.send(embedRecipe);
        embedRecipe = '';
        
    } catch(er) {
       console.log(er);
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
