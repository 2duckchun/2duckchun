## 1월 12일 TIL
- express와 mongoDB를 이용하여 CRUD 중 Update를 실습해보았다.
- '당장'에 할 수 있는 것은 mongodb의 메서드를 잘 익혀서 사용하는 것이다.
- Mongodb 메서드 (3.8 버전 기준)
   - db.client('데이터베이스이름') : db라는 변수에 데이터베이스 할당
   - db.collection('컬렉션이름').find().toArray((err, result) => {})
   - db.collection('컬렉션이름').findOne({데이터: 값}, (err, result) => {})
   - db.collection('컬렉션이름').insertOne({데이터: 값}, (err, result) => {})
   - db.collection('컬렉션이름').deleteOne({데이터: 값}, (err, result) => {})
   - db.collection('컬렉션이름').updateOne({데이터: 값}, {데이터: 값}, (err, result) => {})
- 인증 방식에 대해서도 공부를 해야한다
   - session
   - JWT (JSON WEB TOKEN)
   - OAuth

## 1월 15일 TIL (면접 스터디 회의)
- 앞으로 진행할 면접 스터디를 어떻게 진행할지에 대해 회의를 함
**회의 내용**
1월 27일 금요일 2시 첫 모임
- 1분 자기소개
- 내 이력서 기준 모의 면접
- 본인의 목표 회사 1곳 설명할 수 있을 정도로 알아보고 가져오기

1. 내 이력서 출력 후 모의면접
2. 매주 금요일or토요일 2시경 모임
3. 교안 면접질문
4. 줌으로도 연습하기
5. 노션 생성
    - 피드백 양식 만들기 (단점, 장점, 보완할 점)
    - 인터뷰 경험 작성

면접 컨벤션
1. 무조건 실전처럼 하기
2. 피드백시 공격적으로 안하기

## 1월 16일 TIL
- 알바를 하는 날이라 공부를 많이 하지 못함.
- 유데미 NodeJS 강의를 일부 들음.
   - http 모듈을 사용해봄
   - nodeJS에서 body를 송수신할때는 버퍼를 이용함. 이것을 버퍼 객체, toString 등을 이용해서 바꿔줄 수 있음 (bodyParser가 왜 필요한지 나오는 듯)
   - 비동기적 상황을 잘 이해하고 코딩해야 함. 서버차원에서 새롭게 느꼈음.
   - url을 작성할때 '/message'와 같이 슬래시를 빼먹지 말자. (이것때문에 오랫동안 고생함)
- 백준 4문제 가량을 풀었음.
   - 주사위 문제는 내 식으로 한번 처음부터 끝까지 고쳐볼 필요가 있음.
   - input을 정제한 후 프로그래머스처럼 solution을 만들어서 푸는 것이 상당히 매력적임을 알게되었음.

## 1월 17일 TIL
- 알바를 마무리하는 날이다.
- 판교의 한 회사에서 면접제의가 왔고, 스터디 모임 면접에도 통과해서 스터디도 함께 하게 되었다.
- 한 회사의 CTO께서 본인의 시간을 할애하여 면접을 봐주시는 것이니 준비를 빡세게 해야함을 느꼈다.
- 일단 내일은 내 스스로에게 질문을 세가지 해볼 생각이다.
### 스스로 하는 질문
1. 나는 왜 개발자가 되고 싶은가?
2. 왜 프론트엔드 개발자로 지원했는가?
3. 어떤 개발자가 되고 싶은가?
- 알고리즘에서는 **유클리드 호제법**을 문제에 도입해보고자 한다. 프로그래머스 0레벨이다.

## 1월 18일 TIL
### 백준을 프로그래머스처럼 풀기 위한 방법
- **readline**이나 **fs.readFileSync**의 활용법을 다 깨우친 상태에서
- 입력된 값을 사용할 수 있도록 parse한 상태로
- 별도의 문제풀이를 위한 solution 함수를 만들어 문제를 해결한다.
- 위와 같이 자료를 가공한다면 백준도 프로그래머스처럼 풀 수 있다.

