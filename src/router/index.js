import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/views/Home.vue";
import CreateProfileForm from "../components/views/CreateProfileForm.vue";
import ProfileForm from "../components/views/ProfileForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: CreateProfileForm,
  },
  {
    path: "/profile/edit/:profileForm",
    name: "profileform",
    component: ProfileForm,
  },
];

const router = createRouter({ 
  history: createWebHistory(),
  routes,
});

export default router;