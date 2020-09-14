<<<<<<< HEAD
// ALL THE DIFFERENT ATTEMPTS I HAVE TRIED
// ================================================================================

// var startButton = document.getElementById("startButton");
// var mainContainerEl = document.querySelector(".container")
// var timerEl = document.getElementById("timer");
// var totalSeconds = 60;
// var questionIndex = 0;



// let question = [
//     {
//         questionTitle:
//         answerChoices: 
//         correctAnswer:
//     },
//     {
//         questionTitle:
//         answerChoices:
//         correctAnswer: 0
//     },
//     {
//         questionTitle:
//         answerChoices:
//         correctAnswer:
//     },
//     {
//         questionTitle:
//         answerChoices: 
//         correctAnswer: 0
//     },
//     {
//         questionTitle:
//         answerChoices:
//         correctAnswer: 2
//     },

// ];

// startButton.addEventListener("click", startQuiz);
// function startQuiz() {

//     startTimer()
//     generateQuestion()
// }

// function generateQuestion() {
//     mainContainerEl.innerHTML = "";

//     var questionEl = document.createElement("h3")
//     questionEl.textContent = question[questionIndex].questionTitle
//     mainContainerEl.appendChild(questionEl);

//     for (var i = 0; i < question[questionIndex].answerChoices.length; i++) {
//         var buttonEl = document.createElement("button")
//         buttonEl.textContent = question[questionIndex].answerChoices[i]
//         buttonEl.setAttribute("value", i)
//         buttonEl.onclick = checkAnswer;
//         mainContainerEl.appendChild(buttonEl)
//     }

// }


// function checkAnswer() {
//     if (this.value !== question[questionIndex].correctAnswer) {
//         // make timer go down
//     }
//     questionIndex++;
//     generateQuestion();
// }
// Check for the correct answer then show next question
// function checkAnswer(answeredQuestion) {
//     let answered = answeredQuestion.innerHTML;

//     if (answered == question[questionIndex].correctAnswer) {

//         // Check for last question then end the quiz
//         if (questionNumber == totalQuestions) {
//             updateTime();
//         }
//         else {
//             nextQuestion();
//             updateTime();
//         }
//     }
//     else {
//         secondsLeft -= 15
//         nextQuestion();
//     }

// =================================================================================
// END OF PRIOR ATTEMPTS

// GLOBAL VARIABLES
// =======================
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var answersEl = document.getElementById("answers");
var currentQuestion = 0;
var secondsLeft = 60;
var exam = document.getElementById('exam');
var hsDiv = document.getElementById('hsDiv');
var scoreEl = document.getElementById('score');
var hsBtn = document.getElementById('hsBtn');
var hsName = document.getElementById('hsName');

// SETTING QUESTIONS HERE
// ===========================
var questions = [
    {
        title: "What does mixing the colors red and yellow give you?",
        choices: [
            "Yellowred",
            "Redyellow",
            "Orange",
            "Green"
        ],
        answer: "Orange",
    },
    {
        title: "Who is the main antagonist of most Mario games?",
        choices: [
            "Bowser",
            "Wario",
            "Waluigi",
            "Mr. Game and Watch"
        ],
        answer: "Bowser",
    },
    {
        title: "What does 12 to the power of 2 give you?",
        choices: [
            "12",
            "0",
            "24",
            "144"
        ],
        answer: "144",
    },
    {
        title: "Which boxer bit a chunk of another boxer's ear off during a fight?",
        choices: [
            "Muhammed Ali",
            "Floyd Mayweather",
            "Manny Pacquiao",
            "Mike Tyson"
        ],
        answer: "Mike Tyson",
    },
    {
        title: "What year did the internet become publicly available?",
        choices: [
            "1988",
            "1984",
            "1990",
            "1993"
        ],
        answer: "1993",
    },
];

// FUNCTION TO GENERATE QUESTIONS UPON QUIZ STARTING
// ======================================================
function generateQuestion() {
    var questionEl = document.getElementById("questions")
    questionEl.textContent = questions[currentQuestion].title;
    answersEl.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {

        // CREATING BTNS FOR QUESTION CHOICES
        // ==============================================
        var button = document.createElement("button");
        button.textContent = questions[currentQuestion].choices[i];
        // GIVES THE POSSIBLE CHOICES THEIR STYLING
        // ==============================================
        button.classList.add("btn", "btn-primary", "answer");
        button.value = i;
        // ATTACHING THE NEWLY CREATED BUTTONS TO THE ANSWERS DIV VIA THE "answersEl" VARIABLE
        // ==============================================================================================
        answersEl.appendChild(button);
    }
    }

// FUNCTION TO START THE TIMER OF THE QUIZ
// ==============================================
function startTimer() {
    setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = "Time: " + secondsLeft + " seconds left"
            if (secondsLeft <= 0) {
                timerEl.textContent = "Time: 0 seconds left"
                score();
            }
        },
        1000
    ) 
}

// FUNCTION TO HIDE THE WELCOME HTML
// ======================================
function init() {
    // SETTING A VAR OF HOME TO AN ID OF HOME IN THE HTML
    // ===========================================================
    var home = document.getElementById("home");
    // MAKING EVERYTHING WITHIN THAT DIV GO AWAY UPON QUIZ STARTING
    // ==================================================================
    home.setAttribute("class", "d-none");
    generateQuestion();
    startTimer();
}

