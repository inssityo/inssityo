import { createWebHistory, createRouter } from "vue-router";
import store from '@/store';
import Home from "../components/views/Home.vue";
import CreateProfileForm from "../components/views/CreateProfileForm.vue";
import ProfileForm from "../components/views/ProfileForm.vue";
import Entry from "../components/account/Entry.vue";
import Roommates from "../components/dashboard/Roommates.vue";
import Apartments from "../components/views/Apartments.vue";
import RentApartments from "../components/dashboard/RentApartments.vue";
import ForSaleApartments from "../components/dashboard/ForSaleApartments.vue";
import RoommateBio from "../components/dashboard/bio/RoommateBio.vue";
import ApartmentBio from "../components/dashboard/bio/ApartmentBio";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/entry",
    name: "entry",
    component: Entry,
  },
  {
    path: "/profile",
    name: "profile",
    component: CreateProfileForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile/edit/:profileForm",
    name: "profileform",
    component: ProfileForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/roommates",
    name: "roommates",
    component: Roommates,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/roommates/:id",
    name: "roommate-bio",
    component: RoommateBio,
    meta: {
      requiresAuth: true
    }
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
  {
    path: "/apartments/rent/:id",
    name: "apartment-rent-bio",
    component: ApartmentBio,
  },
  {
    path: "/apartments/for-sale/:id",
    name: "apartment-for-sale-bio",
    component: ApartmentBio,
  },
];

const router = createRouter({ 
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters.isLoggedIn) {
      next({ 
        path: "/entry",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next()
  }
})

export default router;