<script setup>
import { getDetail } from "@/api/huobi.js";
import { onMounted, ref } from "vue";

const type = ref("btc");

const activeBtn = ref("buy");

const buyList = ref([]);

const sellList = ref([]);

const getDetails = async () => {
  const { data: res } = await getDetail(type.value);
  console.log(res);
  buyList.value = res.tick.asks;
  sellList.value = res.tick.bids;
};

setInterval(()=>{
    getDetails()
},2000)

const buy = () =>{
    activeBtn.value = "buy"
}

const sell = () =>{
    activeBtn.value = "sell"
}

onMounted(() => {
  getDetails();
});
</script>

<template>
  <div class="trade">
    <div class="header">
      <div>
        <span>{{ type.toUpperCase() }}/USDT</span>
        <p>-0.18%</p>
      </div>
      <span class="material-symbols-outlined"> candlestick_chart </span>
    </div>
    <div class="box">
      <div class="left">
        <div class="btn">
          <button class="buy" @click="buy">买入</button>
          <button class="sell" @click="sell">卖出</button>
        </div>
        <p>可用0.0000 USDT</p>
        <div style="border-bottom: 1px solid gray">
          <input type="text" placeholder="请输入购买数量" />
          <span>USDT</span>
        </div>
        <div>
          <button :class="activeBtn=='buy'?'buy':'sell'">{{activeBtn=='buy'?'买入':'卖出'}}</button>
        </div>
      </div>
      <div class="right">
        <div class="top_title">
          <span>价格</span>
          <span>数量</span>
        </div>
        <div class="content">
          <div class="top">
            <div v-for="(item, index) in buyList" :key="index">
              <span>{{ item[0] }}</span
              ><span>{{ item[1].toFixed(3) }}</span>
            </div>
          </div>
          <div class="bottom">
            <div v-for="(item,index) in sellList" :key="index"><span>{{item[0]}}</span><span>{{item[1].toFixed(3)}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="position">
        <div class="top">
            <span>当前持仓</span>
            <span>全部</span>
        </div>
        <div class="position_list">

        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  width: auto;
  height: auto;
  padding: 0px 15px;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        font-weight: 600;
      }
      p {
        font-size: 12px;
        font-weight: 600;
        margin-left: 5px;
      }
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
    height: 225px;
    .left {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 50%;
      box-sizing: border-box;
      font-weight: 600;
      .btn {
        display: flex;
        justify-content: space-between;
        button {
          width: 70px;
          height: 30px;
          font-weight: 500;
          color: #FFF;
          border: 0;
          font-size: 14px;
        }
        .buy{
            background: #00b8a9;
        }
        .sell{
            background: #e84545;
        }
      }
      p {
        font-size: 12px;
        margin-top: 10px;
      }
      div {
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0px;
        input {
          box-sizing: border-box;
          height: 30px;
          font-size: 14px;
          border: 0;
          width: 80%;
        }
        button {
          width: 100%;
          height: 35px;
          border: 0;
          color: #FFF;
          font-weight: 500;
        }
        .buy{
            background: #00b8a9;
        }
        .sell{
            background: #e84545;
        }
      }
    }
    .right {
      width: 50%;
      box-sizing: border-box;
      padding-left: 35px;
      .top_title {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        margin: 10px 0px;
      }
      .content {
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        font-weight: 600;
        .top {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          color: #00b8a9;
          div {
            display: flex;
            justify-content: space-between;
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          margin-top: 10px;
          color: #e84545;
          div {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .position{
    width: auto;
    height: auto;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
    }
    .position_list{
        width: auto;
        height: auto;
        padding: 15px;
    }
  }
}
</style>