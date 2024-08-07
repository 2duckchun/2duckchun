# postMessage()

window.postMessage() 메서드는 window 오브젝트 사이에서 안전하게 cross-origin 통신을 할 수 있게 한다. 
예시로 팝업 간의 통신이나, 페이지와 페이지 안의 iframe 간의 통신에 사용할 수 있다.

일반적으로 다른 페이지 간의 스크립트는 각 페이지가 같은 프로토콜, 포트 번호와 호스트를 공유하고 있을 때에 (same origin policy로도 불려진다.) 서로 접근할 수 있다. `window.postMessage()` 는 이 제약 조건을 안전하게 우회하는 기능을 제공한다.

대체로 한 window는 다른 window를 참조할 수 있고 (예시 : targetWindow = window.opener) `targetWindow.postMessage()` 를 통해 다른 window에 `MessageEvent`를 전송할 수 있다. `window.postMessage()` 를 통해 전달된 인수는 이벤트 객체를 통해 이벤트를 받는 window에서 사용할 수 있다.

## 문법

```js
targetWindow.postMessage(message, targetOrigin, [transfer]);
```

### targetWindow

메세지를 전달받을 window의 참조. 참조를 취득할 방법으로는 아래와 같은 방법이 있다.

- window.opener (새 창을 만든 window 참조)
- HTMLIFrameElement.contentWindow (부모 Window에서 임베디드된 iframe을 참조할 때)
- window.parent (임베디드된 iframe에서 부모 window를 참조할 때)
- window.frames + index (현재 창의 하위 프레임을 나열하는 객체 배열)

### message 

- 다른 window에 보내질 데이터. 데이터는 `the structured clone algorithm` 를 이용해 직렬화된다.
이를 통해 직접 직렬화 할 필요 없이 대상 window에 다양한 데이터 객체를 안전하게 전송할 수 있다.

`the structured clone algorithm` : https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

### tagetOrigin

- targetWIndow의 origin을 지정한다. 이는 전송되는 이벤트에서 사용되고, 문자열 "*"(별도 지정 X) 혹은 URL이어야 한다
- 이벤트를 전송할 때 targetWindow의 스키마, 호스트 이름, 포트가 targetOrigin의 정보와 맞지 않다면 이벤트는 전송되지 않는다. 
- 여기에 특정한 대상을 지정하지 않을 경우, 악의적인 사이트에 전송할 데이터가 공개될 위험이 존재한다.
