let tg = window.Telegram.WebApp;
tg.expand();

let score = localStorage.getItem("score") || 0;
document.getElementById("score").textContent = score;

function increaseScore() {
    score++;
    document.getElementById("score").textContent = score;
    localStorage.setItem("score", score);
}

// Telegram кнопка отправки результата
tg.MainButton.text = "📢 Отправить результат";
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.sendData(JSON.stringify({ score }));
});
