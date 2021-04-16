var formEl = document.querySelector("#highscore");
var highscoreEl = document.querySelector("#highscore-panel")
var instructionsEl = document.querySelector('#instructions');
var timerEl = document.querySelector('#countdown');
var questionEl = document.querySelector('#quiz-question');
var quizEl = document.querySelector('#quiz-body');
var statusEl = document.querySelector('#status')
var startBtn = document.querySelector('#start');
var timeLeft = 0;
var timeInterval;

// Start Questions Array
var questionObj = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answer: "2"
    },
    {
        question: "How do you write "Hello World" in an alert box?",
        options: ["alert("Hello World");", "msgBox("Hello World");", "alertBox("Hello World");", "msg("Hello World");"],
        answer: "1"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function = myFunction()","function myFunction()", "function+myFunction()"],
        answer: "3",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: ["if (i==5)", "if i=5", "if i=5 then", "if i==5 then"],
        answer: "1"
    },
    {
        question: "How to write an IF statement for executing some code if "i" is NOT equal to 5?",
        options: ["if i <> 5", "if i=!5 then", "if (i<>5)", "if (i !=5)"],
        answer: "4"
    },
]

// Display opening instructions
quizEl.textContent = "Answer the following questions within the given time limit. Keep in mind that incorrect answers will penalize both your score & your time by ten seconds! Good luck!";

// Timer function set at 60 seconds
function timer() {
    timeLeft = 60;
    startBtn.setAttribute("style", "display: none"); // Hide start button on start

    timeInterval = setInterval(function () {
        // While timer is running
        if (timeLeft > -1) {
            timerEl.textContent = 'Time: ' + timeLeft; // Display timer on page
            timeLeft--;
        }
        // After timer hits zero
        else {
            timerEl.textContent = 'Times Up!'; // Display times up message
            clearInterval(timeInterval); // Reset Timer
            endGame(timeLeft);
        }
    }, 1000);
    questions();
}
