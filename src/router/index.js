import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import CustomerList from "../pages/customers/CustomerList.vue";
import CreateCustomer from "../pages/customers/CreateCustomer.vue";
import EditCustomer from "../pages/customers/EditCustomer.vue";
import MainForLogin from "../layouts/MainForLogin.vue";
import Register from "../pages/login/register.vue";
import Main from "../layouts/Main.vue";
import Login from "../pages/login/Login.vue";
import Auth from "../services/auth";
import TransactionList from "../pages/transactions/TransactionList.vue";
import CreateTransaction from "../pages/transactions/CreateTransaction.vue";
import Statement from "../pages/transactions/Statement.vue";

const routes = [
  {
    path: "/login",
    component: MainForLogin,
    children: [
      { path: "", component: Login },
      {path:"/register", component:Register}
    ],
  },
  {
    path: "/",
    component: Main,
    children: [
      { path: "/", component: Dashboard, meta: { requiresAuth: true } },
      { path: "/customers", component: CustomerList, meta: { requiresAuth: true } },
      { path: "/customer/create", component: CreateCustomer, meta: { requiresAuth: true } },
      { path: "/customer/edit/:id", component: EditCustomer, meta: { requiresAuth: true } },
      { path: "/transactions", component: TransactionList, meta: { requiresAuth: true } },
      { path: "/transaction/create", component: CreateTransaction, meta: { requiresAuth: true } },
      { path: "/transaction/statement", component: Statement, meta: { requiresAuth: true } },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const logged = Auth.isAuthenticated();

  if (to.matched.some(record => record.meta.requiresAuth) && !logged) {
    return next("/login");
  }

  if (to.matched.some(record => record.meta.guest) && logged) {
    return next("/");
  }

  next();
});
