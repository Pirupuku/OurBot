module.exports = {
    name: 'startBWL',
    description: "start raiding BWL",
    execute(bot, message, args) {

        var bwlDate = new Date();
        bwlDate.setDate(bwlDate.getDate() + (7 + args[0] - bwlDate.getDay() % 7));

        let raidMC = new cron.CronJob(`00 05 22 * * 0`, () => {
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: BLACKWING LAIR][description: killing shit and getting lootz!!!][channel:sign-ups][date:${bwlDate.getDate()}-${bwlDate.getMonth()+1}-${bwlDate.getFullYear()}][time:20:00][template:2][image: 'https://i.ibb.co/pf2q7CL/BWL.jpg'] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });
        raidMC.start();
    }
}