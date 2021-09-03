<!--
 * @Author: your name
 * @Date: 2021-08-30 12:50:58
 * @LastEditTime: 2021-08-30 12:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\HelloWorld.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-08-02 09:37:23
 * @LastEditTime: 2021-08-11 09:43:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\HelloWorld.vue
-->
<template>
  <h1>{{ msg }}</h1>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="state.count++"
  >
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
