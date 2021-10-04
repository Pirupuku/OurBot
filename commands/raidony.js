module.exports = {
    name: 'raidony',
    description: "start raiding Ony",
    execute(bot, message, args, CronJob) {

        var onyStartDate = new Date();

        let startOny = new CronJob(`00 00 20 * * ${onyStartDate.getDay()}`, () => {
            onyStartDate.setDate(onyStartDate.getDate() + 5);
            var onyDate = new Date();
            onyDate.setDate(onyDate.getDate() + 5);
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: ONYXIA][description: killing shit and getting lootz!!!][channel:sign-ups][date:${onyDate.getDate()}-${onyDate.getMonth()+1}-${onyDate.getFullYear()}][time:20:00][template:2][image: https://ibb.co/tYnppNJ] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });

        if (args[0] == 'start') {
            startOny.start();
        } else if (args[0] == 'stop') {
            startOny.stop();
        }
        
        message.channel.send('You will receive a message to quickly create your **Onyxia** in the channel #corruption.');
    }
}