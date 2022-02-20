<template>
  <div class="container">
    <div class="header">header</div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">footer</div>
  </div>
</template>
<style lang="postcss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.header {
  height: 60px;
  flex: 0 0 auto;
  background-color: #eee;
}
.main {
  flex: 1 1 auto;
}
.footer {
  height: 60px;
  flex: 0 0 auto;
  background-color: #eee;
}
</style>
