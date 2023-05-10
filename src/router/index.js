import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ListMeta from "@/views/ListMeta.vue";
import UploadSample from "@/views/UploadSample.vue";
import Search from "@/views/Search.vue";
import TextSearch from "@/views/TextSearch.vue";

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
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/text_search",
    name: "TextSearch",
    component: TextSearch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
