module.exports = {
    name: 'raidzg',
    description: "start raiding MC",
    execute(bot, message, args, CronJob) {

        var zgStartDate = new Date();

        let startZG = new CronJob(`00 05 22 * * ${zgStartDate.getDay()}`, () => {
            zgStartDate.setDate(zgDate.getDate() + 3)
            var zgDate = new Date();
            zgDate.setDate(zgDate.getDate() + 3);
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: ONYXIA][description: killing shit and getting lootz!!!][channel:sign-ups][date:${zgDate.getDate()}-${zgDate.getMonth()+1}-${zgDate.getFullYear()}][time:20:00][template:2][image: https://i.ibb.co/gyW9KsQ/zg.jpg] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });

        if (args[0] == 'start') {
            startZG.start();
        } else if (args[0] == 'stop') {
            startZG.stop();
        }
        
        bot.channels.cache.get('773542499049668608').send("You will receive a message to quickly create your **Zul'Gurub** in the channel #corruption.");
    }
}