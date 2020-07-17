import Vue from "vue";
import Router from "vue-router";
import ClientList from "../components/ClientList";
import Login from "../components/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "client-list",
      component: ClientList,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
