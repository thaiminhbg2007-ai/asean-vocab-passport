

document.getElementById("passport-title").textContent = theme.title;

document.getElementById("passport-subtitle").textContent = theme.subtitle;

document.getElementById("start-btn").textContent = theme.startButton;
document.getElementById("passport-title").style.color = theme.colors.title;
document.getElementById("passport-subtitle").style.color = theme.colors.subtitle;
document.getElementById("start-btn").style.color = theme.colors.buttonText;
document.getElementById("start-btn").style.backgroundColor = theme.colors.buttonBackground;
document.getElementById("start-btn").addEventListener("click", function () {

    alert("Quiz sẽ bắt đầu ở bước tiếp theo!");

});
