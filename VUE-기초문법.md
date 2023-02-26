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

## vue-router의 params 문법

```
(router.js)
const routes = [
  {
    path: '/detail/:id',
    component: Detail,
  },
];
```

## 컴포넌트 안에서 URL 파라미터를 확인하는 문법

```
{{ $route.params.파라미터명 }}
```

## 이벤트와 라우터 함께 사용하기
```
// 클릭시 사이트 이동 예시
@click="$router.push('/detail/i')"

// 클릭시 사이트 뒤로가기, 앞으로가기 기능 예시
@click="$router.go(-1)" // 한 칸 뒤로
@click="$router.go(2)" // 두 칸 앞으로
```

## vue 컴포넌트 v-model
![image](https://user-images.githubusercontent.com/92588154/220934824-a0f99574-c536-4b7b-81ae-e2745f71fcad.png)

```vue
// App.vue
<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'

const msg = ref('hello')

</script>

<template>
  <CustomInput v-model="msg" /> {{ msg }}
</template>
```

```vue
// CustomInput.vue
<script setup>
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

부모 컴포넌트에서는 v-model로 자기 ref를 건다.
자식컴포넌트에서는 바인딩할 input에 :value="modelValue" 와 @input=$emit('update:modelValue', $event.target.value) 를 넣어준다.
그냥 정해진 것이여서 외워야 하는 것 같다.

---

기본적으로 컴포넌트의 v-model은 modelValue를 프로퍼티로, update:modelValue를 이벤트로 사용한다.
이 때 v-model:title="bookTitle" 과 같이 수정해줄 수도 있다.

![image](https://user-images.githubusercontent.com/92588154/220937393-b12dd30e-8328-4aca-bfeb-233848d4bae1.png)


```vue
// App.vue
<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'

const bookTitle = ref('왕좌의 게임')

</script>

<template>
  <CustomInput v-model:title="bookTitle" /> {{ bookTitle }}
</template>
```

```vue
// CustomInput.vue
<script setup>
const props = defineProps(['title'])
const emits = defineEmits(['update:title'])
</script>

<template>
  <input
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```
