<template>
  <div class="home">
    <button @click="handleToLogin">返回登录页面</button>
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
  },
  methods: {
    handleToLogin () {
      this.$router.push('/login')
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