// FUNCTION TO CHECK IF THE ANSWER IS CORRECT
// ====================================================
function checkAnswer() {
    if (!event.target.classList.contains("answer")){
        return
    }
    var btnValue = event.target.value
    // DECREMENTING TIME/SCORE BY 15sec PER WRONG ANSWER
    // ======================================================
    if (questions[currentQuestion].choices[btnValue] !== questions[currentQuestion].answer) {
        secondsLeft = secondsLeft - 15;
    }
    // GENERATE NEXT QUESTION UPON CHECKING THE ANSWER
    // ====================================================
    currentQuestion++;
    generateQuestion();
}


// BEGINNING OF HIGHSCORE CODE
// ===================================

// EMPTY ARRAY TO DUMP JSON DATA OF INITIALS AND SCORE INTO
// ==============================================================
var highscore = [];


function score() {
    exam.classList.remove("d-block")
    exam.classList.add("d-none");
    hsDiv.classList.remove("d-none");
    hsDiv.classList.add("d-block");
    scoreEl.textContent = secondsLeft;
}


// EVENT LISTENER FOR SUBMIT BUTTON
// ======================================
hsBtn.addEventListener("click", function () {
    if (localStorage.getItem("highscore")) {
        // GRABS PREVIOUS HIGHSCORES FROM LOCAL STORAGE
        // =============================================
        highscore = JSON.parse(localStorage.getItem("highscore"));
        // THE DATA THAT GETS PUSHED INTO THE EMPTY ARRAY OF "highscore" ABOVE
        // =========================================================================
        highscore.push({
            initials: hsName.value,
            score: secondsLeft
        });
        // SETS DATA OF JSON TO THE LOCAL STORAGE
        // =============================================
        localStorage.setItem("highscore", JSON.stringify(highscore));
        // TAKES USER TO SPECIFIED HTML PAGE UPON SUBMITTING SCORE
        // ==============================================================
        window.location.href = "highscore.html";
    } else {
        
        highscore = [
            {
                initials: hsName.value,
                score: secondsLeft
            }
        ];
        // SETS DATA OF JSON TO THE LOCAL STORAGE
        // =============================================
        localStorage.setItem("highscore", JSON.stringify(highscore));
        // TAKES USER TO SPECIFIED HTML PAGE UPON SUBMITTING SCORE
        // ==============================================================
        window.location.href = "highscore.html";
    }
});

// ON CLICK EVENTS LISTENING FOR WHEN TO START QUIZ AND CHECK THE ANSWER THAT THE USER CHOSE
// =================================================================================================
startButton.addEventListener("click", init)
answersEl.addEventListener("click", checkAnswer);
=======
var startBtn = document.getElementById('start');
var introContainer = document.getElementById('intro-container');
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answerList = document.getElementById('answer-list');
var examContainer = document.getElementById('exam-container');
var initialsContainer = document.getElementById('initials-container');
var scoreEl = document.getElementById('score');
var initialsBtn = document.getElementById('initials-submit');
var initialsText = document.getElementById('initials-text');


var interval; //undefined variable for timer setInterval
var timeLeft = 60;
var questionNumber = 0;
var highScoreObj = [];

var questions = [
    {
        question: 'Who is the main protagonist of Boruto?',
        answers: ['Sasuke', 'Sakura', 'Naruto', 'Boruto'],
        correct: '3'
    }, {
        question: 'Who is the main antagonist of Smash Bros.?',
        answers: ['Master Hand', 'Bowser', 'Wario', 'None'],
        correct: '0'
    }, {
        question: 'What is the solution of x = (6 * 2) + 10(3 + 2)?',
        answers: ['110', '27', '62', '68'],
        correct: '2'
    }
]

//set timer on page load
timerEl.textContent = timeLeft;

function timer() {
    interval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            initInitials();
        }
    }, 1000);
}

function initInitials() {
    clearInterval(interval);
    examContainer.classList.remove('d-block')
    examContainer.classList.add('d-none');
    initialsContainer.classList.remove('d-none');
    initialsContainer.classList.add('d-block');
    scoreEl.textContent = timeLeft;
}

function populateQuestions() {
    if (questionNumber < questions.length) {
        questionEl.textContent = questions[questionNumber].question;
        answerList.innerHTML = "";
        for (let i = 0; i < questions[questionNumber].answers.length; i++) {
            var li = document.createElement('li');
            answerList.appendChild(li);
            var answerBtn = document.createElement('button');
            answerBtn.id = i;
            answerBtn.className = 'btn btn-primary m-1';
            answerBtn.textContent = questions[questionNumber].answers[i];
            li.appendChild(answerBtn);
        }
    } else {
        initInitials();
    }
}

startBtn.addEventListener('click', function() {
    introContainer.classList.add('d-none');
    timerEl.textContent = timeLeft; // just so time immediately shows upon pressing start button
    timer();
    examContainer.classList.add('d-block');
    populateQuestions();
});

answerList.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        var choice = e.target.id;
        if (choice.toString() === questions[questionNumber].correct) {
            questionNumber++;
            populateQuestions();
        } else {
            timeLeft = timeLeft - 15;
            timerEl.textContent = timeLeft;
            questionNumber++;
            populateQuestions();
        }
    }
});

initialsBtn.addEventListener('click', function() {
    if(localStorage.getItem('highScoreObj')) {
        highScoreObj = JSON.parse(localStorage.getItem('highScoreObj'));
        highScoreObj.push({
            initials: initialsText.value,
            score: timeLeft
        });
        localStorage.setItem('highScoreObj', JSON.stringify(highScoreObj));
        window.location.href = 'highscore.html';
    } else {
        highScoreObj = [
            {
            initials: initialsText.value,
            score: timeLeft
            }
        ];
        localStorage.setItem('highScoreObj', JSON.stringify(highScoreObj));
        window.location.href = 'highscore.html'
    }
});
>>>>>>> 91903af0059309888c96ed7c1872641fb567be03
