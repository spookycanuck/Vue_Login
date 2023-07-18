import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";
import LoginView from "./components/LoginView.vue";
import Add from "./components/AddView.vue"
import Update from "./components/UpdateView"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: HomeView,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: LoginView,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
