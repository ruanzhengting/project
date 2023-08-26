<style>
#app{
  display: flex;
}
#app .leftBar{
  width: 20vw;
}
#app .rightContent{
  flex: 1;
  width: 80vw;
  height: 100vh;
  background: #F7F7F7;
}
@media screen and (max-width: 992px){
  #app .leftBar{
    display: none;
  }
}
</style>
<template>
  <div id="app">
    <div class="leftBar">
      <!-- 3、使用组件 -->
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div class="rightContent">
      <!-- 显示路由模块 -->
      <router-view/>
    </div>
  </div>
</template>
<script>
// 1、引入组件
import HelloWorld from './components/HelloWorld.vue'
// 2、挂载组件
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
