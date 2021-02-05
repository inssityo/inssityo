import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/views/Home.vue";
import CreateProfileForm from "../components/views/CreateProfileForm.vue";
import ProfileForm from "../components/views/ProfileForm.vue";
import Entry from "../components/account/Entry.vue";

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
  {
    path: "/entry",
    name: "entry",
    component: Entry,
  },
];

const router = createRouter({ 
  history: createWebHistory(),
  routes,
});

export default router;