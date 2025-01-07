# nullish 연산자

## 일반 OR 연산자 (||)

- param이 0, "", NaN, undefined, null, false와 같다면 모두 false처리 된다.
- 위의 값을 falsy한 값이라고 한다.

```js
function foo(param) {
  param = param || "default";
  return param;
}
```

## 강력한 연산자 (강제로 제어)

- param이 undefined가 아니면서 null이 아닐 경우의 param은 param 그대로 리턴되고, 아닐 경우 "default"가 리턴된다.

```js
function bar(param) {
  param = param !== undefined && param !== null ? param : "default";
  return param;
}
```

## nullish 연산자 (??, nullish coalescing)

- null, undefined의 경우에만 false 처리 한다. (null과 undefined만 체크한다.)

```js
function foobar {
  param = param ?? "default"; //
  return param;
}
```

# Optional Chaining

- 객체 등에 진입할 때 체이닝된 요소가 존재하면 해당 요소에 진입하고, 아닐 경우 undefined를 반환함.

```js
const user = {
  id: 123,
  name: "2DC",
  address: {
    street: "강동구",
    city: "서울",
    country: "한국",
  },
};

(function () {
  return user?.address?.city ?? "Unknown";
  // if (user && user.address && user.address.city) {
  //   return user.address.city;
  // } else {
  //   return "Unknown";
  // }
})();
```
