![image](https://user-images.githubusercontent.com/92588154/221114206-b4c8a59b-908c-40ee-9de7-9d6cc88a1199.png)


## App.vue
```vue
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>

    <div>
      <CustomInput v-model="title" class="inputBox" />
      <CustomInput v-model="content" class="inputBox" />
    </div>

    <ButtonComponent @showAlert="showAlert">
      눌러주세오
    </ButtonComponent>
    
    <ButtonComponent>
      <CustomInput v-model="content" class="inputBox-different" />
    </ButtonComponent>
    <PropsDrillOne :title="title" :footer="footer"/>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import PropsDrillOne from './components/PropsDrillOne.vue'

const title = ref('this is Title')
const content = ref('this is content')
const footer = ref('THIS IS FOOTER')
const showAlert = () => {
  alert('타이틀은 ' +  title.value + '이고 컨텐츠는 ' + content.value + '입니다.')
  title.value = ""
  content.value = ""
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flexbox {
  display: flex;
  width: 300px;
  margin: 0 auto;
  
}
</style>
```

## CustomInput.vue
```vue
<template>
  <input class="blueborder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
const props = defineProps({
  modelValue: String
})
const emits = defineEmits(['update:modelValue'])
</script>

<style>
.blueborder {
  border: 1px solid blue;
}

.inputBox {
  display: block;
  width: 150px;
  margin: 10px auto;
}

.inputBox-different {
  background-color: teal;
}
</style>
```

## ButtonComponent.vue
```vue
<template>
  <button @click="$emit('showAlert')">
    <slot></slot>
  </button>

</template>

<script setup>
const emits = defineEmits(['showAlert'])
</script>

<style>
</style>
```

## PropsDrillOne.vue
```vue
<template>
  <div>
    <div>
      이곳은 드릴원입니다.{{ title }}
    </div>
    <div>
      <PropsDrillTwo :titleDrill="title" :footerDrill="footer" />
    </div>
  </div>
</template>

<script setup>
import PropsDrillTwo from './PropsDrillTwo.vue';

const props = defineProps({
  title: String,
  footer: String,
})
</script>

<style>
</style>
```

## PropsDrillTwo.vue
```vue
<template>
  <div>
    <h1>이곳은 Drill TWO 입니다. {{ titleDrill }}</h1>
    <h2>App에서 Props Drilling으로 뚫고 왔습니다. {{ footerDrill }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  titleDrill: String,
  footerDrill: String,
})
</script>

<style>
</style>
```
