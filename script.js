// =========================
// Theme
// =========================

function applyTheme(){

    document.getElementById("passport-title").textContent = theme.info.title;
    document.getElementById("passport-subtitle").textContent = theme.info.subtitle;
    document.getElementById("start-btn").textContent = theme.info.startButton;

    document.getElementById("passport-title").style.color = theme.colors.title;
    document.getElementById("passport-subtitle").style.color = theme.colors.subtitle;
    document.getElementById("start-btn").style.color = theme.colors.buttonText;
    document.getElementById("start-btn").style.backgroundColor = theme.colors.buttonBackground;

}

applyTheme();


// =========================
// Question Engine
// =========================

let currentQuestionIndex = 0;


// =========================
// Animation Engine
// =========================

function playAnswerAnimation(isCorrect, clickedButton){

    document.querySelectorAll(".answer-btn").forEach(function(btn){

        btn.disabled = true;

    });

    if(isCorrect){

        clickedButton.style.backgroundColor = theme.colors.correct;
        clickedButton.style.color = "white";

    }else{

        clickedButton.style.backgroundColor = theme.colors.wrong;
        clickedButton.style.color = "white";

    }

    setTimeout(function(){

        nextQuestion();

    },800);

}


// =========================
// Question Controller
// =========================

function nextQuestion(){

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){

        loadQuestion();

    }else{

        alert("Hết câu hỏi!");

    }

}


// =========================
// UI Engine
// =========================

function showScreen(screenName){

    document.querySelector(".passport-card").style.display = "none";
    document.getElementById("question-screen").style.display = "none";

    if(screenName==="passport"){

        document.querySelector(".passport-card").style.display="flex";

    }

    if(screenName==="question"){

        document.getElementById("question-screen").style.display="block";

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

            const isCorrect = index === currentQuestion.correct;

            playAnswerAnimation(isCorrect,button);

        });

        answerList.appendChild(button);

    });

}


// =========================
// Start Button
// =========================

document.getElementById("start-btn").addEventListener("click",function(){

    currentQuestionIndex = 0;

    showScreen("question");

    loadQuestion();

});
