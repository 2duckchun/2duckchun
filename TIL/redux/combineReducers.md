# combineReducers
- store에 위치한 **각각의 데이터 조각**들에 **reducer 조각**들을 연결하기 위한 편의 기능
- store - (연결) -> combineReducer - (연결) -> { reducer 조각들 } 과 같이 구성된다.

## main/index.js (store가 위치하는 redux의 메인 파일)
```js
// main/index.js
const reducer = require("./reducers");
const { createStore } = require("redux");

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const store = createStore(reducer, initialState)
```
- store에 reducer를 연결하고, initialState를 연결한다. 
- store 연결에서는 기존의 reducer를 사용하는 프로젝트와 크게 다를 것이 없다.

## main/reducers/index.js (combineReducer가 위치하는 reducer의 메인 파일)
```js
// main/reducers/index.js
const { combineReducer } = require("redux")

const postReducer = (prevState = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

const userReducer = (prevState = {}, action) => {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
```
- combineReducer 함수를 이용해서 reducer 함수를 결합한 뒤 exports 한다.
- combineReducer 함수는 객체를 인수로 받으며, user, posts 등 기존 **initialState**에 미리 명시된 데이터들에 각각 하나씩의 reducer 조각을 붙여준다.
- reducer 조각들은 연결된 하나의 데이터만 담당하며, 구조는 이전의 reducer와 같으나 **초기값(prevState)** 을 반드시 명시해주어야 한다.

---

위의 코드에서는 최종적으로 store의 2개의 데이터에만 reducer가 붙게 되었으며,
```js
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  }, // -> userReducer 연결
  posts: [], // -> postReducer 연결
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};
```
연결되지않은 나머지 store의 initialState(comments, favorites, history, likes, followers) 는 무시된다.

![image](https://github.com/2duckchun/2duckchun/assets/92588154/42ee1dae-d4ba-458e-b673-4b5a576a8313)
