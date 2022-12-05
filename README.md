# JavaScript
황의혁

### 4_변수

- 4.1 변수란 무엇인가?
    - 변수는 프로그래밍 언어에서 **데이터를 관리**하기 위한 핵심 개념이다.
        
        메모리는 데이터를 저장할 수 있는 **메모리 셀의 집합체다**. 메모리 셀 하나의 크기는 1바이트(8비트)이며, 컴퓨터는 메모리 셀의 크기, 즉 1바이트 단위로 데이터를 저장하거나 읽어 들인다.
        
         값이 저장 될 때 메모리 주소는 코드가 실행될 때 메모리의 상황에 따라 임의적으로 결정된다.
        
        ⇒ 따라서 동일한 컴퓨터에서 동일한 코드를 실행해도 코드가 실행될 때마다 값이 저장될 메모리 주소는 변경된다.
        
        이처럼 코드가 실행되기 이전에는 값이 저장된 메모리 주소를 알 수 없으며, 알려 주지도 않는다. 
        
        **즉, 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다. =⇒ 값의 위치를 가리키는 상징적인 이름.** 
        
        **설명하기 :** 
        
        메모리는 메모리 셀의 집합이다( 1byte = 8bit)
        
        컴퓨터는 1바이트 단위로 데이터를 읽어 들이는데
        
        메모리 주소는 코드가 실행 될 때 마다 바뀐다. 
        
        그래서 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 말한다. var res  = 10 이면   ‘0x00001112’라는 주소값에 대입한다고 했을 때,  var로 res를 변수명으로 지정해주고 저 주소값을 항상 가리켜준다. 
        

- 4.2 식별자
    
    변수 이름을 ‘식별자’라고도 한다.
    
    어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.
    
    식별자는 값이 아니라 **메모리 주소**를 기억하고 있는 것이다. 
    
    result ( 변수 이름 = 식별자 ) == >> 0x0669F913 ( 메모리 주소 ) == >> 30 ( 메모리 )
    
- 4.3 변수 선언
    
    변수를 선언하는 것 var, let , const 
    
    var 키워드의 단점 : block-level-scope 을 지원하지 않고 // function-level scope를 지원한다.
    
    undefined : 변수만 선언하고 데이터를 지정해주지 않았을 때.
    
    자바스크립트 엔진 2단계
    
    - 변수 이름을 등록해 자바스크립트 엔진에 변수의 존재를 알린다.
    - 초기화 단계 : 값을 저장을 위해 undefined를 할당해 초기화 한다.
    
    변수 이름은 어디에 등록될까 ?
    
    변수 이름과 변수 값은 실행 컨텍스트 내에 key/value형식인 객체로 등록되어 관리된다.
    
- 4.4 변수 선언의 실행 시점과 변수 호이스팅
    - 호이스팅
        - 런타임되기전 변수들이 먼저 실행된다.
- 4.5 값의 할당
- 4.6 값의 재할당
- 4.7 식별자 네이밍규칙

### 5_표현식과 문
### 5_표현식과 문

- 5.2 리터럴
    - var score = 50 + 50      ,   50은 숫자 리터럴,  +는 연산자
    - 변수 식별자를 참조하면 변수 값으로 평가된다.
    - 식별자 참조는 값을 생성하지는 않지만 값으로 평가되므로 표현식이다.
    - score ===== > 100으로 나오기 때문
    - 값으로 평가될 수 있는 것은 모두 표현식이다.
        - 예시)sum, person.name,arr[1],10 + 20 ,sum = 10, sum  ! == 10
    - 함수/메서드 호출 표현식
        
        square() 
        
        person.getName()
        
        **표현식은 값으로 평가된다.**
        
    - 산술 연산자 + 의 좌항과 우항에는 숫자 값이 위치해야 한다.
        
        이때 숫자 값으로 평가될 수 있는 표현식이라면 숫자 값 대신 사용할 수 있다.
        
    

- 5.4 문(statement) === 명령문
    - ⇒ 프로그램을 구성하는 **기본 단위**이자 **최소 실행 단위**다.
    - 토큰 = > 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미한다.
    - ex) v-ar sum = 1 + 2 ;   var, sum, = , 1 , + , 2;
    - 문은 여러 토큰으로 구성된다.
        - 문의 구분
            - var x;  (변수 선언문)
            - x = 10; (할당문)
            - function foo() {} (함수 선언문)
            - if( x > 1) { console.log(x); } (조건문)
            - for(var i = 0; i<2; i++) { console.log(i) }; (반복문)
            

