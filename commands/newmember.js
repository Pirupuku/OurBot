module.exports = {
    name: 'newmember',
    description: "embed for new members",
    execute(message, args){
        const embed = {
            "description": "To get the status of a **trial**, doing as written below is a necessary step.",
            "color": 19092,
            "fields": [
                {
                    "name": "Class of the main character",
                    "value": "```Please write $class {yourclass} so you get the role of your class.\n\nEg: $class druid -> you get the discord role of a druid```"
                },
                {
                    "name": "Role of the main character",
                    "value": "```Please write $role {yourrole} so that the bot gives you the specific role, which you want to have in raids.\n\nEg: $role healer -> you get the discord role of a healer```"
                }
            ]
        };
        message.channel.send({ embed });
    }
}