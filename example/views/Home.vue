<template>
  <div class="home">
    <button @click="() => $router.push('/login')">Login Page</button>
    <button @click="() => $router.push('/data')">Data Page</button>
    <div v-for="item in num" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      num: 100
    }
  }
})
</script>
<style lang="postcss" scoped>
.home {
  height: 100%;
  overflow-y: auto;
}
</style>
