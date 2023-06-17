# Redux 이론

- 리덕스는 상태관리 툴이다.
- 넓은 의미에서 store, action, dispatch, reducer로 구분된다.
  - `store` : 관리할 state들이 담겨있는 공간 그 자체
  - `action` : 사용자가 state를 변경하고 싶을때 전달되는 데이터
  - `dispatch` : action을 reducer 함수에 전달해주는 역할을 하는 함수
  - `reducer` : 변경 전 state와 action을 비교하여 state를 변경해주는 역할을 하는 순수함수
- 리덕스의 제약조건으로는 *단방향 데이터 흐름*과 *불변성*이 있다.
  - `단방향 데이터 흐름` : 데이터가 한 흐름으로 이루어진다. = store 내부의 데이터는 action, dispatch, reducer 함수로만 변경될 수 있다. (store.state = "변경자료" 식으로 변경될 수 없다.) 이러한 단방향 데이터 흐름은 데이터의 무작위적 변경으로 인한 오류의 발생을 사전에 방지시키는 역할을 한다.
  - `불변성` : state를 변경할 때, 기존의 state 주소값이 return되는 것이 아닌, 완전히 다른 state를 생성해서 store에 기록한다. 이로 인해 변경 전과 변경 후의 state 주소값이 달라져 변경 단계를 추적할 수 있게 된다.
![image](https://github.com/2duckchun/2duckchun/assets/92588154/48042881-bf4b-4a88-a6d3-8e5e7923f467)
