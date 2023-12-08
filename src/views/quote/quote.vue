<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref(1);

const navList = ref([
  {
    path: "/optional",
    title: "自选",
    nav: 1,
  },
  {
    path: "/usdt",
    title: "USDT",
    nav: 2,
  },
]);

const goTab = (item) => {
  active.value = item.nav;
  router.push(item.path);
};
</script>

<template>
  <div class="quote">
    <div class="title">
      <span>行情</span>
    </div>
    <div class="top">
      <span
        v-for="(item, index) in navList"
        :key="index"
        :class="item.nav == active ? 'active' : ''"
        @click="goTab(item)"
        >{{ item.title }}</span
      >
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.quote {
  width: auto;
  height: auto;
  padding: 0px 15px;
  .title {
    text-align: center;
    font-weight: 600;
  }
  .top {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    .active {
      color: rgb(238, 10, 36);
    }
  }
}
</style>