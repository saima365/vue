<template>
  <div>
    <button @click="increase">Add</button>
    <div><h1>{{ count }}</h1></div>
    <button @click="decrease">Remove</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    let count=ref(0);
    function increase(){
        count.value +=1
    }
    function decrease(){
        count.value -=1
    }
</script>

<style>

</style>