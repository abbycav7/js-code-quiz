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
// Create question groups
var questions = function () {
    quizEl.textContent = "";
    for (let i = 0; i < questionObj.length; i++) {
        var panelEl = document.createElement("section");
        panelEl.className = "question-panel";
        panelEl.setAttribute("id", "panel" + [i + 1]);
        quizEl.appendChild(panelEl);

        var questionEl = document.createElement("h3");
        questionEl.className = "quiz-question";
        questionEl.textContent = questionObj[i].question;
        panelEl.appendChild(questionEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "1"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "1. " + questionObj[i].options[0];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "2"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "2. " + questionObj[i].options[1];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "3"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "3. " + questionObj[i].options[2];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "4"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "4. " + questionObj[i].options[3];
        panelEl.appendChild(answerEl);

        var statusEl = document.createElement("div");
        statusEl.setAttribute("id", "answer-status");
        statusEl.className = "status";
        panelEl.appendChild(statusEl);
    }
}
// Check selected answer and give results
var checkAnswer = function (questionId, answerId, panelId) {

    var panel1El = document.querySelector('#panel1');
    var panel2El = document.querySelector('#panel2');
    var panel3El = document.querySelector('#panel3');
    var panel4El = document.querySelector('#panel4');
    var statusEl = document.querySelector("#status");

    switch (panelId) {
        case 'panel1':
            console.log("Panel 1");
            if (questionId === answerId) {
                statusEl.textContent = "Correct!"
                statusEl.className = "status-correct"
                panel1El.setAttribute("style", "display: none"); // Hide question group after answer selected
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Wrong!"
                statusEl.className = "status-wrong"
                panel1El.setAttribute("style", "display: none"); // Hide question group after answer selected
            };
            break;
        case 'panel2':
            console.log("Panel 2");
            if (questionId === answerId) {
                statusEl.textContent = "Excellent!"
                statusEl.className = "status-correct"
                panel2El.setAttribute("style", "display: none"); // Hide question group after answer selected
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Wrong Again!"
                statusEl.className = "status-wrong"
                panel2El.setAttribute("style", "display: none"); // Hide question group after answer selected
            };
            break;
        case 'panel3':
            console.log("Panel 3");
            if (questionId === answerId) {
                statusEl.textContent = "You Got It!"
                statusEl.className = "status-correct"
                panel3El.setAttribute("style", "display: none"); // Hide question group after answer selected
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Ouch!"
                statusEl.className = "status-wrong"
                panel3El.setAttribute("style", "display: none"); // Hide question group after answer selected
            };
            break;
        case 'panel4':
            console.log("Panel 4");
            if (questionId === answerId) {
                statusEl.textContent = "Well Done!"
                statusEl.className = "status-correct"
                panel4El.setAttribute("style", "display: none"); // Hide question group after answer selected
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Totally Wrong."
                statusEl.className = "status-wrong"
                panel4El.setAttribute("style", "display: none"); // Hide question group after answer selected
            };
            break;
        case 'panel5':
            console.log("Panel 5");
            if (questionId === answerId) {
                statusEl.textContent = "Awesome!"
                statusEl.className = "status-correct"
                endGame(timeLeft); // Game is finished go to endGame()
            }
            else {
                timeLeft = timeLeft - 10;
                statusEl.textContent = "Not Correct."
                statusEl.className = "status-wrong"
                endGame(timeLeft); // Game is finished go to endGame()
            };
            break;
    }
}
