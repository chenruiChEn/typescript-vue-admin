import Vue from "vue";
import Router from "vue-router";
const P404 = (resolve: any) =>
  require.ensure([], () => resolve(require("@/views/404.vue")));
let routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home"
  },
  {
    path: "/404",
    name: "404",
    component: P404,
    hidden: true,
    meta: {
      ignoreAuth: true
    }
  },
  {
    path: "*",
    component: P404,
    hidden: true,
    meta: {
      ignoreAuth: true
    }
  }
];
const routerContext = require.context("./modules", true, /\.ts$/);

routerContext.keys().forEach(route => {
  const routerModle = routerContext(route);
  routes = [...(routerModle.default || routerModle), ...routes];
});

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
