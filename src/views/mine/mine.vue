<script setup>
import { ref } from "vue";

const typeList = ref([
  {
    type:"BTC",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
  {
    type:"ETH",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
  {
    type:"USDT",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
  {
    type:"SOL",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
  {
    type:"ETH",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
  {
    type:"USDT",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
  {
    type:"SOL",
    num:"0.000",
    freeze:"0.000",
    canuse:"0.000"
  },
])
</script>

<template>
  <div class="mine">
    <div class="header">
      <span>我的资产</span>
    </div>
    <div class="banner">
      <span>Your Total Price</span>
      <h3>$34512.15</h3>
      <span>24h Changes +$12.6</span>
    </div>
    <div class="box" v-for="(item,index) in typeList" :key="index">
      <div>
        <span>{{item.type}}</span>
        <span class="material-symbols-outlined arrow"> arrow_forward_ios </span>
      </div>
      <div>
        <span>数量</span>
        <span>冻结</span>
        <span>可用</span>
      </div>
      <div>
        <div>{{item.num}}</div>
        <div>{{item.freeze}}</div>
        <div>{{item.canuse}}</div>
      </div>
      <hr>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;
  .header {
    display: flex;
    justify-content: space-around;
    font-weight: 600;
  }
  .banner {
    margin: 20px 0px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    h3 {
      padding: 10px 0px;
    }
    span {
      font-size: 12px;
    }
  }
  .box {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 20px 0px;
    padding: 10px 0px;
    div{
      display: flex;
      justify-content: space-between;
      padding: 3px 0px;
      .arrow{
        font-size: 18px;
      }
    }
  }
}
</style>