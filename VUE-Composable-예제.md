![image](https://user-images.githubusercontent.com/92588154/221404550-7d3aadc4-425e-4d15-9893-72c1888775ab.png)

## App.vue
```vue
<template>
  <div class="coodiBox">
    <p>X 좌표 : {{ x }}</p>
    <p>Y 좌표 : {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse } from './composable/mouse.js';
const { x, y } = useMouse('coodiBox');
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.coodiBox {
  width: 600px;
  height: 600px;
  border: 2px solid black;
}
</style>
```

## composables / mouse.js
```vue
import { ref } from 'vue';
import { useEventListener } from './useEventListener.js';

export function useMouse(target) {
  const x = ref(0)
  const y = ref(0)
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }
  useEventListener(target, 'mousemove', update)

  return {x, y}
}
```

## composables / useEventListener.js
```vue
import { onMounted, onUnmounted } from "vue";

export function useEventListener(target, event, callback) {
  onMounted(() => 
  document.querySelector(`.${target}`).addEventListener(event, callback))
  onUnmounted(() => 
  document.querySelector(`.${target}`).removeEventListener(event, callback))
}
```
