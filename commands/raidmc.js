module.exports = {
    name: 'raidmc',
    description: "start raiding MC",
    execute(bot, message, args, CronJob) {

        let startMC = new CronJob(`00 00 20 * * 0`, () => {
            var mcDate = new Date();
            mcDate.setDate(mcDate.getDate() + (7 + args[0] - mcDate.getDay() % 7));
            let channel = bot.channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: MOLTEN CORE][description: killing shit and getting lootz!!!][channel:sign-ups][date:${mcDate.getDate()}-${mcDate.getMonth()+1}-${mcDate.getFullYear()}][time:20:00][template:2][image: https://i.ibb.co/CBVZw8h/molten-core.jpg] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });

        if (args[0] == 'start') {
            startMC.start();
        } else if (args[0] == 'stop') {
            startMC.stop();
        }
        
        bot.channels.cache.get('773542499049668608').send('You will receive a message to quickly create your **Molten Core** in the channel #corruption.');
    }
}