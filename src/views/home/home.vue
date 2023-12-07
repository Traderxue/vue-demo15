<script setup>
import { onMounted, ref } from "vue";
import { getPrice } from "@/api/huobi.js";

const dataList = ref([
  {
    type: "btc",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "eth",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "sol",
    price: "",
    parcent: "",
    up: 0,
  },
]);

const tradeList = ref([
  {
    type:"btc",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"eth",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"sol",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"ape",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"doge",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"ordi",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"ht",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"fil",
    price:"",
    parcent:"",
    up:0
  },
  {
    type:"etc",
    price:"",
    parcent:"",
    up:0
  },

])

const getPrices = () => {
  dataList.value.forEach(async (item) => {
    const { data: res } = await getPrice(item.type);
    item.price = res.tick.close;
    item.parcent = (
      ((res.tick.close - res.tick.open) / res.tick.open) *
      100
    ).toFixed(2);
    if (item.parcent > 0) {
      item.up = 1;
    }
    return item;
  });

  tradeList.value.forEach(async (item) => {
    const { data: res } = await getPrice(item.type);
    item.price = res.tick.close;
    item.parcent = (
      ((res.tick.close - res.tick.open) / res.tick.open) *
      100
    ).toFixed(2);
    if (item.parcent > 0) {
      item.up = 1;
    }
    return item;
  });
};

setInterval(() => {
  getPrices();
}, 2000);

onMounted(() => {
  getPrices();
});
</script>

<template>
  <div class="home">
    <div class="header">
      <span></span>
      <span class="logo">SCBFF</span>
      <span class="material-symbols-outlined"> language </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://localhost:5173/img_1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://localhost:5173/img_2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://localhost:5173/img_3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <hr />
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#FFF"
        color="rgb(238, 10, 36)"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <hr />
    <div class="buy">
      <div v-for="(item, index) in dataList" :key="index">
        <span style="color: #52616b">{{ item.type.toUpperCase() }}/USDT</span>
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.price }}</span>
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.parcent }}%</span>
      </div>
    </div>
    <hr />
    <div class="quick">
      <h3>快捷买币</h3>
      <span>支持BTC、ETH、USDT等</span>
      <img src="@/assets/img/img_4.png" alt="" />
    </div>
    <hr />
    <div class="list">
      <h3>基础行情</h3>
      <div class="title">
        <span>种类</span>
        <span style="text-align: center">价格</span>
        <span style="text-align: right">涨跌幅</span>
      </div>
      <div class="box">
        <div v-for="(item,index) in tradeList" :key="index">
          <span>{{item.type.toUpperCase()}}/USDT</span>
          <span style="text-align: center" :class="item.up==1?'up':'down'">{{item.price}}</span>
          <span style="text-align: right">
            <button :class="item.up==1?'up_btn':'down_btn'">{{item.parcent}}%</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding-bottom: 60px;
  .header {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    .logo {
      font-weight: 600;
    }
  }
  .banner {
    width: auto;
    height: 160px;
    margin: 10px 0px;
    padding: 0px 15px;
    img {
      width: 100%;
      height: 160px;
      border-radius: 2px;
    }
  }
  .notice {
    margin: 5px 0px;
  }
  hr {
    border: 5px solid #f5f5f5;
  }
  .buy {
    width: auto;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      span {
        margin: 2px 0px;
      }
    }
    .up {
      color: #00b8a9;
    }
    .down {
      color: #e84545;
    }
  }
  .quick {
    padding: 15px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    span {
      font-size: 13px;
      font-weight: 600;
    }
    img {
      position: absolute;
      width: 140px;
      height: 90px;
      right: 25px;
    }
  }
  .list {
    padding: 15px;
    h3 {
      color: #71c9ce;
      padding-left: 10px;
      border-left: 4px solid #71c9ce;
    }
    .title {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin: 15px 0px;
      span {
        width: 33%;
      }
    }
    .box {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      font-weight: 600;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
        span {
          width: 33%;
        }
        button{
          width: 70px;
          height: 35px;
          border: 0;
          border-radius: 2px;
          color: #FFF;
          font-weight: 500;
          font-size: 13px;
        }
        .up{
          color: #00b8a9;
        }
        .down{
          color: #e84545;
        }
        .up_btn{
          background: #00b8a9;
        }
        .down_btn{
          background: #e84545;
        }
      }
    }
  }
}
</style>