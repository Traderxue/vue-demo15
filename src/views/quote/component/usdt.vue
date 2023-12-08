<script setup>
import { getPrice } from "@/api/huobi";
import { onMounted, ref } from "vue";

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
  {
    type: "bch",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "ape",
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
  {
    type: "ape",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "doge",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "ordi",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "ht",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "fil",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "etc",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "sylo",
    price: "",
    parcent: "",
    up: 0,
  },
  {
    type: "zig",
    price: "",
    parcent: "",
    up: 0,
  },
  
]);

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
};
onMounted(() => {
  getPrices();
});
</script>

<template>
  <div class="usdt">
    <div class="header">
      <span>种类</span>
      <span style="text-align: center">价格</span>
      <span style="text-align: right">涨跌幅</span>
    </div>
    <div class="box">
      <div v-for="(item, index) in dataList" :key="index">
        <span>{{ item.type.toUpperCase() }}</span>
        <span
          style="text-align: center"
          :class="item.up == 1 ? 'up' : 'down'"
          >{{ item.price }}</span
        >
        <span style="text-align: right">
          <button :class="item.up == 1 ? 'up_btn' : 'down_btn'">
            {{ item.parcent }}%
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.usdt {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 10px;
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
      button {
        border: 0;
        width: 70px;
        height: 35px;
        border-radius: 2px;
        font-size: 13px;
        font-weight: 500;
        color: #fff;
      }
      .up {
        color: #00b8a9;
      }
      .down {
        color: #e84545;
      }
      .up_btn {
        background: #00b8a9;
      }
      .down_btn {
        background: #e84545;
      }
    }
  }
}
</style>