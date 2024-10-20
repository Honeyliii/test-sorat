const theTimer=document.querySelector(".timer");
const textArea=document.querySelector("#test-area");]
const origintext=document.querySelector("#origin-text p").innerHTML;

var timer=[0,0,0,0];
var timerrunning=false

function leadingzero(time){
    if(time<=9)
    {
        time="0"+time;
    }
    return time;
}






function runTimer(){
let currentTime= leadingzero(timer[0])+":"+leadingzero(timer[1])+":"+leadingzero(timer[2]);

theTimer.innerHTML=currentTime;

timer[3]++;

timer[0]=Math.floor((timer[3]/100)/60);
timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));



}
function spellcheck(){
    let textentered=testArea.value;
     let origintextmatch=origintext.substring(0,textentered.length);
     if(textentered==origintext){

     }else{
        if(textentered==origintextmatch)
     }

}


function start(){
 let textenteredlength=textArea.value.length;
 if(textenteredlength==0 && !timerrunning)
 {timerrunning=true;
    setInterval(runTimer,10);


 }


}


textArea.addEventListener("keypress",start);
