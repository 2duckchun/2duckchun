# CSS 선택자 + 크로스 브라우징 관련 정보

```css
html body[data-scroll-locked]:not([data-scroll-no-lock]) {
    min-width: 100%;
    margin-right: 0 !important;
    overflow: hidden !important;
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none;
}
```

이 css는 스크롤바를 없애고, 화면 플리커링을 방지한다.

- html의 자식 body에 data-scroll-locked 속성(attributes)이 있으면서 data-scroll-no-lock 속성은 없을 경우의 선택자
- 최소 넓이를 100%로 넓힌다.
- 우측 마진을 강제 0으로 한다.
- 스크롤이 불가능하도록 오버플로우 hidden 처리한다.
- IE, Edge의 오버플로우를 없애기 위해 -ms-overflow-style을 none 처리 한다.
- scrollbar가 차지하는 기본 넓이를 0으로 맞춘다.

```css
html body[data-scroll-locked]:not([data-scroll-no-lock])::-webkit-scrollbar {
    display: none;
}
```
- 웹킷 스크롤바 선택자(가상요소)
- display를 none으로 한다.

## 사용 방법

```tsx
useEffect(() => {
  if (open) {
    document.body.setAttribute("data-scroll-locked", ""); // 스크롤 잠금
  } else {
    document.body.removeAttribute("data-scroll-locked"); // 원래대로
  }
}, [open]); // 모달의 open 상태가 변경될 때 실행
```