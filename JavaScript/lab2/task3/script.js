
let time = Number(prompt("Enter hour in 24 format : "))

if (time <= 24 ) {
    let am_pm = time >= 12 && time != 24 ? 'pm' : 'am'
    time = (time % 12) || 12
    time = `Time  -  ${time}  ${am_pm}`
    alert(time)
}
else {
    alert("please refresh and enter correct hour")
}

