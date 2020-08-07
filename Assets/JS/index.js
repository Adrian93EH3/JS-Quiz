// Set all questions
const questions = [
  "What is my favorite color?",
  "What's 2+6?",
  "Which one is not an operator?",
  "What languages are needed for a website?" 
]

// Set all answers
const allAnswers = [
  {  
    firstAnswer: "Blue",
    secondAnswer: "Red",
    thirdAnswer: "Green",
    fourthAnswer: "Yellow"
  },
  {  
    firstAnswer: "8",
    secondAnswer: "4",
    thirdAnswer: ".8",
    fourthAnswer: "12"
  },
  {  
    firstAnswer: "+",
    secondAnswer: "*",
    thirdAnswer: "|",
    fourthAnswer: "/"
  },
  {
    firstAnswer: "HTML",
    secondAnswer: "CSS",
    thirdAnswer: "JavaScript",
    fourthAnswer: "All of them"
  }
]

// Set all correct awnsers
const correctAnswers = [
  "Red",
  "8",
  "|",
  "All of them"
]

// Set current score, question and answer
let timePoints = 0;
let correctAnswerNumber = 0;
let updateOptionsCounter = 0;
let updateQuestionsCounter = 0;
let questionNumber = 1;
let totalQuestions = questions.length;

// Get DOM elements
const time = document.getElementById('time');
const question = document.getElementById('question');

// Update current question
function nextQuestion() {

  // Increment 
  correctAnswerNumber ++;
  
  // Update question number
  (function updateQuestionNumber() {
    questionNumber ++;
    var questionNumberDom = document.getElementById('questionNumber');
    questionNumberDom.innerHTML = questionNumber;
    return questionNumber;
  })();

  
  // update Options
  (function updateOptions() {
    updateOptionsCounter ++;

    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    const answer4 = document.getElementById('answer4');

    answer1.innerHTML = allAnswers[updateOptionsCounter].firstAnswer;
    answer2.innerHTML = allAnswers[updateOptionsCounter].secondAnswer;
    answer3.innerHTML = allAnswers[updateOptionsCounter].thirdAnswer;
    answer4.innerHTML = allAnswers[updateOptionsCounter].fourthAnswer;
  })();

  
  // update question counter
  (function updateQuestions() {
    updateQuestionsCounter ++;

    question.innerHTML = questions[updateQuestionsCounter];
  })(); 
  
}


// Check for the correct answer then show next question
function checkAnswer(answeredQuestion) {
  let answered = answeredQuestion.innerHTML; 
  
  if(answered == correctAnswers[correctAnswerNumber]) {
        
    // Check for last question then end the quiz
    if (questionNumber == totalQuestions){
      updateTime();
    } 
    else {
      nextQuestion();  
      updateTime();
    }
  } 
  else {
    secondsLeft -=15
    nextQuestion();
  }
}

var timeEl = document.querySelector(".red");
var secondsLeft = 45;
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "Time left";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("You are out of time");
    }
  }, 1000);
}
setTime();






