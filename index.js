const readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var userName = readLineSync.question(chalk.cyanBright("May I have your name? "));
console.log(chalk.cyanBright('Welcome '+ userName));
console.log(chalk.cyanBright('lets see if you are a marvel fan ;)'));

var higestScore = [
  {
    name: "rishu",
    score: 10
  },
  {
    name: "neha",
    score: 9
  }
]

function play(question , answer){
  var userAnswer = readLineSync.question(chalk.cyanBright(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("correct");
    score = score + 1;
  }
  else{
    console.log("wrong");
  }
  console.log("your current score is: "+ score);
  console.log("_____");
}

var questions = [
  {
    question: `What is the name of Thor’s hammer?
    a: Vanir
    b: Mjolnir
    c: Aesir `,
    answer: "b"
  },
  {
    question: `Who is killed by Loki in the Avengers?
    a: Maria Hill
    b: Nick Fury
    c: Agent Coulson `,
    answer: "c"
  },
  {
    question: `Who is Black Panther’s sister?
    a: Shuri
    b: Nakia
    c: Ramonda `,
    answer: "a"
  },
  {
    question: `How many infinity stones are there?
    a: six
    b: five
    c: eight `,
    answer: "a"
  },
  {
    question: `What is Captain America’s shield made of?
    a: Adamantium
    b: Vibranium
    c: Promethium `,
    answer: "b"
  },
  {
    question: ` Before becoming Vision, what is the name of Iron Man’s A.I. butler?
    a: H.O.M.E.R.
    b: J.A.R.V.I.S.
    c: A.L.F.R.E.D. `,
    answer: "b"
  },
  {
    question: `Who is Thor’s father?
    a: Loki
    b: Hela
    c: Odin `,
    answer: "c"
  },
  {
    question: `Which of these movies came first?
    a: Ant-Man
    b: Guardians of the Galaxy Vol. 2
    c: Captain America: Civil War `,
    answer: "a"
  },
  {
    question: `Which of these movies was released last?
    a: Captain America: The Winter Soldier
    b: Doctor Strange
    c: Guardians of the Galaxy Vol. 2 `,
    answer: "c"
  },
  {
    question: `What is Peter Quill’s alter ego?
    a: Star-Man
    b: Star-Lord
    c: Star-Killer `,
    answer: "b"
  },
  

]

for(var i=0;i<questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

console.log("your final score is "+ score);
console.log("checkout the high scores-");
for(var i =0;i<higestScore.length;i++){
   console.log(higestScore[i].name + ":" + higestScore[i].score);
   
}

console.log("if you have scored higher, send me a ss so that i can update the leaderboard")

