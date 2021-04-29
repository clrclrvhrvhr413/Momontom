const h1 = document.querySelector(".js-clock"),
    SECOND = 1000;


function loadTime() {
    const time = new Date,
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    h1.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}
function init() {
    loadTime();
    setInterval(loadTime, SECOND);
}
init();