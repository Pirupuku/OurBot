module.exports = {
    name: 'raidnaxx',
    description: "start raiding Naxx",
    execute(bot, message, args, CronJob) {

        let startNaxx = new CronJob(`00 00 20 * * 0`, () => {
            var naxxDate = new Date();
            naxxDate.setDate(naxxDate.getDate() + (7 + args[0] - naxxDate.getDay() % 7));
            let channel = bot.guilds.cache.get('773542499049668608').channels.cache.get('800716895417532526'); // #corruption
            channel.send(`+quickcreate [title: NAXXRAMAS][description: killing shit and getting lootz!!!][channel:sign-ups][date:${naxxDate.getDate()}-${naxxDate.getMonth()+1}-${naxxDate.getFullYear()}][time:20:00][template:2][image: https://i.ibb.co/zs4wJnb/naxx.jpg] [advanced:# Deadline - ( 0 ) # Sign-Ups overall - ( 100 ) # Sign-Ups lock - ( false ) # Sign-Ups user - ( 1 )  # Mention - ( {Raiders} )  # Attendance - ( true ) # Numbering - ( true ) # Rename - ( Late ) # ( Bench ) # ( Tentative ) # ( Absence ) # ( No )  # Announcement - ( true ) # ( general ) # ( 1 ) # ( Raid has been posted ) # Opt-out - ( none )][deletion:4]`);
        });

        if (args[0] == 'start') {
            startNaxx.start();
        } else if (args[0] == 'stop') {
            startNaxx.stop();
        }
        
        bot.channels.cache.get('773542499049668608').send('You will receive a message to quickly create your **Naxxramas** in the channel #corruption.');
    }
}