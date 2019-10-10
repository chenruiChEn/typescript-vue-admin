export default [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ "@/views/login.vue")
  }
];
