
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("absence")
    .setDescription("Announces into the channel #longterm-absence that you are not available.")
    .addStringOption((option) => 
        option
            .setName('start')
            .setDescription('The first day you are not available. (Format is: Day/Month/Year)')
            .setRequired(true)
    )
    .addStringOption((option) => 
        option
            .setName('end')
            .setDescription('The last day you are not available anymore. (Format is: Day/Month/Year)')
            .setRequired(true)
    )
    .addStringOption((option) => 
        option
            .setName('reason')
            .setDescription('Optional: Reason why you are not available')
            .setRequired(false)
    ),
  async execute(interaction, nickname, client) {

    const channelAbsenceId = '837376452709187634';
    const channelAbsence = client.channels.cache.get(channelAbsenceId);
    
    const start = interaction.options.getString('start');
    const end = interaction.options.getString('end');

    const startArray = start.split('/');
    const startArray2 = start.split('.');
    const startArray3 = start.split('-');

    var startDay;
    var startMonth;
    var startYear;

    var startDayInt;
    var startMonthInt;
    var startYearInt;
    
    if (startArray.length >= startArray2.length) {
        if (startArray.length > startArray3.length) {
            startDay = startArray[0];
            startMonth = startArray[1];
            startYear = startArray[2];
        } else {
            startDay = startArray3[0];
            startMonth = startArray3[1];
            startYear = startArray3[2];
        }
    } else {
        startDay = startArray2[0];
        startMonth = startArray2[1];
        startYear = startArray2[2];
    }

    const endArray = end.split('/');
    const endArray2 = end.split('.');
    const endArray3 = end.split('-');

    var endDay;
    var endMonth;
    var endYear;
    
    var endDayInt;
    var endMonthInt;
    var endYearInt;
    
    if (endArray.length >= endArray2.length) {
        if (endArray.length > endArray3.length) {
            endDay = endArray[0];
            endMonth = endArray[1];
            endYear = endArray[2];
        } else {
            endDay = endArray3[0];
            endMonth = endArray3[1];
            endYear = endArray3[2];
        }
    } else {
        endDay = endArray2[0];
        endMonth = endArray2[1];
        endYear = endArray2[2];
    }

    const d = new Date();
    const todayYear = d.getFullYear();
    const todayMonth = d.getMonth();
    const todayDate = d.getDate();
    const today = new Date(todayYear, todayMonth, todayDate, 0, 0, 0, 0);

    startDayInt = parseInt(startDay);
    startMonthInt = parseInt(startMonth);
    startYearInt = parseInt(startYear);

    endDayInt = parseInt(endDay);
    endMonthInt = parseInt(endMonth);
    endYearInt = parseInt(endYear);

    const startDate = new Date(startYearInt, startMonthInt-1, startDayInt, 0, 0, 0, 0);
    const endDate = new Date(endYearInt, endMonthInt-1, endDayInt, 0, 0, 0, 0);

    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.ceil(Math.abs((startDate - endDate) / oneDay));

    const absenceEmbed = new MessageEmbed()
        .setAuthor({name: '<OurBot>'})
        .setTitle(`Absence of ${nickname}`)
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${nickname} will be absent from ${start} to ${end}.`)
        .setColor('#004A94')
        .setTimestamp()
    
    if (interaction.options.getString('reason')) {
        absenceEmbed
            .setDescription(`${nickname} will be absent from ${start} to ${end}.\nBecause: ${interaction.options.getString('reason')}`)
    }

    const result = Math.ceil(Math.abs(today - endDate)) + oneDay;
    const resultDays = Math.ceil(Math.abs((today - endDate) / oneDay));

      if (isNaN(startDay) || isNaN(startMonth) || isNaN(startYear) || isNaN(endDay) || isNaN(endMonth) || isNaN(endYear)) {
        await interaction.reply({
            content: 'Typo, you entered not only numbers in your dates',
            ephemeral: true,
        })
    } else if (startDay.split('').length > 2 || startMonth.split('').length > 2 || endDay.split('').length > 2 || endMonth.split('').length > 2) {
        await interaction.reply({
            content: 'Wrong length of characters in either your starting or ending day/month.',
            ephemeral: true,
        })
    } else if (startYear.split('').length !== 2 && startYear.split('').length !== 4) {
        await interaction.reply({
            content: 'Wrong length of characters in your starting year.',
            ephemeral: true,
        })
    } else if (endYear.split('').length !== 2 && endYear.split('').length !== 4) {
        await interaction.reply({
            content: 'Wrong length of characters in your ending year.',
            ephemeral: true,
        })
    } else if (startArray.length !== 3 && startArray2.length !== 3 && startArray3.length !== 3) {
        await interaction.reply({
            content: 'Wrong starting date.',
            ephemeral: true,
        })
    } else if (endArray.length !== 3 && endArray2.length !== 3 && endArray3.length !== 3) {
        await interaction.reply({
            content: 'Wrong ending date.',
            ephemeral: true,
        })
    } else if (startDate > endDate) {
        await interaction.reply({
            content: 'Starting date lies further ahead than ending date.',
            ephemeral: true,
        })
    } else {  
        
        // for deleting
        channelAbsence.send({ embeds: [absenceEmbed] })
        /*
            .then(repliedMessage => {
                setTimeout(() => repliedMessage.delete(), result);
            })
        
        .catch();
        */
        await interaction.reply({
            content: 'Your message is being send to #longterm-absence and will be deleted automatically.',
            ephemeral: true,
        })
    }
  }
}
