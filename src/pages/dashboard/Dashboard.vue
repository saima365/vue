<script setup>

import { ref } from 'vue';
import Counter from '../../components/Counter.vue';

let students=["saima","mahedi","tithe"];
let name= "Tithe";
let active=ref(true);
const change=()=>{
  active.value=!active.value;
}

</script>

<template>
<Counter/>
  <div>
  <h1>Hello {{ name }}</h1>
  <h1 v-if="active">Address : Mirpur </h1>
  <h1 v-else>Address : Dhanmondi </h1>
  <button @click="change">Change</button>
  </div>
  <ol>
    <li v-for="student in students" :key="i">{{ student }}</li>
  </ol>
  
</template>

<style scoped>

</style>