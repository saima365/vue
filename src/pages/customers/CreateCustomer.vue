<template>
 <div class="container ">
<form class="main-content" @submit.prevent="handleCreate">
  
        <h4 class="mb-4">Customer Information</h4>

        <div class="row g-3 ">

            <!-- Profile Image -->
            <div class="col-12 col-md-6">
                <label class="form-label">Profile Image</label>
                <input type="file" name="img" class="form-control" @change="handlePhoto" required>
            </div>

            <!-- Full Name -->
            <div class="col-12 col-md-6">
                <label class="form-label">Full Name</label>
                <input type="text" name="name" class="form-control" placeholder="Enter full name" v-model="customers.name" required>
            </div>

            <!-- Email -->
            <div class="col-12 col-md-6">
                <label class="form-label">Email Address</label>
                <input type="email" name="email" class="form-control" placeholder="example@email.com" v-model="customers.email" required>
            </div>

            <!-- Date of Birth -->
            <div class="col-12 col-md-6">
                <label class="form-label">Date of Birth</label>
                <input type="date" name="date_of_birth" class="form-control" v-model="customers.date_of_birth" required>
                
            </div>

            <!-- Gender -->
            <div class="col-12 col-md-6">
                <label class="form-label">Gender</label>
                <select name="gender" class="form-select" v-model="customers.gender" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            <!-- Phone -->
            <div class="col-12 col-md-6">
                <label class="form-label">Phone</label>
                <input type="text" name="phone" class="form-control" v-model="customers.phone" placeholder="">
            </div>

            <!-- Address -->
            <div class="col-12">
                <label class="form-label">Address</label>
                <textarea name="address" class="form-control" rows="3"
                    placeholder="Enter address" v-model="customers.address"></textarea>
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
                <button type="submit" class="btn btn-success">
                    Create Customer
                </button>
                <a href="" class="btn btn-secondary">
                    Cancel
                </a>
            </div>

        </div>
      </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


const baseUrl = import.meta.env.VITE_BASE_URL;
const router=useRouter()

function handlePhoto(e){
customers.img=e.target.files[0]
};
function handleCreate(){
    let formData= new FormData();
    formData.append("name",customers.name);
    formData.append("email",customers.email);
    formData.append("phone",customers.phone);
    formData.append("address",customers.address);
    formData.append("gender",customers.gender);
    formData.append("status",customers.status);
    formData.append("date_of_birth",customers.date_of_birth);

    axios.post(`${baseUrl}/customers`,formData)
    .then(res=>{
        console.log(res);
        router.push('/customers')
        
    })
    .catch()
}

const customers=reactive({
  name:"",
  email:"",
  phone:"",
  address:"",
  gender:"",
  status:"",
  date_of_birth:"",
  img:null,

})



</script>

<style>
  .main-content {
        margin-left: 250px;
        margin-top: 10px;
    }
</style>