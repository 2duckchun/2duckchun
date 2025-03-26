# white-space

CSS 속성 white-space와 컴퓨터 과학의 whitespace는 다른 맥락이다.
CSS의 white-space는 **텍스트의 공백(띄어쓰기, 줄바꿈 등)을 브라우저가 어떻게 처리할지를 지정하는 속성** 이다.

## 주요 값 설명

```css
white-space: normal;
```
- 기본값.
- 연속된 공백은 하나로 줄이고, 줄바꿈 문자는 무시함.
- 줄바꿈은 자동으로 폭이 넘치면 실행됨.


```css
white-space: nowrap;
```

- 줄바꿈 금지. 한 줄로 계속 이어짐.
- 연속된 공백은 하나로 줄임.


```css
white-space: pre;
```
- HTML의 `<pre>` 처럼 동작.
- 공백과 줄바꿈을 **있는 그대로 유지**함.


```css
white-space: pre-wrap;
```
- 공백과 줄바꿈을 유지하면서, 폭이 넘치면 **자동 줄바꿈**도 허용.


```css
white-space: pre-line;
```
- 줄바꿈 문자는 유지하지만, **연속된 공백은 하나로 줄임.**
