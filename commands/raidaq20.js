module.exports = {
    name: 'raidaq20',
    description: "start raiding AQ20",
    execute(bot, message, args, CronJob) {
        
        var aq20StartDate = new Date();

        let startAQ20 = new CronJob(`00 00 20 * * ${aq20StartDate.getDay()}`, () => {
            aq20StartDate.setDate(aq20StartDate.getDate() + 3); 
            var aq20Date = new Date();
            aq20Date.setDate(aq20Date.getDate() + 3);
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: ONYXIA][description: killing shit and getting lootz!!!][channel:sign-ups][date:${aq20Date.getDate()}-${aq20Date.getMonth()+1}-${aq20Date.getFullYear()}][time:20:00][template:2][image: https://i.ibb.co/3yf7qjJ/aq20.jpg] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });
        if (args[0] == 'start') {
            startAQ20.start();
        } else if (args[0] == 'stop') {
            startAQ20.stop();
        }

        message.channel.send("You will receive a message to quickly create your **Ahn'Qiraj 20** in the channel #corruption.");
    }
}