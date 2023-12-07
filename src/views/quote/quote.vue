<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref("");

const navList = ref([
  {
    path: "/optional",
    title: "自选",
  },
  {
    path: "/usdt",
    title: "USDT",
  },
]);

const goTab = (item) => {
  active.value = item.title;
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
        :class="active == '自选' ? 'active' : ''"
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