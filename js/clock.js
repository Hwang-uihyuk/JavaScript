const clock = document.querySelector("#clock");
// #clock 이랑 (h2#clock) 되는지 비교해보기

function getClock(){
    const date = new Date();
    clock.innerText= `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);