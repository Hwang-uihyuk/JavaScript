const loginForm = document.querySelector("#login-form");
/*버튼*/const loginInput = document.querySelector("#login-form input");
/*로그인하면 보이는 창*/const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden";  
const USERNAME_KEY = "username" 
                    /*string만 포함된변수는 대문자로 표기하고 string을 저장하고
                    싶을때 사용한다.*/
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);   
}
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event)
    alert("click")
}

loginForm.addEventListener("submit",onLoginSubmit)  //submit은 엔터나 버튼을 클릭할때작동한다.
const savedUsername = localStorage.getItem(USERNAME_KEY)
console.log(savedUsername)
if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
   paintGreetings(savedUsername);
}

// 기본동작을 멈추는 동작은 우리가 어떤 함수를 언제 사용했고 속성을 보고 싶을때
// 기본동작을 멈추게 해줘야하는데 