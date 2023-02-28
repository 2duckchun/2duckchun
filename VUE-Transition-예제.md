## Transition
Vue는 상태 변화에 따른 애니메이션(Animation)에 대한 트랜지션(Transition)을 도와주는 2가지 빌트-인 컴포넌트를 제공합니다.
- `Transition` : 엘리먼트나 컴포넌트가 DOM에 들어오거나 사라질 때 적용됩니다. 이 글에서는 <Transition>에 대해 다룹니다.
- `TransitionGroup` : 엘리먼트나 컴포넌트가 v-for list에 의해 추가되거나 삭제되거나 이동할 때 적용됩니다. 이것에 대한 내용은 TransitionGroup 게시글에서 별도로 다루겠습니다.
  
두 컴포넌트가 아니더라도 Vue에서는 다른 테크닉들을 이용해서 애니메이션을 추가할 수 있습니다.
예를들어 CSS 토글이나 state의 style binding을 통한 방법들이 있겠습니다.
이러한 방법에 대해서는 Vue 공식문서의 Animation Techniques 챕터에서 별도로 다룹니다.
  
```vue
<script setup>
    import { ref } from 'vue';
  const showMe = ref(true)
</script>
 
<template>
    <Transition>
        <h1 v-if="showMe">안녕하세요.</h1> 
    </Transition>
    <button @click="showMe = !showMe">Transition 연습</button>
</template>
 
<style>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.2s ease;
    }
 
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
```
- `Transition` 내부에 엘리먼트를 추가할때에는 하나만 추가 해야하고, 컴포넌트를 추가할 경우 단일 루트 엘리먼트만 있어야 합니다. 그렇지 않으면 오류가 발생합니다.
  
## Transition Classes
- 트랜지션에는 enter/leave에 관련된 6개의 Class가 존재합니다.
- 기본적으로는 주어진 6개의 클래스를 Transition에 추가/제거하면서 이벤트를 관리합니다.
  
1. v-enter-from : enter 작업의 시작 단계에서 실행되며, 엘리먼트가 삽입되기 전에 추가되는 클래스입니다. 엘리먼트가 삽입되고 난 후 1프레임 이후 클래스가 삭제됩니다.
2. v-enter-active :  모든 Entering Phase에 관여되는 클래스이며, 엘리먼트가 삽입되기 전에 추가되고, 트랜지션/애니메이션이 끝났을 때 삭제됩니다. 이 클래스에서는 duration과 delay, enter phase의 easing curve를 설정할 수 있습니다.
3. v-enter-to : enter 작업의 끝 단계입니다. 엘리먼트가 추가된 후 1프레임 이후에 추가되고, 트랜지션/애니메이션이 끝났을 때 삭제됩니다.
4. v-leave-from : leave 작업의 시작 단계에서 실행됩니다. leaving 트랜지션이 발동된 즉시 추가되고, 한 프레임 이후 삭제됩니다.
5. v-leave-active : leave 단계의 모든 단계에 적용되며,  leaving 트랜지션이 발동된 후 추가되어 트랜지션/애니메이션이 끝났을 때 삭제됩니다. 이 클래스에서도 마찬가지로 duration과 delay, enter phase의 easing curve를 설정할 수 있습니다.
6. v-leave-to : leaving 작업의 끝 단계입니다. leaving 트랜지션이 발동된 후 한 프레임 이후에 추가되고, 트랜지션/애니메이션이 끝남과 동시에 삭제됩니다.
