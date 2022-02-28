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
];

module.exports = routes;
