module.exports = {
    name: 'class',
    description: "give discord role of a class of WoW",
    execute(message, args) {
        
        const classDruid = '798497796541513759';
        const classHunter = '798497755952578560';
        const classWarrior = '784698785586348032';
        const classWarlock = '798497338561789993';
        const classShaman = '798497547642863626';
        const classPaladin = '799233980570402816';
        const classPriest = '798497653058830339';
        const classRogue = '798497604035805184';
        const classMage = '798497704976056350';

        args[0] = args[0].toLowerCase();

        if (args[0] == 'druid'){
            if (message.member.roles.cache.has(classDruid)){
                message.author.send('You already are a DRUID!')
            } else {
                message.member.roles.add(classDruid).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error); 
                message.author.send('You are a DRUID now!');
            }  
        }  else if(args[0] == 'nodruid'){
            if (!message.member.roles.cache.has(classDruid)){
                message.author.send('You are not a DRUID!');
            } else {
                message.member.roles.remove(classDruid).catch(console.error);
                message.author.send('You are not a DRUID anymore!');
            } 
        } else if(args[0] == 'hunter'){
            if (message.member.roles.cache.has(classHunter)){
                message.author.send('You already are a HUNTER!');
            } else {
                message.member.roles.add(classHunter).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error); 
                message.author.send('You are a HUNTER now!');
            }
        } else if(args[0] == 'nohunter'){
            if (!message.member.roles.cache.has(classHunter)){
                message.author.send('You are not a HUNTER!');
            } else {
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are not a HUNTER anymore!');
            }
        } else if(args[0] == 'mage'){
            if (message.member.roles.cache.has(classMage)){
                message.author.send('You already are a MAGE!');
            } else {
                message.member.roles.add(classMage).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a MAGE now!');
            }
        } else if(args[0] == 'nomage'){
            if (!message.member.roles.cache.has(classMage)){
                message.author.send('You are not a MAGE!');
            } else {
                message.member.roles.remove(classMage).catch(console.error);
                message.author.send('You are not a MAGE anymore!');
            }
        } else if(args[0] == 'paladin'){
            if (message.member.roles.cache.has(classPaladin)){
                message.author.send('You already are a PALADIN!');
            } else {
                message.member.roles.add(classPaladin).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a PALADIN now!');
            }
        } else if(args[0] == 'nopaladin'){
            if (!message.member.roles.cache.has(classPaladin)){
                message.author.send('You are not a PALADIN!');
            } else {
                message.member.roles.remove(classPaladin).catch(console.error);
                message.author.send('You are not a PALADIN anymore!');
            }
        } else if(args[0] == 'priest'){
            if (message.member.roles.cache.has(classPriest)){
                message.author.send('You already are a PRIEST!');
            } else {
                message.member.roles.add(classPriest).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a PRIEST now!');
            }
        } else if(args[0] == 'nopriest'){
            if (!message.member.roles.cache.has(classPriest)){
                message.author.send('You are not a PRIEST!');
            } else {
                message.member.roles.remove(classPriest).catch(console.error);
                message.author.send('You are not a PRIEST anymore!');
            }
        } else if(args[0] == 'rogue'){
            if (message.member.roles.cache.has(classRogue)){
                message.author.send('You already are a ROGUE!');
            } else {
                message.member.roles.add(classRogue).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a ROGUE now!');
            }
        } else if(args[0] == 'norogue'){
            if (!message.member.roles.cache.has(classRogue)){
                message.author.send('You are not a ROGUE!');
            } else {
                message.member.roles.remove(classRogue).catch(console.error);
                message.author.send('You are not a ROGUE anymore!');
            }
        } else if(args[0] == 'shaman'){
            if (message.member.roles.cache.has(classShaman)){
                message.author.send('You already are a SHAMAN!');
            } else {
                message.member.roles.add(classShaman).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a SHAMAN now!');
            }
        } else if(args[0] == 'noshaman'){
            if (!message.member.roles.cache.has(classShaman)){
                message.author.send('You are not a SHAMAN!');
            } else {
                message.member.roles.remove(classShaman).catch(console.error);
                message.author.send('You are not a SHAMAN anymore!');
            }
        } else if(args[0] == 'warlock'){
            if (message.member.roles.cache.has(classWarlock)){
                message.author.send('You already are a WARLOCK!');
            } else {
                message.member.roles.add(classWarlock).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classWarrior).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a WARLOCK now!');
            }
        } else if(args[0] == 'nowarlock'){
            if (!message.member.roles.cache.has(classWarlock)){
                message.author.send("You aren't a WARLOCK!");
            } else {
                message.member.roles.remove(classWarlock).catch(console.error);
                message.author.send("You aren't a WARLOCK anymore!");
            }
        } else if(args[0] == 'warrior'){
            if (message.member.roles.cache.has(classWarrior)){
                message.author.send('You already are a WARRIOR!');
            } else {
                message.member.roles.add(classWarrior).catch(console.error);
                message.member.roles.remove(classDruid).catch(console.error);
                message.member.roles.remove(classShaman).catch(console.error);
                message.member.roles.remove(classWarlock).catch(console.error);
                message.member.roles.remove(classRogue).catch(console.error);
                message.member.roles.remove(classMage).catch(console.error);
                message.member.roles.remove(classPaladin).catch(console.error);
                message.member.roles.remove(classPriest).catch(console.error);
                message.member.roles.remove(classHunter).catch(console.error);
                message.author.send('You are a WARRIOR now!');
            }
        } else if(args[0] == 'nowarrior'){
            if (!message.member.roles.cache.has(classWarrior)){
                message.author.send('You are not a WARRIOR!');
            } else {
                message.member.roles.remove(classWarrior).catch(console.error);
                message.author.send('You are not a WARRIOR anymore!');
            }
        }
    }
}