const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {

  name: null,
  activity: null,
  listen: null,
  meal: null,
  faveFood: null,
  sport: null,
  superpower: null
  
};
const profileKeys = Object.keys(profile);

const questions = ["What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing the previous activity? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];
const ask = function(question) {
  return new Promise(resolve => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};


const survey = async function() {

  for (const index in questions) {

    profile[profileKeys[index]] = await ask(questions[index]);

  }
  rl.close();
  console.log("\nProfile complete!\n");
  console.log("Profile information: ");
  console.log(`Your name is ${profile.name}. You like to listen to ${profile.listen} while doing ${profile.activity}. \nYou like to eat ${profile.faveFood} for ${profile.meal}, and you love ${profile.sport}. Your superpower is ${profile.superpower}!\n`);

};

survey();
