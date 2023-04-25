
function updateClock(){
    let hour=new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();
    let ampm="AM";
    if(hour>12){
hour=hour-12;
ampm="PM";
    }
    const hourEl=window.document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");
    hourEl.innerText=hour;
    minuteEl.innerText=minutes;
    secondEl.innerText=seconds;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();
