
var hr = document.getElementById('alarmhrs');
var min = document.getElementById('alarmmins');
var sec = document.getElementById('alarmsecs');
var ap = document.getElementById('ampm');
var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/sirens/schoolbell.wav");
sound.loop = true;
var time
var flag = true

function showTime() {
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = addZero(h)
    m = addZero(m)
    s = addZero(s)

    time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}

function hoursMenu() {
    for (i = 1; i <= 12; i++) {
        hr.options[hr.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function minMenu() {
    for (i = 0; i <= 59; i++) {
        min.options[min.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function secMenu() {
    for (i = 0; i <= 59; i++) {
        sec.options[sec.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}


function alarmSet() {
    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + " " + selectedAP;

    hr.disabled = true;
    min.disabled = true;
    sec.disabled = true;
    ap.disabled = true;
    flag = true
    setInterval(function () {
        if (alarmTime == time && flag) {
            sound.play();
        }
    }, 1000);
}

function alarmClear() {
    flag = false
    hr.disabled = false;
    min.disabled = false;
    sec.disabled = false;
    ap.disabled = false;
    sound.pause();
}

function addZero(time) {
    return (time < 10) ? "0" + time : time;
}

hoursMenu();
minMenu();
secMenu();
showTime();
