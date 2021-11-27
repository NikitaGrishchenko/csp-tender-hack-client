const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Index.vue") }],
  },
  {
    path: "/notice",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Notice.vue"),
        children: [
          {
            path: "/notice/:noticeId",
            component: () => import("src/pages/NoticeDetail.vue"),
          },
        ],
      },
    ],
  },
  // {
  //   path: "/notice/:noticeId",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("src/pages/NoticeDetail.vue") },
  //   ],
  // },
  {
    path: "/login",
    component: () => import("layouts/Empty.vue"),
    children: [{ path: "", component: () => import("pages/login.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
