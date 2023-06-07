import LoginView from "../views/LoginView.vue";
import UserView from "../views/UserView.vue";
import LogView from "../views/LogView.vue";

const routes = [
  { path: '/', name: 'login', component: LoginView, meta: { login: true } },
  { path: '/user', name: 'user', component: UserView },
  { path: '/log', name: 'log', component: LogView },
  { path: "*", component: LoginView }
];

const get_menus = (ctx) => {
  return [
    {
      title: ctx.$t("menu.app_console"),
      menus: [
        { icon: "mdi-account", title: ctx.$t("menu.user_view"), route: "/user" },
        { icon: "mdi-bug-outline", title: ctx.$t("menu.log_view"), route: "/log" },
      ],
    },
  ]
}

export { routes, get_menus };
