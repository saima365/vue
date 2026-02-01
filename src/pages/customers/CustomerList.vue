<template>
    <div class="table-responsive">
          <table class="table table-striped table-hover table-bordered" >
    <tr class="table-success">
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Action</th>
    </tr>
    <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.phone }}</td>
        <td>{{ customer.address }}</td>
     
        <th>
            <button>Edit</button>
            <button>Delete</button>
        </th>
    </tr>
  </table>
    </div>

</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const baseUrl=import.meta.env.VITE_BASE_URL;
   const customers=ref([]);

    const fetchCustomers=()=>{
        axios.get(`${baseUrl}/customer`)
        .then(res=>{
            console.log(res.data);
            customers.value=res.data;
            
            
        })
        .catch()
    }
    onMounted(()=>{
        fetchCustomers();
    })

</script>

<style>

</style>