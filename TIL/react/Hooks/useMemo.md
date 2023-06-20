# useMemo

이것을 보고 공부했습니다.
1. https://www.youtube.com/watch?v=e-CnI8Q5RY4
2. https://react.dev/reference/react/useMemo#troubleshooting

---

```js
const cachedValue = useMemo(콜백함수, [의존성배열])
```
- useMemo는 memoization을 통해 컴포넌트가 리렌더링 되더라도 값을 재계산하지 않고 미리 계산된 값을 불러오는 기능을 하는 Hook이다.
- 함수형 컴포넌트의 생애주기를 이해해야 useMemo를 이해하기가 편해진다.
- 함수형 컴포넌트는 결국 함수이고, 렌더링 될 때 함수가 실행되는 것이라고 볼 수 있으며, 함수가 실행되면 내부(컨텍스트) 변수들이 초기화된다.
- 매 렌더링 때마다 내부 변수들이 초기화되고 다시 실행된다면 비효율적이라고도 볼 수 있을 것이다.
- 만약 useMemo를 통해 묶어둔 값이 있다면, 함수형 컴포넌트가 리렌더링되더라도 값을 재계산하지 않고 메모이제이션한 값을 불러올 수 있다.

## useMemo 파라미터
- `콜백함수` : 캐싱할 데이터를 리턴하는 콜백함수. 순수함수여야 하고, 콜백함수 인자는 없다. 
최초 렌더링시에는 반드시 호출되고, 이후 재렌더링 될때에는 의존성 배열 내 데이터가 바뀌지 않는다면 이전의 계산값을 리턴한다.
- `의존성배열` : useMemo를 재계산하도록 하는 트리거. props나 state, 컴포넌트 내에서 선언된 함수 등 다양한 값을 의존성배열로 사용할 수 있지만, 콜백함수 내에서 참조되는 반응값들을 넣는 것이 권장된다.
linter가 적용된 경우, 올바른 의존성 배열이 적용되었는지 체크해준다.
- 의존성배열은 [dep1, dep2, dep3 ...] 과 같이 여러개를 추가할 수 있다.
- 의존성배열의 변경을 감지하는 알고리즘은 `Object.is 비교 알고리즘`이다. (따라서 객체의 참조주소 변경까지 감지한다.)
 
```
const 계산된값 = useMemo(() => {
  return 계산될값1 + 계산될값2 + 5
}, [계산될값1, 계산될값2])
```
## 코드 예제 1
- 아래 예제는 hardCalculate가 시간이 오래걸리는 연산임을 가정하고 컴포넌트를 최적화하는 예시이다.
- 계산기에서 쉬운 숫자(빨리 계산되는 계산기)의 숫자를 올려도, 컴포넌트가 재렌더링 되는 것이므로 hardSum이 재계산되며 시간이 오래 걸리게 된다.
- 위와 같은 상황을 방지하기 위해, hardCalculate의 연산이 필요한 값에는 useMemo와 의존성 배열을 사용하여 재렌더링되더라도 쓸데없이 값을 재계산하지 않도록 할 수 있다.

![image](https://github.com/2duckchun/2duckchun/assets/92588154/785610f2-cb90-4403-a3ef-2568a0790ed9)

```js
import React, {useState, useMemo} from 'react';

function hardCalculate(number) {
  console.log("시간이 오래 걸리는 계산")
  for (let i = 0; i < 100; i++) {
    // 시간 때우기용 for문
  }
  return number + 10000;
}

function easyCalculate(number) {
  console.log("바로 끝나는 계산")
  return number + 1;
}

export function App(props) {
  const [hardNumber, setHardNumber] = useState(1)
  const [easyNumber, setEasyNumber] = useState(1)

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber])
  
  const easySum = easyCalculate(easyNumber)

  return (
    <div>
      <h3>오래 걸리는 계산기</h3>
      <input 
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum} </span>
      <br />
      <h3>빨리 계산되는 계산기</h3>
      <input 
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {easySum} </span>
    </div>
  );
}
```

## 코드 예제 2 (useEffect와 함께 사용)
- 함수형 컴포넌트가 리렌더링될 때, 내부 변수들도 다시 호출된다.
- 이 때 객체, 배열 등 참조형 데이터들은 객체, 배열 내 프로퍼티나 엘리먼트가 이전과 동일하더라도 메모리 참조값이 달라져, 본질적으로는 다른 값이 된다.
- 그런 상황에서 useEffect를 사용할 경우, 생각하지 못한 사이드이펙트나 메모리 낭비가 올 수 있다.
- useMemo를 사용하면 위와 같은 상황을 방지할 수 있다. 아래 예제는 위의 상황을 재현하였다. 

![image](https://github.com/2duckchun/2duckchun/assets/92588154/e421d602-ed54-482d-b0b9-c6b169ab51bf)

```js
import React, {useState, useEffect, useMemo} from 'react';

export function App(props) {
  const [number, setNumber] = useState(0)
  const [isAfternoon, setIsAfternoon] = useState(true)

  // const day = {
  //   isAfternoon: isAfternoon ? "낮" : "밤"
  // } 
  // 리렌더링시 함수가 재 호출되기 때문에 객체 내부 프로퍼티의 값은 이전과 같더라도
  // 객체 주소는 달라져서 useEffect의 의존성 배열 변경에 감지됨.
  
  const day = useMemo(() => {
    return {
      isAfternoon: isAfternoon ? "낮" : "밤"
    }
  }, [isAfternoon])
  // useMemo를 통해 isAfternoon을 계산하고 의존성 배열을 추가해놓으면
  // 의존성 배열 내 데이터가 바뀌지 않는다면 객체 주소도 바뀌지 않음.
  // 따라서 리렌더링 되더라도 useEffect의 의존성 배열 변경에 감지되지 않음.
  
  useEffect(() => {
    console.log("useEffect 호출")
  }, [day])
  
  return (
    <div>
      <h2>숫자를 올려봅시다.</h2>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <hr />
      <h2>주독야독 합시다.</h2>
      <p>밤인가요? 낮인가요? : {day.isAfternoon}</p>
      <button onClick={() => setIsAfternoon(!isAfternoon)}>시간 컨트롤러</button>
    </div>
  );
}
```

## 주의사항
- Hook이므로 컴포넌트의 최상단 블록에 호출해야 한다.
- Strict Mode에서는 2번 호출된다. 계산함수(콜백함수)가 퓨어한 함수라면 로직에 영향을 주지는 않는다.
- 리액트는 특별한 이유가 없는 한 캐싱(저장)된 값을 삭제하지 않는다.
  - 개발 모드일 때에는 컴포넌트가 수정되었을 때 캐싱된 값을 버린다.
  - 개발 모드, 배포 모드에서는 컴포넌트 초기 마운트가 일시 중단되면 캐싱된 값을 버린다.
