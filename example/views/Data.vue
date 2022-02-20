<template>
  <div class="data-view">
    <button @click="() => $router.push('/login')">Login Page</button>
    <button @click="() => $router.push('/home')">Home Page</button>
    <div>
      This is data page
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
.data-view {
  height: 100%;
  overflow-y: auto;
}
</style>
