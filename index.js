var upward=document.getElementById("addminute")
var downbut=document.getElementById("decminute")
var breakup=document.getElementById("addbreakminute")
var breakdown=document.getElementById("decbreakminute")
var minute=document.getElementById("setminuteminute")
var second=document.getElementById("setminutesec")
var breakminute=document.getElementById("breakminute")
var stop = document.getElementById("resetbtn");
var start = document.getElementById("Startbtn");
var setmin = document.getElementById("setminute");
var reqclass=document.getElementById("midconatiner1");
var sessioncounttag=document.getElementById("sessionname")
upward.addEventListener("click",increase)
downbut.addEventListener("click",decrease1)
breakup.addEventListener("click",increase2)
breakdown.addEventListener("click",decrease2)
var isStart = false;
var isPause = false;
var sessioncount=1;


let arr = [0, 0];
function increase(event){
    var upmin=parseInt(setmin.innerText)
    setmin.innerText=upmin+1;
}
function decrease1(){
    if(parseInt(setmin.innerText)>1){
    var upmin=parseInt(setmin.innerText)
    setmin.innerText=upmin-1;
    }

} 
function increase2(event){
    var upbreakmin=parseInt(breakminute.innerText)
    breakminute.innerText=upbreakmin+1;

}
function decrease2(event){
    var downbreakmin=parseInt(breakminute.innerText)
    breakminute.innerText=downbreakmin-1;
    

}
start.addEventListener("click",startpause);
stop.addEventListener("click",resetcode);


function startpause(event){
    console.log("hello")
    let setmin1 = parseInt(setmin.innerHTML);
    let breakminute1 = parseInt(breakminute.innerHTML);
    let isSessionOver = false;
    let sessionSeconds = setmin1*60;
    let breakSeconds = breakminute1*60;
    if(event.target.id === "Startbtn" && isStart){
        isStart = false;
        isPause = true;
        Startbtn.innerHTML = "Start";
        console.log("is paused", sessionSeconds, breakSeconds, arr);
        clearInterval(interval1);
    }
    else{
        isStart=true;
        Startbtn.innerHTML = "Pause";
        interval1 = setInterval(progressDecrementer, 1000);
    }
    if(isStart || isPause){
        upward.setAttribute("disabled", "True");
        downbut.setAttribute("disabled", "True");
        breakup.setAttribute("disabled", "True");
        breakdown.setAttribute("disabled", "True");
    }
    function progressDecrementer() {
        if(isPause){
            isPause = false;
            sessionSeconds = arr[0];
            breakSeconds = arr[1];
        }
        if(!isSessionOver){
            
            reqclass.style.border="5px rgb(17, 158, 158) solid"
            minute.style.color="rgb(17, 158, 158)"
            second.style.color="rgb(17, 158, 158)"

            if(parseInt(sessionSeconds/60) < 10){

                minute.innerHTML = "0"+parseInt(sessionSeconds/60);
            }
            else{
                minute.innerHTML = parseInt(sessionSeconds/60);

            }
            if(parseInt(sessionSeconds%60) < 10){

                second.innerHTML = "0"+parseInt(sessionSeconds%60);
            }
            else{
                second.innerHTML = parseInt(sessionSeconds%60);

            }
            
          
            sessionSeconds--;
            arr[0] = sessionSeconds;
            if(sessionSeconds < 1){
                isSessionOver = true;
                sessionSeconds = setmin1*60;
            }
        }
        if(isSessionOver){
            reqclass.style.border="5px red solid"
            minute.style.color="red"
            second.style.color="red"
            if(parseInt(breakSeconds/60) < 10){

                minute.innerHTML = "0"+parseInt(breakSeconds/60);
            }
            else{
                minute.innerHTML = parseInt(breakSeconds/60);

            }
            if(parseInt(breakSeconds%60) < 10){

                second.innerHTML = "0"+parseInt(breakSeconds%60);
            }
            else{
                second.innerHTML = parseInt(breakSeconds%60);

            }
            
     
            breakSeconds--;
            arr[1] = breakSeconds;
            if(breakSeconds < 1){
                isSessionOver = false;
                sessioncount++;
                sessioncounttag.innerHTML=sessioncount;
                breakSeconds = breakminute1*60;
            }

        }
    }

}
function resetcode(){
    minute.innerHTML = "00";
    second.innerHTML = "00";
    clearInterval(interval1);
    isStart = false;
    isPause = false;
    Startbtn.innerHTML = "Start";
    upward.removeAttribute("disabled");
    downbut.removeAttribute("disabled");
    breakup.removeAttribute("disabled");
    breakdown.removeAttribute("disabled");
    return
}
