const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () => import("../views/Dashboard"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "no-sidebar" },
    component: () => import("../views/Login"),
  },
  {
    path: "/adverts",
    name: "Adverts",
    meta: { layout: "default" },
    component: () => import("../views/Adverts"),
  },
  {
    path: "/brands",
    name: "Brands",
    meta: { layout: "default" },
    component: () => import("../views/Brands"),
  },
  {
    path: "/models",
    name: "Models",
    meta: { layout: "default" },
    component: () => import("../views/Models"),
  },{
    path: "/users",
    name: "Users",
    meta: { layout: "default" },
    component: () => import("../views/Users"),
  },
];

module.exports = routes;
