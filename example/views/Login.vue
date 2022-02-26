<template>
  <div class="login-view">
    <div class="login-form">
      <h1>
        vue layouter plugin
      </h1>
      <div>
        <input class="login-input"/>
      </div>
      <div>
        <input class="login-input"/>
      </div>
      <div>
        <button class="login-input" @click="handleToHome">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  methods: {
    handleToHome () {
      this.$router.push('/home')
    }
  }
})
</script>
<style lang="postcss" scoped>
.login-view {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.login-form {
  width: 400px;
  height: 300px;
  background-color: #eee;
  margin-right: 40px;
  padding: 16px;
}
.login-input {
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
}
</style>
