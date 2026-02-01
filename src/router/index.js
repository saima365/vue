import {
  createRouter,

  createWebHistory,
} from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import CustomerList from "../pages/customers/CustomerList.vue";


const routes = [
        {path:"/", component:Dashboard},
        {path:"/customers", component:CustomerList},

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
