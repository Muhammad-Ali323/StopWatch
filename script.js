let display= document.getElementById("display")
let startBtn= document.getElementById("start")
let reset= document.getElementById("reset")
let stopBtn=document.getElementById("stop")
let msec=0
let sec=0
let min=0
timerId= null;
startBtn.addEventListener('click', function(){
    // if(timerId!==null){
    //     clearInterval(timerId)
    // }
    timerId=setInterval(timerStart, 10)
})

stopBtn.addEventListener('click', function(){
    clearInterval(timerId)
})

reset.addEventListener('click', function(){
    clearInterval(timerId)
    display.innerHTML= `00 : 00 : 00`
    msec=`0`
    sec=`0`
    min=`0`
})

function timerStart(){
    msec++
    if(msec==60){
        msec=0
        sec++
        if(sec==60){
            sec=0
            min++
        }
    }
    msecString=msec <10?`0${msec}`:`${msec}`
    secString=sec <10?`0${sec}`:`${sec}`
    minString=min <10?`0${min}`:`${min}`
    display.innerHTML=`${minString} : ${secString} : ${msecString}`
}