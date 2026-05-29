<script setup>

import { RouterView } from 'vue-router';
import  home from './views/homeview.vue';
import NavBar from './components/NavBar.vue';
import Contact from './views/Contact.vue';
import Services from './views/Services.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar/> 
    <RouterView/> 
  <Footer/>
  
 
  <!-- <Home/> -->
   
</template>
