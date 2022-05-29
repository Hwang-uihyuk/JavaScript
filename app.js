const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleLinkClick(){
    alert("click")
}
const link = document.querySelector("a");


function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username)
} 

loginForm.addEventListener("submit",onLoginSubmit)  //submit은 엔터나 버튼을 클릭할때작동한다.
link.addEventListener("click",handleLinkClick)


// 기본동작을 멈추는 동작은 우리가 어떤 함수를 언제 사용했고 속성을 보고 싶을때
// 기본동작을 멈추게 해줘야하는데 