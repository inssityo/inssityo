import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/views/Home.vue";
import Profile from "../components/views/CreateProfiles.vue";
import Profiles from "../components/profiles/Profiles.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/profile/editProfiles",
    name: "Profiles",
    component: Profiles,
  },
];

const router = createRouter({ 
  history: createWebHistory(),
  routes,
});

export default router;