# useReducer

```js
import { useReducer } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "add":
      return {
        number: prevState.number + 1,
      };
    case "subtract":
      return {
        number: prevState.number - 1,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default function MyComp() {
  const [state, dispatch] = useReducer(reducer, { number: 5 });

  const onClick = (typeKey) => {
    dispatch({
      type: typeKey,
    });
  };

  return (
    <>
      <h1>{state.number}</h1>
      <button onClick={() => onClick("add")}>더하기</button>
      <button onClick={() => onClick("subtract")}>빼기</button>
    </>
  );
}
```

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- useReducer는 useState의 대체로 사용할 수 있는 Hook이다.
- reducer 함수를 통해 state를 생성하므로, 다수의 하윗값을 가진 state를 다루는데 편리하다.

## useReducer(reducer, initialArg, init?)

- useReducer는 컴포넌트의 탑 레벨(컴포넌트 내 모든 블록이 참조 가능한 위치)에서 선언되어야 하며, 인자로 reducer, 초기값(initialArg)을 가지며, 옵셔널하게 init함수를 가진다.

## useReducer 파라미터

- reducer : 이전 state와 action을 조합하여 새로운 state를 반환하는 순수 함수. reducer는 반드시 순수함수여야 하며, 순수함수이므로 코드 상 분리가 편하다.
- initialArg : useReducer의 초기값이 되는 값. 모든 타입이 올 수 있으나, 보통은 타입을 명시하기 위해 객체를 사용함.
- optional init : 초기값을 리턴하는 초기값 생성 함수. 함수 형태이므로 한박자 늦게 초기값을 받을 수 있는 기능을 함. 생략할 시 initialArg가 초기값이 됨.
- useReducer의 리턴값 : 현재 state, dispatch 함수 ( const [state, dispatch] = useReducer(reducer, initialState) )

## 주의사항

- useReducer는 Hook이므로 반드시 컴포넌트의 최상단에 선언해야 함.
- 최상단 외 다른 블록(if, for문 등)에 선언하면 안되고, 그럴 일이 있다면 컴포넌트를 분리해서 하위 컴포넌트의 최상단에 선언해야 함.
- Strict Mode에서는 리듀서와 초기화함수를 2번 호출하며, 개발 환경에서만 2번 호출하고 개발에 영향을 끼치지는 않음. (호출 중 하나의 결과는 무시됨)

---

## dispatch 함수

- useReducer에 의해 리턴되는 함수로써, action을 reducer 함수에 전달하는 역할을 함.
- 데이터 변경은 action -> dispatch -> reducer 순으로 단방향으로 이뤄지므로, useReducer의 state를 변경하고싶다면 반드시 dispatch에 action을 담아 실행해야함.

### dispatch 파라미터

- action : 유저에 의해 발생되는 동작(데이터)으로써 어떤 타입이던 될 수 있으나, 컨벤션에 따라 객체로 만들어 사용하는 것을 추천함.
- action 객체는 데이터와 type이 함께 있는 것이 추천됨.

```js
dispatch({
  type: "DELETE_USER",
  payload: {
    id: null,
    nickName: null,
  },
}); // 위와 같이 사용하는 것을 추천
```

- reducer 함수 내부의 switch문과 action의 type을 활용하여 reducer를 깔끔하게 코딩할 수 있음.

### 주의사항

- dispatch 함수는 다음 렌더 때 state 변경사항이 업데이트되므로, 디스패치 함수를 호출하자마자 데이터를 불러오면 state 변경 이전의 데이터 값이 확인됨.
- 제공한 새 값이 Object.is 비교에 의해 결정된 현재 상태와 동일하면 React는 컴포넌트와 자식요소를 다시 렌더링 하지 않음. (최적화)
- 리액트는 state 업데이트를 일괄적으로 처리함. (모든 이벤트 핸들러와 set function이 실행되고 난 후에야 실행됨.) 이를 통해 단일 이벤트에서도 여러번 렌더링 되는 것을 방지할 수 있음.
- 만약 React 화면을 더 일찍 업데이트하도록 강제해야 하는 경우( 예를 들어 DOM에 엑세스해야 하는 경우 ), flushSync 메서드를 사용할 수도 있음.

### Object.is 비교 알고리즘

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description
