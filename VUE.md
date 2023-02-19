## Props
- props를 넘길때는 **v-bind:프롭스명="데이터명"** 으로 넘겨줌
- props는 **read-only**임. 받아온 것을 수정할 수 없음

## custom event
- 부모컴포넌트의 데이터(state)를 수정하고 싶다면 **#emit()** 문법사용

**예시**
- 자식컴포넌트) @click="$emit('에밋명', 넘길값)"
- 부모컴포넌트) @에밋명="실행할함수 등 연산, $event(받아온 값)"

## Life Cycle
- 굉장히 다양함
- create
- mount
- 컴포넌트 생성
- update
- unmount 등... 굉장히 많으나 API 통신 할때는 create나 mount 상황을 많이 사용함