- 5.5 세미콜론과 세미콜론 자동 삽입 기능
    - 문의 종료
        - 세미콜론은 문의 종료를 의미한다.
        - 문의 종료한 위치를 파악하고 순차적으로 하나씩 문을 실행한다.
        - {} 뒤에는 세미콜론을 붙히지 않는다. ⇒ 자체 종결성
        - but 세미콜론 자동삽입기능(ASI)가 있기 때문에 생략가능 즉, 옵션이다.
- 5.6 표현식인 문과 표현식이 아닌 문
    - var x; 변수 선언문은 값으로 평가 될 수 없으므로 표현식이 아니다.
    - 1, 2, 1+2, x = 1 + 2는 모두 표현식이다.
    - x = 1 + 2는 표현식이면서 완전한 문이기도 하다.
    - 표현식과 문의 구별 방법
        - 문에는 ‘**표현식인 문’**과 ‘**표현식이 아닌 문’이 있다.**
        - 표현식이 아닌 문 ⇒ 변수 선언문
        - 표현식인 문 ⇒ 변수 할당문

### 6_데이터 타입

- 6.1 숫자 타입
    - 정수만을 위한 타입이 없고 모든 수는 실수로 처리한다.
    - ex) 1 과 1.0이 같다고 본다.
    
    ```jsx
    console.log(10/0) ==> Infinity
    console.log(10/-0) ==> -Infinity
    var x = nan; => ReferenceError: nan is not defined 
    =>nan, Nan, NAN은 식별자로 해석함.
    ```
    
- 6.2 문자열 타입
    
    ```jsx
    var string = hello;  //ReferenceError: hello is not defined
    => 문자열을 따옴표로 감싸지 않는다면 식별자로 판단.
    ```
    
- 6.3 템플릿 리터럴
    - 일반적인 문자열은 줄바꿈 허용 x
        - 일반적인 문자열에서 줄바꿈하려면 **이스케이프 시퀸스 사용해야함.**
    - 템플릿 리터럴은 벡틱(``)을 사용해 줄바꿈(개행) 사용가능
    - 표현식 삽입은 템플릿 리터럴 내에서 사용해야한다!
        - console.log(`1+2 = ${1+2}`)
- 6.4 불리언 타입
- 6.5 undefined 타입
    - 선언과 정의
        - 선언 ⇒ 변수
        - 정의 ⇒ 함수
- 6.6 null 타입
    - document.querySelector(’.myclass’)
        - myclass라는 HTML요소가 없다면 NULL
- 6.7 심벌 타입
    - 유일한 프로퍼티 키를 만들기 위해 사용?
- 6.8 객체 타입
    - 원시 타입 vs 객체 타입
        - 자바스크립트를 이루고 있는 모든 것이 객체
- 6.9 데이터 타입의 필요성
    - 데이터 공간의 활용
        - ex 숫자 타입이면 숫자 타입의 맞는 데이터 공간을 확보해준다.( 8바이트)
    - 필요성 3가지
        - 데이터 타입에 맞게 메모리 공간을 확보
        - 변수를 참조 할때 데이터 타입에 맞게 한 번의 읽어들일 메모리 공간의 크기를 결정하기 위해
        - 2진수를 어떤 데이터 타입에 맞게 해석할 건지
            - 0100 0001을 숫자로 해석하면 65
            - 문자열로 해석하면 ‘A’
- 6.10 동적 타이핑
    - 정적 타입 언어
        - c언어 ⇒ 변수 선언할 때 데이터 타입 정해진다.
    - 동적 타입 언어
        - js ⇒ 변수 선언이 아닌 할당 할때 데이터 타입이 정해진다.
        - 유연성이 좋지만 신뢰성이 떨어진다 ⇒ typescript가 나온이유( js를 동적 ⇒ 정적으로)
        

### **7_연산자**

- 산술 연산자
    - 이항 산술 연산자(+,-, / , *)
    - 단항 산술 연산자
        - 앞에 위치한 전위 증가
            
            ```jsx
            var x = 5, result;
            result = x++
            console.log(result, x) // 5,6
            전위 증가는 할당을 먼저하고, 그 다음 증가한다.
            ```
            
        - 뒤에 위치한 후위 증가
            
            ```jsx
            result = ++x
            console.log(result, x) //7,7
            ```
            
        - 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면
            
            ```jsx
            var x = '1' (문자열 타입)
            console.log(+x); //1(숫자 타입)
            ```
            
        - + 연산자는 하나 이상이 문자열일 경우에는 문자열 연결 연산자로 동작한다.
            
            ```jsx
            1 + '2' = '12'
            ```
            
- 7.2 할당 연산자
- 7.3 비교 연산자
    - ==  동등 비교
        - x와 y값이 같을때
        - 0 == ‘’ //true
        - 0 ==’0’ //true
    - === 일치 비교
        - 타입과 값이 일치해야한다.
