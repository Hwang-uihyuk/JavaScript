const clock = document.querySelector("#clock");
// #clock 이랑 (h2#clock) 되는지 비교해보기

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    //padStart,padEnd 는 String일 경우에만 가능하다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText= `${hours} : ${minutes} : ${seconds}`
}

getClock();
setInterval(getClock, 1000);