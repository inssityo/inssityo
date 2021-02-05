import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/views/Home.vue";
import CreateProfileForm from "../components/views/CreateProfileForm.vue";
import ProfileForm from "../components/views/ProfileForm.vue";
import Entry from "../components/account/Entry.vue";
import Roommates from "../components/dashboard/Roommates.vue";
import Apartments from "../components/views/Apartments.vue";
import RentApartments from "../components/dashboard/RentApartments.vue";
import ForSaleApartments from "../components/dashboard/ForSaleApartments.vue";

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
  {
    path: "/roommates",
    name: "roommates",
    component: Roommates,
  },
  {
    path: "/apartments",
    name: "apartments",
    component: Apartments,
  },
  {
    path: "/apartments/rent",
    name: "rent-apartments",
    component: RentApartments,
  },
  {
    path: "/apartments/for-sale",
    name: "for-sale-apartments",
    component: ForSaleApartments,
  },
];

const router = createRouter({ 
  history: createWebHistory(),
  routes,
});

export default router;