## 1월 19일 TIL
- 이벤트루프에 대해 블로그에 포스팅함. https://2duckchun.tistory.com/362
### npm 스크립트의 이해
- NPM : node package manager
- 코어 모듈 : npm으로 설치하지 않아도 사용할 수 있는 NodeJS 기본 모듈
- 3rd Party 모듈 : 노드 코어모듈이 아닌 npm으로 설치해야 하는 패키지
- npm start를 설정하면 좋은 이유
   1. 프로젝트를 공유할 때, 팀원들이 entry를 찾을 수고를 덜어줌.
   2. 프로그램을 실행시킬 때 작업 폴더에서 npm start만 입력하면 되므로 개발 시간을 약간 단축시켜 줄 수 있음.
- npm start는 특별한 스니펫이며, npm start를 제외한 npm 실행 스크립트는 **npm run 스크립트** 형식으로 입력해야함.
### npm install
- --save : 패키지가 프로덕션 의존성으로 설치되며, 실제로 코드 안에서 사용하고 작업하는 패키지.
- -dev : 단순히 개발에서만 사용 (ex. nodemon)
- -g : 단순히 글로벌 설치로써 머신 전체에 다운로드 받아 어디에서든지 사용가능하게 해줌.
### 백준 브론즈3 승급
- 2문제를 풀었음.
- 날잡고 딥하게 들어가서 많은 문제를 해결하고 풀이법을 머릿속에 각인해야 할 필요성을 느낌.

## 1월 20일 TIL

**express**

미들웨어
- app.use -> 모든 request를 다 받을 수 있고, next()를 통해 다음 미들웨어로 데이터를 넘겨주는 역할을 함
- 문법 : app.use([경로], (req, res, next) => {})
- app.get/post/delete 등등 : http method를 처리할 수 있음.
- 문법 : app.method([경로], (req, res, next) => {})

**summary**

what is Express.js?
- Express.js is Nodejs framework package that adds a bunch of untility functions and tools and a clear set of rules on how the app should be built.
- It's highly extensible and other packages can be plugged into it (middleware)

middleware, next(), and res()
- Express.js relies heavily on middleware function - you can easily add them by calling use()
- Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response

Routing
- You can filter request by path and method
- If you filter by method, paths are matched exactly, otherwise, the first segment of a URL is matched.
- You can use the express.Router to split your routes across files elegantely

Serve Files
- You're not limited to serving dummy text as a response
- You can sendFile()s to your users (e.g. HTML files)
- If a request is directly made for a file (e.g. css file , js requested), you can enable static serving for such files via express.static()

## 1월 21일 TIL
- 면접보는 곳에서 vue를 스택으로 사용한다고 하여 공식문서(튜토리얼)를 보고 공부를 했다.
- 뷰는 선언형 프로그래밍으로, 확장자는 .vue이며 SFC(싱글 파일 컴포넌트, html, css, js를 하나의 파일로 다룸)을 사용한다.
- 컴포넌트는 Options API와 Composition API로 나눌 수 있으며 Options API는 리액트의 클래스 컴포넌트와 비슷하고, Composition API는 리액트의 함수형 컴포넌트와 비슷하다.
- v-접두사와 함께 정해진 기능을 사용할 수 있는데 다소 경직되어있지만 효율적으로 보이기도 했다.

백준
- 더하기 사이클 이라는 문제를 풀었는데 어떻게 풀어가야하는지 머리에 짜여지긴 했어도 코드로 풀어내긴 어려웠다.
- 데이터를 parse하는 것에 편리한 기능이 많이 있음을 계속 상기해야겠다.
- 더불어, 연산자(Operator) 공부를 다시 해야할 것 같다.

