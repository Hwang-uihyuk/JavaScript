# JavaScript


https://user-images.githubusercontent.com/79883776/178311896-840e0ec7-47d5-489c-a2f1-5e98760ce2db.mp4



const textNumVal1 = document.querySelector("#Num1");
const textNumVal2 = document.querySelector("#Num2");
const btn = document.querySelector(".btn1");
const res = document.querySelector(".res");
const machineRes = document.querySelector(".machineVal");

function Play(event) {
  event.preventDefault();   //preventDefault()
  const res1 = parseInt(textNumVal1.value, 10);   //paseInt를 쓸때에는 'parsInt(string,진수)' 뒤에 진수를 적어줘야한다.
  const res2 = parseInt(textNumVal2.value, 10);
  const randomRes = parseInt(Math.random() * res1, 10);
  console.log(res1, res2, randomRes);

  if (randomRes === res2) {
    res.innerText = res2; //innerText 쓸 때 '=' 쓰는거 주의하기
    machineRes.innerText = randomRes + " You Win!!!!!!";
  } else if (randomRes !== res2) {
    res.innerText = res2;
    machineRes.innerText = randomRes;
  }
}

btn.addEventListener("click", Play);







<h1>ChristmasEve time </h1>
Challenge goals:
Date와setInterval함수들을 사용해 크리스마스까지 며칠이 남았는지 알려주는 시계를 만드세요. (12월 25일)


제출방법
![ChristMasEve time](https://user-images.githubusercontent.com/79883776/178781741-b3c8fea4-753d-40bc-8ac7-206a6e69ed41.gif)





const clockTitle = document.querySelector(".js-clock");

function time() {
  const date1 = new Date(2022, 11, 24, 0, 0, 0);

  const nowTime = new Date();
  const numres = date1.getTime() - nowTime.getTime();

  const day = Math.floor(numres / 1000 / 60 / 60 / 24);
  const hours = Math.floor((numres % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((numres % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((numres % (1000 * 60)) / 1000);

  clockTitle.innerText = `${day}d ${hours}h ${minute}m ${seconds}s`;

  //console.log(date1.getTime()); 확인 ok
  //console.log(nowTime.getTime()); 확인 ok
  // console.log(numres); 확인 ok
}
setInterval(time, 1000);
//1000분의 1초 단위로 나타낸 것이다.

//그러면 크리스마스 까지의 시간을 getTime으로 밀리세컨드로구한후
//현재까지의 시간과 뺀후 일,시간,분,초로 구해주면된다.
