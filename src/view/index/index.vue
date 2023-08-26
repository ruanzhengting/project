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
        <div class="_le_box" v-for="item in list" :key="item.id">
          <div class="_le_box_le">
            <div class="le—ra"></div>
            <div class="le-bor"></div>
          </div>
          <div class="_le_box_box">
            <div class="le_time">{{ item.time }}</div>
            <div class="le_bom_box">
              <div>项目：<span class="type">{{ item.type }}</span></div>
              <div>进度：<span class="progress">{{ item.progress }}</span></div>
              <div>订单量：<span class="num">{{ item.num }}</span></div>
              <div>订单额：<span class="price">{{ item.price }}</span>元</div>
            </div>
          </div>
        </div>
      </div>
      <div class="_box_ce">
        <div class="ce_tit">资金动态</div>
        <div class="ce_box" v-for="item in met" :key="item.id">
          <div class="ce_box_item">
            <div class="_item_le">
              <span>></span>
              <span>{{ item.name }}</span>
            </div>
            <span class="gr">{{ item.price }}</span>
          </div>
        </div>
      </div>
      <div class="_box_re">
        <div class="re_t">
          <div class="re_t_box">
            <img src="../../assets/订单.png" alt="" class="img1">
            <div class="re_t_box_tit">
              <span class="t">批量打款</span>
              <span class="b">批量订单快速到账</span>
            </div>
          </div>
          <div class="re_t_box">
            <img src="../../assets/excel-01.png" alt="" class="img2">
            <div class="re_t_box_tit">
              <span class="t">模板下载</span>
              <span class="r">批量下发的Excel模板</span>
            </div>
          </div>
        </div>
        <div class="re_b">
          <div class="re_b_tit">快速链接</div>
          <div class="re_b_item">
            <div v-for="as in ret" :key="as.id">{{ as.tit }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [
        { id: 1, time: '2020-08-26 08:23:46', type: '外卖骑手项目', progress: '带报审', num: '2', price: '0.23' },
        { id: 2, time: '2023-08-23 08:43:11', type: '外卖骑手项目', progress: '带报审', num: 2, price: '0.04' },
        { id: 3, time: '2023-08-23 08:43:11', type: '外卖骑手项目', progress: '已结算', num: 2, price: '0.04' }
      ],
      met: [
        { id: 1, name: '平台结算', price: '-0.02' },
        { id: 2, name: '充值', price: '-0.03' },
        { id: 3, name: '平台结算', price: '-0.02' },
        { id: 4, name: '平台结算', price: '-0.03' },
        { id: 5, name: '充值', price: '-0.05' },
        { id: 6, name: '平台结算', price: '-0.02' }
      ],
      ret: [
        { id: 1, tit: '项目列表' },
        { id: 2, tit: '订单列表' },
        { id: 3, tit: '异常订单' },
        { id: 4, tit: '发票申请' },
        { id: 5, tit: '交易明细' },
        { id: 6, tit: '专属账户' },
        { id: 7, tit: '企业信息' },
        { id: 8, tit: '账号密码' }
      ]
    }
  }
}
</script>

<style>
@import url("./index.css");
</style>
