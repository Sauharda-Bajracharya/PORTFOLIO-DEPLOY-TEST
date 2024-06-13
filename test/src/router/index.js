import { createRouter, createWebHistory } from "vue-router";
import Projects from "../pages/projects.vue";
import About from "../pages/about.vue";

const routes = [
  {
    path: "/",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
