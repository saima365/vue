import {
  createRouter,

  createWebHistory,
} from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import CustomerList from "../pages/customers/CustomerList.vue";
import CreateCustomer from "../pages/customers/CreateCustomer.vue";
import EditCustomer from "../pages/customers/EditCustomer.vue";


const routes = [
        {path:"/", component:Dashboard},
        {path:"/customers", component:CustomerList},
        {path:"/customer/create", component:CreateCustomer},
        {path:"/customer/edit", component:EditCustomer},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
