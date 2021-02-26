async function searchrecipe(MongoClient, mongoPath, message, nickname, args, bot) {
    var someText = arrayToString(args);
    someText = someText.toLowerCase();
    const client = await MongoClient.connect(mongoPath, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(err => {console.log('LoadData failed to connect');});
        if (!client)
          return;
    try {
        var db = client.db('recipes');
        var wowRecipe = await db.listCollections().toArray()
            .catch(err => {console.log('LoadData failed to connect');});
        var items = arrayToString(args);

        for (var i = 0; i < wowRecipe.length; i++) {
            
            if (IsSubstr(items, wowRecipe[i].name)) {
                var col = await db.collection(wowRecipe[i].name).find({}).toArray()
                for (var j = 0; j < col.length; j++) {
                    var crafterName = bot.guilds.cache.get('773542499049668608').member(col[j].crafter).displayName;
                    console.log(crafterName);
                }
            }
        }

    } catch {
       console.log('error');
    } finally {
       client.close();
    }
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
    execute(MongoClient, mongoPath, message, nickname, args, bot){
        searchrecipe(MongoClient, mongoPath, message, nickname, args, bot);
    }
}