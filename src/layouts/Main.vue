<template>
      
    <div id="main-wrapper">
    <Header />
        <Sidebar/>
           <RouterView/>
   
   
  </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue';
</script>

<style>

</style>