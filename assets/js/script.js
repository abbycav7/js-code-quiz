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
        question: "",
        options: [""],
        answer: "1"
    },
    {
        question: "",
        options: [""],
        answer: "4"
    },
]

