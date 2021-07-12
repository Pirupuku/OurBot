module.exports = {
    name: 'fsigned',
    description: 'formats the list of signed players for in-game invites',
    execute(message, args) {
        var list = ArrayString(args);
        list = list.slice(0, -1);
        list = list.split(',');
        var temp = '/invite ';
        for (var i = 0 ; i < list.length ; i++) {
            temp = temp + '\"' + list[i] + '\",';
        }
        message.channel.send(temp.slice(0, -1));
    }
}

function ArrayString(array) {
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