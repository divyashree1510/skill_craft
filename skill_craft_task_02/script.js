let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("start").addEventListener("click", () => {

    if(timer !== null) return;

    timer = setInterval(stopwatch,1000);

});

document.getElementById("pause").addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

});

document.getElementById("reset").addEventListener("click", () => {

    clearInterval(timer);

    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;

    updateDisplay();

    laps.innerHTML = "";

});

document.getElementById("lap").addEventListener("click", () => {

    if(display.innerText === "00:00:00") return;

    let li = document.createElement("li");

    li.textContent =
        `Lap ${lapCount}: ${display.innerText}`;

    laps.appendChild(li);

    lapCount++;

});

updateDisplay();