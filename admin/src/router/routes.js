const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/DashboardView"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView"),
  },
  {
    path: "/adverts",
    name: "Adverts",
    component: () => import("../views/AdvertsView"),
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import("../views/BrandsView"),
  },
  {
    path: "/models",
    name: "Models",
    component: () => import("../views/ModelsView"),
  },{
    path: "/users",
    name: "Users",
    component: () => import("../views/UsersView"),
  },
];

module.exports = routes;
