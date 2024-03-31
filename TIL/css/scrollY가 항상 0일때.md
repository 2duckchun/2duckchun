# scrollY가 항상 0일때

y축 스크롤을 움직임에도 불구하고 window.scrollY가 항상 0으로 고정되어있는 현상을 발견했다.

리액트 코드엔 문제가 없어서 왜이러나 싶던 차에 브라우저상 뭔가 이상한 점이 하나 발견되었다.

![image](https://github.com/2duckchun/2duckchun/assets/92588154/67869703-3359-417f-80bd-a58a7c358cb6)

y축 스크롤이 2개로 구성된 것이 문제인 것으로 보였다. window 객체는 브라우저의 최상단 화면이므로 이 상태에서 스크롤을 아무리 굴려봐야 window 내부 엘리먼트의 scrollY 값이 바뀔 뿐, window.scrollY값은 바뀌지 않을 것이라는 유추가 가능했다.

왜 이중 scrollY가 생겼을까? 문제는 아래 css 코드에 있었다.

```css
html {
  overflow-y: scroll;
}

body {
  @apply bg-zinc-900 h-[100vh] overflow-x-hidden; /* 여기가 문제 */
}
```

내부 스타일 변동에 따라 Y축 스크롤이 생길 때 화면이 움찔거리는게 싫어서 html에 강제로 overflow-y scroll을 박아놓았었고, 추후에 (왜인지 모르게) body에 overflow-x-hidden을 선언했는데 이것 때문에 Y축 스크롤이 2개가 생기는 것 같았다.

```css
body {
  @apply bg-zinc-900 h-[100vh];
}
```

따라서 body의 overflow-x-hidden을 없애주었고, window.scrollY는 정상적으로 동작하게 되었다.

## 해결 과정 요약

1. useEffect에 `window.addEventlistner('scroll', scrollHandler)`를 추가하여 scrollY의 변화에 따라 특정 기능이 수행되도록 코드함.
2. 이벤트 조건을 맞췄는데도 불구하고 `scrollHandler` 내부 로직이 실행되지 않음.
3. 브라우저의 개발자 도구에 `console.log(window.scrollY)`를 찍어봄. 어떠한 상황에서도 0이 출력되었음.
4. 화면에 scrollY가 2개 생겼음을 인지하게 되었음. 안쪽(body) scrollY 값이 변하는 것은 바깥쪽(html, window) scrollY와 별개로 동작하는 것도 인지함.
5. 해결