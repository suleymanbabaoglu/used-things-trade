const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Dashboard"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/adverts",
    name: "Adverts",
    component: () => import("../views/Adverts"),
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import("../views/Brands"),
  },
  {
    path: "/models",
    name: "Models",
    component: () => import("../views/Models"),
  },{
    path: "/users",
    name: "Users",
    component: () => import("../views/Users"),
  },
];

module.exports = routes;