- 7.4 삼항 연산자
    
    ```jsx
    var x = 10
    // 0은 false로 암묵적 타입이 변환된다.
    var result = x % 2 ? '홀수' : '짝수'
    //result 는 짝수.
    ```
    
- 7.5 논리 연산자
    - || 논리합(or)
    - && 논리곱(and)
    - ! 부정(not)
- 7.6 쉼표 연산자
- 7.7 그룹 연산자
    - () 친 곳을 먼저 연산
- 7.8 typeof 연산자
    
    ```jsx
    typeof 1 // 'Number'
    typeof true // 'boolean'
    typeof [] // 'object'
    typeof null // 'object' !!!!자바스크립트의 첫번째 버그 !!!!! null은 타입으로 
    																								사용하지말고 (===) 일치 연산자를 쓰자.
    ```
    
- 7.9 지수 연산자
    - 2 ** 3 = 8
    - Math.pow(2,3) = 8
- 7.10 그 외의 연산자
- 7.11 연산자의 부수 효과
    - 다른 코드의 영향을 주는 것이 부수 효과
- 7.12 연산자 우선순위
    - 책 참고
- 7.13 연산자 결합순서
    - 책 참고

### 8_제어문

- 8.1 블록문
- 8.2 조건문
    - if .. else문
        - 삼항 연산자 가능 7.4절 참고.
        
        ```jsx
        var x = 2;
        // 0은 false로 취급한다.
        var result = x % 2 ? '홀수' : '짝수';
        
        //세 개 이상도 가능한대 
        //가독성이 안좋아서 그냥 if .. else쓰는게 좋음.
        ```
        
    - switch
- 8.3 반복문
    - for, while, do ~ while(무조건 한 번은 실행)
- 8.4 break문
    - 이중 반복문일때는 break를 슨 scope에서만 나옴
- 8.5 continue문
    - 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.






### 10_객체 리터럴

- 10.1 객체란?
    - 자바스크립트에서 원시 값을 제외한 모든 값들은 대부분 객체로 이루어져 있다.
        - 원시 값 : 변경 불가능한 값//  데이터 값 자체가 안된다는 것이지 변수는 변경이 가능하다.
        - 객체 : 변경 가능한 값
        
        ```jsx
        var counter = {
        num : 0,  // 프로퍼티! //객체의 상태를 나타내는 값(data)
        increase: function() {   //메서드! : 프로퍼티를 참조하고 조작할 수 있는 동작
        this.num ++ ;
        	}
        };
        ```
        
- 10.2 객체 리터럴에 의한 객체 생성
    - 클래스 기반 객체지향 언어
        - java, C++
    - 프로토타입 기반 객체지향 언어
        - javaScript
        - 객체 생성 방법
            - 객체 리터럴
                - 리터럴이란? 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용하여 값을 생성하는 표기법, 객체 리터럴은 객체를 생성하기 위한 표기법.
                
                ```jsx
                객체 리터럴은 이와 같이 객체를 표기하는 방법이다.
                var counter = {
                num : 0,  // 프로퍼티! //객체의 상태를 나타내는 값(data)
                increase: function() {   //메서드! : 프로퍼티를 참조하고 조작할 수 있는 동작
                this.num ++ ;
                	}
                };
                
                ```
                
- 10.3 프로퍼티
    - 프로퍼티 키
        - 아래코드에서 ‘num’은 프퍼티 키
    - 프로퍼티 값
        - 아래코드에서 프로퍼티 키 ‘num’에  프로퍼티 값은 ‘0’이다.
    
    ```jsx
    var counter = {
    num : 0,   
    increase: function() {   //메서드! : 프로퍼티를 참조하고 조작할 수 있는 동작
    this.num ++ ;
    	}
    };
    ```
    
- 10.4 메서드
- 10.5 프로퍼티 접근
    - 마침표 프로퍼티 접근 연산자
    - 대괄호 표기법
        
        ```jsx
        var person = {
        name : 'Lee'
        };
        
        console.log(person.name) // 마침표 프로퍼티 접근 연산자
        console.log(person[name]) // 대괄호 표기법에서는 반드시 따옴표로 감싼 문자열
        													// ReferenceError : name is not defined
        
        console.log(person['name']) // Lee
        ```
        
- 10.6 프로퍼티 값 갱신
    - 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
- 10.7 프로퍼티 동적 생성
    - 존재하지 않는 프로퍼티를 생성하면 동적으로 생성되어 추가된다.
        
        ```jsx
        var person = {
        	name : 'Lee'
        }
        
        person.age = 20
        
        console.log(person) // {name : 'Lee' , age : 20 } 동적으로 생성된다.
        ```
        
- 10.8 프로퍼티 삭제
    - delete 연산자 활용
- 10.9 ES6에서 추가된 객체 리터럴의 확장 기능








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
