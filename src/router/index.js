import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ListMeta from "@/views/ListMeta.vue";
import UploadSample from "@/views/UploadSample.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/list_meta",
    name: "ListMeta",
    component: ListMeta,
  },
  {
    path: "/upload_sample",
    name: "UploadSample",
    component: UploadSample,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
