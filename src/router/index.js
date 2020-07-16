import Vue from "vue";
import Router from "vue-router";
import ClientList from "../components/ClientList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "client-list",
      component: ClientList,
    },
  ],
});
