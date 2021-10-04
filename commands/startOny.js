module.exports = {
    name: 'startMC',
    description: "start raiding MC",
    execute(bot, message, args) {

        let raidMC = new cron.CronJob(`00 05 22 * * 0`, () => {
            var onyDate = new Date();
            onyDate.setDate(onyDate.getDate() + 5);
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: ONYXIA][description: killing shit and getting lootz!!!][channel:sign-ups][date:${onyDate.getDate()}-${onyDate.getMonth()+1}-${onyDate.getFullYear()}][time:20:00][template:2][image: https://ibb.co/tYnppNJ] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });
        raidMC.start();
    }
}