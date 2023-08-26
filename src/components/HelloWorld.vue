<template>
  <div class="left">
    <div class="left-head">
      <van-icon name="comment-o" />
      <span>灵活用工服务平台</span>
    </div>
    <div class="left_main">
      <div class="left_main_cz">常规操作</div>
      <div class="left_main_sy active">
        <router-link to="/">
          <van-icon name="wap-home-o" class="v-icon" />
          <span>首页</span>
        </router-link>
      </div>
      <div class="left_main_cz">业务管理</div>
      <van-collapse v-model="activeNames" class='van-collapse'>
        <van-collapse-item name="1">
          <template #title>
            <router-link to="/cart">
              <van-icon name="todo-list-o" />
              <span>项目任务</span>
            </router-link>
          </template>
          <div class="div_boxitem">
            <p class="box_item">> 批新建订单</p>
            <p class="box_item">> 项目列表</p>
            <p class="box_item">> 任务派单</p>
            <p class="box_item">> 订单列表</p>
          </div>
        </van-collapse-item>
        <van-collapse-item name="2">
          <template #title>
            <router-link to="/cart">
              <van-icon name="newspaper-o" />
              <span>资金发票</span>
            </router-link>
          </template>
          <div class="div_boxitem">
            <p class="box_item">> 批新建订单</p>
            <p class="box_item">> 项目列表</p>
            <p class="box_item">> 任务派单</p>
            <p class="box_item">> 订单列表</p>
          </div>
        </van-collapse-item>
        <van-collapse-item name="3">
          <template #title>
            <router-link to="/cart">
              <van-icon name="hotel-o" />
              <span>企业管理</span>
            </router-link>
          </template>
          <div class="div_boxitem">
            <p class="box_item">> 批新建订单</p>
            <p class="box_item">> 项目列表</p>
            <p class="box_item">> 任务派单</p>
            <p class="box_item">> 订单列表</p>
          </div>
        </van-collapse-item>
      </van-collapse>
      <div class="left_main_cz">服务中心</div>
      <van-collapse v-model="activeNames" class='van-collapse'>
        <van-collapse-item name="4">
          <template #title>
            <router-link to="/cart">
              <van-icon name="user-circle-o" />
              <span>身份&安全</span>
            </router-link>
          </template>
          <div class="div_boxitem">
            <p class="box_item">> 批新建订单</p>
            <p class="box_item">> 项目列表</p>
            <p class="box_item">> 任务派单</p>
            <p class="box_item">> 订单列表</p>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeNames: ['1']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  width: 100%;
}

.left>.left-head {
  background-color: #d0121b;
  width: 100%;
  font-size: 20px;
  color: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.left_main {
  padding: 0 8px;
}

.left_main>.left_main_cz {
  font-size: 14px;
  color: #555;
  margin: 17px 19px;
  font-weight: bold;
}

.left_main>.left_main_sy {
  height: 56px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: flex-start;
}

.left_main>.active {
  background: #E1E0E0;
  border-radius: 50px;
}

.left_main_sy .v-icon {
  font-weight: bolder;
  font-size: 26px;
  margin-right: 5px;
  color: #555555;
}

.left_main_sy span {
  font-size: 18px;
  color: #555555;
  font-weight: bold;
}

.van-collapse .van-cell__title .van-icon {
  font-size: 26px;
  color: #555555;
  font-weight: bold;
  margin-right: 5px;
}
.van-collapse .van-cell__title span {
  color: #555555;
  font-weight: bold;
}
.div_boxitem .box_item{
  margin: 15px 0;
  display: block;
}
</style>
