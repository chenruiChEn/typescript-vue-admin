const Layout = (resolve: any) =>
  require.ensure([], () => resolve(require("@/views/layout.vue")));
export default [
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/home/home.vue")
      }
    ]
  }
];
