import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:([
        {
          path:"",
          component:()=>import("@/views/home/home.vue")
        },
        {
          path:"/home",
          component:()=>import("@/views/home/home.vue")
        },
        {
          path:"/quote",
          component:()=>import("@/views/quote/quote.vue"),
          children:([
            {
              path:"",
              component:()=>import("@/views/quote/component/optional.vue")
            },
            {
              path:"/usdt",
              component:()=>import("@/views/quote/component/usdt.vue")
            },
            {
              path:"/optional",
              component:()=>import("@/views/quote/component/optional.vue")
            }
          ])
        },
        {
          path:"/trade",
          component:()=>import("@/views/trade/trade.vue")
        },
        {
          path:"/mine",
          component:()=>import("@/views/mine/mine.vue")
        }
      ])
    }
  ]
})

export default router