## 1월 26일 TIL
- 지성님이 추천해주신 리액트 스터디 첫 날이었다.
### 오늘 배운 것
- typeof function === true 이런 방식으로 구현을 할 수 있는 것 같다.
- 리액트에서,,, 부모 컴포넌트의 스테이트가 바뀌면 자식 컴포넌트도 새롭게 렌더링된다.
- 따라서 스테이트는 부모 컴포넌트가 아니라 본인이 갖고 있는 것이 렌더링 이슈가 적다.
- 하지만 props는 단방향 통신(?)이므로 부모 컴포넌트가 스테이트를 가지고 있어야할 상황이 많이 나온다.
- 그래서 렌더링 이슈를 해결하는 의미에서 redux 등 상태 관리 툴을 사용할 수 있어야 한다. 

## 1월 31일 TIL
- MVC 패턴을 나누는 방법을 다시 공부했다.
- Model에서 데이터를 다룰 때 class를 이용해서 인스턴스를 만들어 사용하는 방식으로 했는데 처음 하는 방법이라 로직이 이해가 잘 가지 않았다.
- 일단 유데미 강의를 끝까지 들어보면 얼추 감이 잡힐 것 같으며, 잡은 감으로 서버를 만들면 될 것 같다.
- 느리지만 확실하게 조금씩 하는거다.
- 내일은 백준 실버 갈 수 있을 것 같다.

## 2월 1일 TIL
**Dynamic Routing**
- You can pass dynamic path segments by adding a ":" to the Express router path
- The name you add after ":" is the name by which you can extract the data on req.params
- Optional (query) parameters can also be passed (?param=value&b=2) and extracted (req.query.myParam)

## 2월 2일 TIL
- mySQL을 이용해서 데이터를 저장해보았다.
- json 파일 하나로 데이터를 운용하는 것 보다 훨씬 편하고 빠르고 쉬웠다.
- 데이터베이스는 사실 데이터를 저장하는 것이 제일 중요하고 그 기능을 벗어나지 않는다는 것을 새삼 알게 되었다.
- 관련된 내용은 블로그에 포스팅하며 공부했었다.
- 내일은 시퀄라이즈에 대해 약간 공부할 예정이다.

## 2월 3일 TIL
```js
function Component() {
  var 현재상태 = 'info';
  return (
    <div>
      {
        { 
           info : <p>상품정보</p>,
           shipping : <p>배송관련</p>,
           refund : <p>환불약관</p>
        }[현재상태]
      }

    </div>
  )
} 
```

## 2월 4~6일 TIL
- 클린코드 및 패턴에 대한 공부의 필요성을 느끼고 있다.
- vue를 어느정도 알고 회사에 가야함을 느꼈다. 공식문서와 강의를 보면서 조금씩 익혀나가고 있다.
- 일단 cdn을 이용해서 vue를 약간씩 익혀보고 있다.
- vue는 vue 인스턴스를 생성한 뒤 그 인스턴스를 html에 이식하는 방식으로 돌아가는 것 같다.
- 공부가 많이 필요하다.

## 2월 7~8일 TIL
```
v-bind:value="바인딩할값"
v-bind:src="이미지주소"
{{ 바인딩할 값 또는 JS 표현식 }}
v-on:click="이벤트핸들러"
v-on:input="이벤트핸들러($event, '상수값')"
```
- v-on은 DOM의 이벤트를 바인딩할 수 있는 v-directive 이다.
- v-on:click="이벤트핸들러" 와 같이 핸들러를 바인딩할 경우, 핸들러에 자동적으로 이벤트 객체가 전달된다.
- v-on:click="이벤트핸들러(100)" 와 같이 핸들러를 바인딩 할 경우, 이벤트 객체가 입력된 파라미터(여기서는 100)로 덮어씌워진다.
- 이벤트 객체를 보존해야 할 경우, 첫 파라미터명을 $event로 정해준다.

### 재귀적 순회 공부 (추가적 코드 해석 필요)
```js
let company = { // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  if (Array.isArray(department)) { // 첫 번째 경우
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // 두 번째 경우
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700
```

