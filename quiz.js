// Web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbFistmgFQcIOojLVD7cgXmTE9mLvuqVc",
    authDomain: "quizapp-74d37.firebaseapp.com",
    databaseURL: "https://quizapp-74d37.firebaseio.com",
    projectId: "quizapp-74d37",
    storageBucket: "quizapp-74d37.appspot.com",
    messagingSenderId: "10113678267",
    appId: "1:10113678267:web:d2aa73777b379fb241629e",
    measurementId: "G-PEKPZ347TY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


  var getQuestion = document.getElementById("question");
  var getAnswer1 = document.getElementById("answer1");
  var getAnswer2 = document.getElementById("answer2");
  var getAnswer3 = document.getElementById("answer3");


  var quizQuestions;
// getting quiz data from Firebase
database.ref('QuizData').on('value',function(questions){
    quizQuestions = questions.val();
    getQuestion.innerHTML = quizQuestions[1].question;
    getAnswer1.innerText = quizQuestions[1].answer1;
    getAnswer2.innerText = quizQuestions[1].answer2;
    getAnswer3.innerText = quizQuestions[1].answer3;
});

console.log(quizQuestions);





//quizQuestions[1].correctAnswer;