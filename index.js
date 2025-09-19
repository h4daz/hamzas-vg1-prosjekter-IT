const hourEL = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
 
updateClock();
 
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
 

    if(h>12)
        a = "PM";




    /* if(s < 10) {
        s= "0" + s;
    }
 
    if(m < 10) {
        s= "0" + m;
    }
 
    if(h < 10) {
        h= "0" + h;
    } */
 
    // Conditional Operator Eller Ternary Operator
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
 
    hourEL.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = a;

    //event
  setTimeout(() => {
    updateClock();
  }, 1000);



}
 