<template>
  <div class="container mt-5 pt-3" style="min-height: 788px">
    <div class="card shadow border-0 rounded-4 main-content">
      <!-- Header -->
      <div
        class="card-header d-flex justify-content-between align-items-center rounded-top-4"
      >
        <h5 class="mb-0">
          <i class="bi bi-bank me-2"></i>Clients Details List
        </h5>
        <router-link to="/customer/create" class="btn btn-primary btn-sm">
          <i class="bi bi-plus-circle"></i> Create Client
        </router-link>
      </div>
      <input
        type="text"
        class="form-control w-25"
        id="search"
        placeholder="Search here..."
      />
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-responsive-md" id="example5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="customer in customers" :key="customer.id">
                <td>{{ customer.id }}</td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phone }}</td>
                <td>{{ customer.address }}</td>

                <td>
                  <!-- View Button -->
                  <a
                    href="#"
                    class="btn btn-square btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#accountDetailsModal"
                    title="View"
                  >
                    <i class="bi bi-eye"></i>
                  </a>

                  <!-- Dropdown -->
                  <div class="dropdown d-inline-block">
                    <a
                      class="btn btn-link no-caret"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><router-link class="dropdown-item" :to="`/customer/edit/${customer.id}`">Edit</router-link></li>
                      <li><a class="dropdown-item" href="#">Move</a></li>
                      <li>
                        <button @click="customerDelete(customer.id)" type="button" class="dropdown-item theme-red">
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import axios from "axios";
import { onMounted, ref } from "vue";

const baseUrl = import.meta.env.VITE_BASE_URL;
const customers = ref([]);

const fetchCustomers = () => {
  axios
    .get(`${baseUrl}/customers`)
    .then((res) => {
      console.log(res.data.customers);
      customers.value = res.data.customers;
    })
    .catch();
};
onMounted(() => {
  fetchCustomers();
});
function customerDelete(id){
   if (!confirm("Are you sure you want to delete this client?")) {
    return
  }
  axios.delete(`${baseUrl}/customers/${id}`)
  .then(res=>{
    console.log(res);
     fetchCustomers();
  })
  .catch(err=>{
    console.log(err);
    
  })
}
</script>

<style>
.main-content {
  margin-left: 200px;
  margin-top: 60px;
}
</style>
