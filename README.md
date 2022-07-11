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
