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
          <img src="http://localhost:5174/img_1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://localhost:5173/img_2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://localhost:5174/img_3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <hr>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#FFF"
        color="rgb(238, 10, 36)"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <hr>
    <div class="buy">
        <div>
            <span>XRP/USDT</span>
            <span class="up">0.54</span>
            <span class="up">+1.13%</span>
        </div>
        <div>
            <span>XRP/USDT</span>
            <span class="down">0.54</span>
            <span class="down">+1.13%</span>
        </div>
        <div>
            <span>XRP/USDT</span>
            <span class="up">0.54</span>
            <span class="up">+1.13%</span>
        </div>
    </div>
    <hr>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
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
  .notice{
    margin: 5px 0px;
  }
  hr{
    border: 5px solid #F5F5F5;
  }
  .buy{
    width: auto;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    div{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        span{
            margin: 2px 0px;
        }
    }
    .up{
        color: #00b8a9;
    }
    .down{
        color: #e84545;
    }
  }
}
</style>