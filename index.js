let timerStart = document.querySelector("#timerStart")
let timerValue = document.querySelector("#timerValue")
let timerStop = document.querySelector("#timerStop")
let timerReset = document.querySelector("#timerReset")

timerStart.addEventListener("click", timerStartFunction)
timerStop.addEventListener("click", timerStopFunction)
timerReset.addEventListener("click", timerResetFunction)

timerValue.innerText = null
var timer = null


function timerStartFunction() {
   if(timer) {
       currentTime = setInterval(function (){
        ongoingTime = parseInt(timerValue.innerText)
        timerValue.innerText = ongoingTime + 1
       },1000)
   } else{
    timer = new Date().getTime()
    var now = new Date().getTime()
    let newTimerValue = Math.round(Math.abs(now - timer) / 1000)
    currentTime = setInterval(function () {
        newTimerValue += 1
        timerValue.innerText = newTimerValue
    }, 1000)
   }
}

function timerStopFunction(stop) {
    clearInterval(currentTime)
    let past = timerValue.innerText
    alert(`Passed time: ${past} sec.`)
}

function timerResetFunction() {
    clearInterval(currentTime)
    timer = null
    timerValue.innerText = timer
}




