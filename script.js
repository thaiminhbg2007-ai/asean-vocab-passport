// =========================
// Theme
// =========================

document.getElementById("passport-title").textContent = theme.title;
document.getElementById("passport-subtitle").textContent = theme.subtitle;
document.getElementById("start-btn").textContent = theme.startButton;

document.getElementById("passport-title").style.color = theme.colors.title;
document.getElementById("passport-subtitle").style.color = theme.colors.subtitle;
document.getElementById("start-btn").style.color = theme.colors.buttonText;
document.getElementById("start-btn").style.backgroundColor = theme.colors.buttonBackground;


// =========================
// Question Engine
// =========================

let currentQuestionIndex = 0;


// =========================
// UI Engine
// =========================

function showScreen(screenName){

    document.querySelector(".passport-card").style.display = "none";
    document.getElementById("question-screen").style.display = "none";

    if(screenName === "passport"){
        document.querySelector(".passport-card").style.display = "flex";
    }

    if(screenName === "question"){
        document.getElementById("question-screen").style.display = "block";
    }

}


// =========================
// Load Question
// =========================

function loadQuestion(){

    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById("question-text").textContent =
        currentQuestion.question;

    const answerList = document.getElementById("answer-list");

    answerList.innerHTML = "";

    currentQuestion.answers.forEach(function(answer,index){

        const button = document.createElement("button");

        button.textContent = answer;

        button.className = "answer-btn";

        button.addEventListener("click",function(){

            if(index === currentQuestion.correct){

                alert("Correct!");

            }else{

                alert("Wrong!");

            }

        });

        answerList.appendChild(button);

    });

}


// =========================
// Start Button
// =========================

document.getElementById("start-btn").addEventListener("click",function(){

    showScreen("question");

    loadQuestion();

});