## 2월 9일 TIL
```
v-once : 한번만 렌더링하는 v-directive
v-model : vue의 양방향 바인딩의 축약기능. data property를 할당하면 사용가능
methods를 이벤트 등에 바인딩하지않고 html 텍스트 요소에 바인딩하면 렌더링이 일어날때마다 메서드가 실행됨(최적화 ↓)
computed : 내부 로직의 의존성을 감지하며,  데이터가 변경될 경우 로직에 관련된 부분을 리렌더링함.
watch : 특정 data property의 의존성을 감지하며, 데이터가 변경될 경우 로직에 관련된 부분을 리렌더링함.
```

## 2월 15일 TIL 
### Vue.js
**DOM & Templates**
- Vue can be used to define the goal instead of the steps -> declarative approach
- Connect Vue to HTML via "mount": Vue then renders the real DOM based on the connected template

**Data & Event Bindings**
- You can bind data via interpolation ({{ }}) or the v-bind(":") directive
- You listen for events via v-on("@")

**Reactivity**
- Vue updates the real DOM for you when bound data changes
- Computed properties and watchers allow you to react to data changes

**Styling**
- Dynamic CSS class and inline style bindings are supported by Vue
- Vue offers multiple special syntaxes (object-based, array-based) for efficient bindings

### JS Methods
**string.prototype.charCodeAt()**
- 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환함.

## 2월 16일 TIL
### Vue.js
- Conditional Rendering : v-if, v-else, v-else-if
- List Rendering : v-for="item in items" // v-for="(value, key, index) in myObj" // :key="id"
- Lifecycle Hooks : onMounted(() => { console.log(`abcde`) })
- watch : watch(x, (newX) => {}) // watch(() => x + y, (sum) => {}) // watchEffect(async () => {})

### TypeScript
- tsc --watch 개별.ts
- tsc -w
- (컴파일러) 탑 레벨 설정 : files, include, exclude
- outDir : 다른 디렉토리에 컴파일한 JS 파일이 가게끔 함.
- module : import, export 관련 사항
- allowJs : 타입스크립트 일부에서 JS 파일 사용 가능
- checkJs : Typescript가 오류 보고하게 하는 것
- noEmit : 컴파일해도 JS 안생김
- noEmitOnError : 타입 검사에서 오류가 있으면 컴파일 안함

## 2월 17일 TIL
- 의존성 주입
- 각 종 라이브러리
- MVC 패턴 : domain

## 2월 18일 TIL
### 면접 스터디
- 클로저
- CORS
- Virtual DOM
- HTTP/HTTPS
- TCP/IP 5계층
- Promise

### Vue
- npm i - g @vue/cli
- vuter
- html css support
- vue create directory

## 2월 25일 TIL (useReducer)
- useReducer는 state를 관리하는 hook이다.
- useState는 기능이 상당히 한정적이기 때문에 복잡한 state일 경우에는 useReducer를 사용해주는 것이 용이하다.
**useReducer의 구성요소**
- reducer : state를 업데이트 하는 역할
- dispatch : state 업데이트를 위한 요구
- action - 요구의 내용

```jsx
import React, { useState, useReducer } from "react";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
} // constant로 빼주는 기법

const reducer = (state, action) => {
  console.log('reducer가 일을 합니다!', state, action)
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      console.log('장난?')
      return state
  }
}
// 리듀서는 전달받은 액션대로만 업데이트 해준다는 것이 장점임.
// 이상한 값이 들어가면 state를 그대로 반환? 실수를 줄여줄 수 있는 장점이 있음.

function App() {
  const [number, setNumber] = useState(0)
  const [money, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.deposit, payload: number})
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.withdraw, payload: number})
      }}>출금</button>
    </div>
  );
}

export default App;
```

## 4월25일!! TIL
- vue를 사용할 때 ref, reactive로 묶이지 않은 변수를 template에 사용할 경우, 변수의 값이 바뀌더라도 바뀐 값이 새롭게 렌더링되지 않는다.
- 알고 있던 것이여도 기록을 하지 않으면 망각하게 된다. 그래서 오랜만에 TIL을 기록한다.

