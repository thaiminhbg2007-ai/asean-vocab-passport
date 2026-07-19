

document.getElementById("passport-title").textContent = theme.title;

document.getElementById("passport-subtitle").textContent = theme.subtitle;

document.getElementById("start-btn").textContent = theme.startButton;
document.getElementById("passport-title").style.color = theme.colors.title;
document.getElementById("passport-subtitle").style.color = theme.colors.subtitle;
document.getElementById("start-btn").style.color = theme.colors.buttonText;
document.getElementById("start-btn").style.backgroundColor = theme.colors.buttonBackground;
document.getElementById("start-btn").addEventListener("click", function () {

    document.querySelector(".passport-card").style.display = "none";

    document.getElementById("question-screen").style.display = "block";

    const currentQuestion = questions[0];

document.getElementById("question-text").textContent =
    currentQuestion.question;
    const answerList = document.getElementById("answer-list");

answerList.innerHTML = "";

currentQuestion.answers.forEach(function(answer){

    const button = document.createElement("button");

    button.textContent = answer;

    button.className = "answer-btn";

    answerList.appendChild(button);

});

});
