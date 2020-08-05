var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var getQuestion = document.getElementById("question");
var option1 = document.getElementById("choice1");
var option2 = document.getElementById("choice2");
var option3 = document.getElementById("choice3");


var score = 0;


const questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Brendan Eich",
        b: "Sheryl Sandberg",
        c: "Douglas Crockford"
      },
      correctAnswer: "a"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "ESLint"
      },
      correctAnswer: "d"
    }
  ];


  for(var i=0; i<questions.length; i++)
  {
    getQuestion.innerHTML = questions[i].question;
    option1.innerHTML = questions[i].answers.a;
    option2.innerHTML = questions[i].answers.b;
    option3.innerHTML = questions[i].answers.c;
  }