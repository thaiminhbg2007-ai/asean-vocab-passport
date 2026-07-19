const theme = {

    title: "ASEAN Vocab Passport",

    subtitle: "Learn English through ASEAN Football",

    startButton: "Start Journey"

};

document.getElementById("passport-title").textContent = theme.title;

document.getElementById("passport-subtitle").textContent = theme.subtitle;

document.getElementById("start-btn").textContent = theme.startButton;
document.getElementById("start-btn").addEventListener("click", function () {

    alert("Quiz sẽ bắt đầu ở bước tiếp theo!");

});
