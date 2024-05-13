# FormData API

`FormData` 인터페이스는 form field와 그 값들을 표현하는 키/값 쌍에 대한 생성자 함수를 제공한다. 해당 생성자를 통해 만들어진 데이터는 `fetch`나 `XMLHttpRequest.send()` 또는 `navigator.sendBeacon()` 메소드를 통해 전송될 수 있다. 인코딩 타입이 `multipart/form-data`로 설정된 경우, HTML의 form 태그에서 사용하는 것과 동일한 포맷을 사용한다.

`FormData`가 구현된 객체에는 entries() 대신 for of문을 바로 사용할 수 있다. 또한 `for (const p of myFormData)`는  `for (const p of myFormDta.entries())` 와 같다.

## 생성자

`FormData()` : FormData 객체를 새로 생성한다.

## 인스턴스 메서드

`FormData.append()` : 현재 존재하는 key에 새로운 value를 붙이거나, 존재하지 않는 key/value쌍을 FormData에 추가한다.

`FormData.delete()` : FormData에서 특정 key/value 쌍을 제거한다.

`FormData.entries()` : FormData의 모든 key/value를 순회할 수 있는 이터레이터를 반환한다.

`FormData.get()` : 주어진 키의 첫 번째 값을 반환한다. 

`FormData.getAll()` : 주어진 키 값을 가진 모든 값을 반환한다.

`FormData.has()` : FormData가 특정 키를 지니고 있는지 확인하여 boolean을 반환한다.

`FormData.keys()` : FormData의 모든 키값이 담긴 이터레이터를 반환한다.

`FormData.set()` : FormData에 존재하는 키 값에 새로운 값을 세팅하거나, 새로운 키 값쌍을 셋팅한다. append()와의 차이점은 append()는 기존의 키 값이 있어도 덮어씌우지 않지만, set()은 기존의 키 값이 있으면 값을 아예 덮어 씌운다. `filename`이라는 옵셔널 매개변수가 있어 Blob이나 File을 명시해줄 수 있다.

만약 값이 Blob이나 File일 경우, filename 매개변수를 입력하는 것이 좋다.

```js
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

`FormData.values()` : FormData의 모든 value값이 담긴 이터레이터를 반환한다.

## 실사용

보통은 HTML5의 form 태그를 이용해 input값을 서버에 전송하지만 자바스크립트에서 FormData() 클래스를 이용하여 똑같이 스크립트로도 전송할 수 있다.

즉, HTML단이 아닌 자바스크립트 단에서 폼 데이터를 다룰 수 있게 해주는 객체라고 보면 된다. 

```js
let formData = new FormData(); // new FromData()로 새로운 객체 생성
formData.append('item','hi'); // <input name="item" value="hi"> 와 같다.
formData.append('item','hello'); // <input name="item" value="hello">
```

### 주의사항

🔥 formData 주의사항 formData.append(name, value) 함수를 이용해 데이터를 넣을시에 value는 문자열로만 입력 된다. 만일 문자열 이외의 데이터 타이을 넣으면 무시되고 문자열로 자동 변환 된다.

출처: https://inpa.tistory.com/entry/JS-📚-FormData-정리-fetch-api [Inpa Dev 👨‍💻:티스토리]

### fetch로 FormData 전송하기

```js
const FormData = new FormData();
formdata.append('슈퍼', '샤이')
formdata.append('뉴진', '스')

fetch('url', {
    method: "POST",
    cache: "no-cache",
    body: FormData // body 부분에 FormData를 할당한다.
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
```


간단한 GET 요청을 Query Parameter와 함께 보내는 경우, URLSearchParams 생성자에 키/값을 직접 추가해서 보낼 수 있다.

```js
fetch('url', {
    method: 'POST',
    body: new URLSearchParams({
        new: 'jeans',
        super: 'shy'
    })
})
```