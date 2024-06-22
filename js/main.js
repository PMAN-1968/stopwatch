// let hr = document.getElementById("hours")
// let mins = document.getElementById("mins")
// let secs = document.getElementById("secs")

function updateClock(){
    let time = document.getElementById("time-clock")
    let now = new Date();

    hr = String(now.getHours()).padStart(2, "0");
    mins = String(now.getMinutes()).padStart(2, "0");
    secs = String(now.getSeconds()).padStart(2, "0");
    time.innerHTML = `${hr}:${mins}:${secs}`
}

// updateClock();

setInterval(updateClock, 1000);

// console.log(`${hr}:${mins}:${secs}`);
// document.write(`${hr}:${mins}:${secs}`);

// console.log(mins);
// console.log(secs);