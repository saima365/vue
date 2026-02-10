import {
  createRouter,

  createWebHistory,
} from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import CustomerList from "../pages/customers/CustomerList.vue";
import CreateCustomer from "../pages/customers/CreateCustomer.vue";
import EditCustomer from "../pages/customers/EditCustomer.vue";
import MainForLogin from "../layouts/MainForLogin.vue";
import Login from "../pages/login/login.vue";
import Register from "../pages/login/register.vue";
import Main from "../layouts/Main.vue";



const routes = [
  {

    path:"/login",
    component:MainForLogin,
    children:[
      {path:"/login", component:Login},
      {path:"/register", component:Register}
    ]


  },
{
  path:"/",
  component:Main,
  children:[
    
        {path:"/", component:Dashboard, meta:{requiresAuth:true}},
        {path:"/customers", component:CustomerList},
        {path:"/customer/create", component:CreateCustomer},
        {path:"/customer/edit/:id", component:EditCustomer},
  ]

}



     
];







export const router = createRouter({
  history: createWebHistory(),
  routes,
});
