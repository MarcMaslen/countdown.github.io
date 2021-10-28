const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

//Put the 
const CountDownDate = "24 Dec 2021";

function countdown() {
    const newYearsDate = new Date(CountDownDate
    );
    const PresentDate = new Date();

    const totalSeconds = (newYearsDate - PresentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);