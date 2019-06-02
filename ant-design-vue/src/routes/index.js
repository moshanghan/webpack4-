import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routers = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/home")
  },
  {
    path: "page1",
    name: "page1",
    component: () => import(/* webpackChunkName: "page1" */ "@/pages/page1")
  }
];

// 路由配置
const RouterConfig = {
  mode: "hash", // hash
  routes: routers
};
const router = new VueRouter(RouterConfig);

export default router;
