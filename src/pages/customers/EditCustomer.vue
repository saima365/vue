<template>
  <div class="container">
    <form class="main-content" v-if="customers.name" @submit.prevent="handleUpdate">
      <h4 class="mb-4">Customer Information</h4>

      <div class="row g-3">
        <!-- Profile Image -->
        <div class="col-12 col-md-6">
          <label class="form-label">Profile Image</label>
          <input
            type="file"
            name="img"
            class="form-control"
            @change="handlePhoto"
            
          />
        </div>

        <!-- Full Name -->
        <div class="col-12 col-md-6">
          <label class="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Enter full name"
            v-model="customers.name"
            
          />
        </div>

        <!-- Email -->
        <div class="col-12 col-md-6">
          <label class="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="example@email.com"
            v-model="customers.email"
            
          />
        </div>

        <!-- Date of Birth -->
        <div class="col-12 col-md-6">
          <label class="form-label">Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            class="form-control"
            v-model="customers.date_of_birth"
            
          />
        </div>

        <!-- Gender -->
        <div class="col-12 col-md-6">
          <label class="form-label">Gender</label>
          <select
            name="gender"
            class="form-select"
            v-model="customers.gender"
            
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <!-- Phone -->
        <div class="col-12 col-md-6">
          <label class="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            class="form-control"
            v-model="customers.phone"
            placeholder=""
          />
        </div>

        <!-- Address -->
        <div class="col-12">
          <label class="form-label">Address</label>
          <textarea
            name="address"
            class="form-control"
            rows="3"
            placeholder="Enter address"
            v-model="customers.address"
          ></textarea>
        </div>

        <!-- Status -->
        <div class="col-12 col-md-6">
          <label class="form-label">Status</label>
          <select name="status" class="form-select" v-model="customers.status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Idle">Idle</option>
          </select>
        </div>

        <!-- Buttons -->
        <div class="col-12 d-flex flex-column flex-sm-row gap-2 mt-3">
          <button type="submit" class="btn btn-success">Update</button>
          <a href="" class="btn btn-secondary"> Cancel </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
let customerId = route.params.id;
console.log(customerId);
let customers = ref({

});
const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchCustomer = () => {
  axios
    .get(`${baseUrl}/customers/${customerId}`)
    .then((res) => {
      console.log(res.data);
      customers.value = res.data.customer;
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  fetchCustomer();
});
function handlePhoto(e) {
    customers.value.img = e.target.files[0];
}

function handleUpdate() {
  let formData = new FormData();
  
 
  formData.append("name", customers.value.name || "");
  formData.append("email", customers.value.email || "");
  formData.append("phone", customers.value.phone || "");
  formData.append("address", customers.value.address || "");
  formData.append("gender", customers.value.gender || "");
  formData.append("status", customers.value.status || "");
  formData.append("date_of_birth", customers.value.date_of_birth || "");
  formData.append("_method", "PUT");

  if (customers.value.img instanceof File) {
    formData.append("img", customers.value.img);
  }

  // console.log(formData);
  
  
  
  axios
    .post(`${baseUrl}/customers/${customerId}`,formData)
    .then((res) => {
      console.log(res.data);
      router.push("/customers");
    })
    .catch((err) => {
    
      console.log(err);
     
    });
}

</script>

<style></style>
