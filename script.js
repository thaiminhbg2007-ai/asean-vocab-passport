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
// Audio Engine
// =========================

function playSound(type){

    const path = theme.sounds[type];

    if(path===null) return;

    const audio = new Audio(path);

    audio.volume = theme.sounds.volume;

    audio.play();

}


// =========================
// Result Engine
// =========================

const result={

    total:0,

    correct:0,

    wrong:0,

    accuracy:0,

    perfect:false

};

function resetResult(){

    result.total=questions.length;
    result.correct=0;
    result.wrong=0;
    result.accuracy=0;
    result.perfect=false;

}

function calculateResult(){

    result.wrong=result.total-result.correct;

    result.accuracy=Math.round(result.correct/result.total*100);

    result.perfect=result.correct===result.total;

}


// =========================
// Reward Engine
// =========================

const reward={

    title:"",

    message:"",

    type:""

};

function calculateReward(){

    if(result.perfect){

        reward.type="perfect";

        reward.title=theme.rewards.perfect.title;

        reward.message=theme.rewards.perfect.message;

    }

    else{

        reward.type="normal";

        reward.title=theme.rewards.normal.title;

        reward.message=theme.rewards.normal.message;

    }

}


// =========================
// Question Engine
// =========================

let currentQuestionIndex=0;


// =========================
// Animation Engine
// =========================

function runAnimation(type,button){

    switch(type){

        case "greenFlash":

            button.style.backgroundColor=theme.colors.correct;
            button.style.color="white";
            break;

        case "redFlash":

            button.style.backgroundColor=theme.colors.wrong;
            button.style.color="white";
            break;

        case "fade":

            document.getElementById("question-screen").style.opacity="0.4";

            setTimeout(function(){

                document.getElementById("question-screen").style.opacity="1";

            },200);

            break;

    }

}

function playAnswerAnimation(isCorrect,clickedButton){

    document.querySelectorAll(".answer-btn").forEach(function(btn){

        btn.disabled=true;

    });

    if(isCorrect){

        playSound("correct");

        runAnimation(theme.animations.correct,clickedButton);

    }

    else{

        playSound("wrong");

        runAnimation(theme.animations.wrong,clickedButton);

    }

    setTimeout(function(){

        playSound("next");

        runAnimation(theme.animations.next,clickedButton);

        nextQuestion();

    },theme.animations.duration);

}


// =========================
// Question Controller
// =========================

function nextQuestion(){

    currentQuestionIndex++;

    if(currentQuestionIndex<questions.length){

        loadQuestion();

    }

    else{

        calculateResult();

        calculateReward();

        console.log(result);

        console.log(reward);

        alert(

            reward.title+

            "\n"+

            reward.message+

            "\n\nCorrect: "+result.correct+

            "\nWrong: "+result.wrong+

            "\nAccuracy: "+result.accuracy+"%"

        );

    }

}


// =========================
// UI Engine
// =========================

function showScreen(screenName){

    document.querySelector(".passport-card").style.display="none";

    document.getElementById("question-screen").style.display="none";

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

    const currentQuestion=questions[currentQuestionIndex];

    document.getElementById("question-text").textContent=currentQuestion.question;

    const answerList=document.getElementById("answer-list");

    answerList.innerHTML="";

    currentQuestion.answers.forEach(function(answer,index){

        const button=document.createElement("button");

        button.textContent=answer;

        button.className="answer-btn";

        button.addEventListener("mouseenter",function(){

            playSound("hover");

        });

        button.addEventListener("click",function(){

            playSound("click");

            const isCorrect=index===currentQuestion.correct;

            if(isCorrect){

                result.correct++;

            }

            playAnswerAnimation(isCorrect,button);

        });

        answerList.appendChild(button);

    });

}


// =========================
// Start Button
// =========================

document.getElementById("start-btn").addEventListener("click",function(){

    playSound("click");

    currentQuestionIndex=0;

    resetResult();

    showScreen("question");

    loadQuestion();

});
