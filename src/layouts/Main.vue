<template>
    <Header />
    <div>
        <Sidebar/>
           <RouterView/>
    </div>
    <Footer/>
  
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue';
</script>

<style>

</style>