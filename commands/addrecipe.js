async function addrecipe(MongoClient, mongoPath, message, nickname, someText) {
    const client = await MongoClient.connect(mongoPath, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(err => {console.log('LoadData failed to connect');});
        if (!client)
          return;
    try {
        var db = client.db('recipes');
        var col = await db.collection(someText).find({crafter: message.author.id}).toArray().catch(err => {console.log('LoadData failed to connect');});
        
       if (col.length != 0) {
           return;
       }
       await db.collection(someText).insertOne({crafter: message.author.id})

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

module.exports = {
    name: 'addrecipe',
    description: "adds a recipe!",
    execute(MongoClient, mongoPath, message, nickname, args) {   
        var someText = arrayToString(args);
        someText = someText.toLowerCase();
        addrecipe(MongoClient, mongoPath, message, nickname, someText)
    }
}