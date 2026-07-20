// =========================
// Theme
// =========================

document.getElementById("passport-title").textContent = theme.info.title;
document.getElementById("passport-subtitle").textContent = theme.info.subtitle;
document.getElementById("start-btn").textContent = theme.info.startButton;

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

function showScreen(screenName) {

    document.querySelector(".passport-card").style.display = "none";
    document.getElementById("question-screen").style.display = "none";

    if (screenName === "passport") {
        document.querySelector(".passport-card").style.display = "flex";
    }

    if (screenName === "question") {
        document.getElementById("question-screen").style.display = "block";
    }

}


// =========================
// Load Question
// =========================

function loadQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById("question-text").textContent =
        currentQuestion.question;

    const answerList = document.getElementById("answer-list");

    answerList.innerHTML = "";

    currentQuestion.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";

        button.addEventListener("click", function () {

            // Khóa tất cả nút
            document.querySelectorAll(".answer-btn").forEach(function (btn) {
                btn.disabled = true;
            });

            // Đổi màu theo Theme
            if (index === currentQuestion.correct) {

                button.style.backgroundColor = theme.colors.correct;
                button.style.color = "white";

            } else {

                button.style.backgroundColor = theme.colors.wrong;
                button.style.color = "white";

            }

            // Sang câu tiếp
            setTimeout(function () {

                currentQuestionIndex++;

                if (currentQuestionIndex < questions.length) {

                    loadQuestion();

                } else {

                    alert("Hết câu hỏi!");

                }

            }, 800);

        });

        answerList.appendChild(button);

    });

}


// =========================
// Start Button
// =========================

document.getElementById("start-btn").addEventListener("click", function () {

    currentQuestionIndex = 0;

    showScreen("question");

    loadQuestion();

});
