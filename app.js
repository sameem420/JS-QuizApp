var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

var previousBtn = document.getElementById('previous');
var nextBtn = document.getElementById('next');

var getQuestion = document.getElementById("question");
var op1 = document.getElementById("option1");
var op2 = document.getElementById("option2");
var op3 = document.getElementById("option3");


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
    op1.innerHTML = questions[i].answers.a;
    op2.innerHTML = questions[i].answers.b;
    op3.innerHTML = questions[i].answers.c;
  }


  function PreviousQuestion() {
    console.log("Previous Question");
  }

i++;
  function NextQuestion() {
    var i = 1;
    getQuestion.innerHTML = questions[i].question;
    op1.innerHTML = questions[i].answers.a;
    op2.innerHTML = questions[i].answers.b;
    op3.innerHTML = questions[i].answers.c;
  }