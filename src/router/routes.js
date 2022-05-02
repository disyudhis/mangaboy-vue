const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("../views/HomePage.vue"),
      },
    ],
  },
];

export default routes;
