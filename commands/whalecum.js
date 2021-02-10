const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'whalecum',
    description: "a lot of whalecum!",
    execute(message, args){
        const attachment = new MessageAttachment ('https://www.google.com/search?q=whalecum&rlz=1C1CHBF_deDE893DE893&sxsrf=ALeKk00cwJCUcmWZ5wgNk5J2aNgpQlePPw:1612388237867&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiWuKGh1s7uAhWNqaQKHQD6B88Q_AUoAXoECBkQAw&biw=1920&bih=937#imgrc=J8GEqPyy2mGEuM');
        message.channel.send(attachment);
    }
}