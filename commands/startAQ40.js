module.exports = {
    name: 'startAQ40',
    description: "start raiding AQ40",
    execute(bot, message, args) {

        let raidMC = new cron.CronJob(`00 05 22 * * 0`, () => {
            var aq40Date = new Date();
            aq40Date.setDate(aq40Date.getDate() + (7 + args[0] - aq40Date.getDay() % 7));
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: AHN'QIRAJ 40][description: killing shit and getting lootz!!!][channel:sign-ups][date:${aq40Date.getDate()}-${aq40Date.getMonth()+1}-${aq40Date.getFullYear()}][time:20:00][template:2][image: 'https://i.ibb.co/zGjSH2p/aq40.jpg'] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });
        raidMC.start();
    }
}