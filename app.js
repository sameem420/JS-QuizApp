var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

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

  }