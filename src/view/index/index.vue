<template>
  <div class="main">
    <div class="main_header">
      <div class="_h_left">
        <van-icon name="qr" />
        <van-icon name="scan" />
      </div>
      <div class="_h_right">
        <span>十点八分（北京）文化发展有限公司</span>
        <van-icon name="apps-o" />
      </div>
    </div>
    <div class="main_lj">
      <van-icon name="wap-home-o" class="v-icon" />
      <span> / 首页</span>
    </div>
    <div class="main_box">
      <div class="_box_le">
        <div class="_le_tit">最近项目</div>
      </div>
      <div class="_box_ce"></div>
      <div class="_box_re"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  }
}
</script>

<style>
/* main_box */
.main_box{
  padding: 0 15px;
}
.mian_box>div{
  display: flex;
  justify-content: space-between;
  flex: 1;
}
/* main_lj */
.main_lj{
  margin-left: 25px;
  margin-top: 14px;
  margin-bottom: 34px;
  height: 25px;
}
.main_lj .van-icon{
  color: #2c4198;
  font-size: 25px;
  font-weight: bold;
  line-height: 25px;
}
.main_lj span{
  font-size: 14px;
}
/* main_header */
.main .main_header {
  width: 100%;
  background: #2c4198;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main_header>div {
  color: #fff;
  font-size: 24px;
}

._h_left .van-icon {
  margin-left: 20px;
}

._h_right span {
  font-size: 17px;
}

._h_right .van-icon {
  font-size: 24px;
  margin-right: 25px;
  margin-left: 45px;
}
</style>
