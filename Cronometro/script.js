let appendHour = document.getElementById('hour');
let appendMinutes = document.getElementById("minute");
let appendSeconds = document.getElementById("second");
let appendMiliseconds = document.getElementById("milisecond");
let hour = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let cron;
let start = document.getElementById("start").addEventListener('click',startTimer);
let reset = document.getElementById("reset").addEventListener('click',resetTimer);
let pause = document.getElementById("pause").addEventListener('click',pauseTimer);

function startTimer(){
    pauseTimer();
    cron = setInterval(()=>{timer()},10)
}
function resetTimer(){
    appendHour.innerHTML = '00';
    appendMinutes.innerHTML = '00';
    appendSeconds.innerText = '00';
    appendMiliseconds.innerText = '000';
    
}
function pauseTimer(){
    clearInterval(cron)
}

function timer(){
    if((miliseconds += 10) == 1000){
        miliseconds = 0;
        seconds ++
    }
    if(seconds >= 60){
        seconds = 0;
        minutes ++
    }
    if(minutes >=60){
        minutes =0;
        hour ++ 
    }

    appendHour.innerHTML = rightTime(hour);
    appendMinutes.innerHTML = rightTime(minutes);
    appendSeconds.innerText = rightTime(seconds)
    appendMiliseconds.innerText = rightTime(miliseconds);


}
    
function rightTime(input){
    return input > 10 ? input : `0${input}`
}