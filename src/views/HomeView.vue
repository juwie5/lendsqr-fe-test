<template>
  <main class="home-view">
    <div>
      <Navigation/>
    </div>
    
       <RouterView/> 
  </main>
</template>


<script setup lang="ts">
import Navigation from '../components/Navigation.vue';



</script>

<style lang="scss" scoped>
.home-view{
  // display: flex;
  background-color: $soft-grey;
  width: 100%;
  // position: relative;
  // min-height: 100vh;
  // max-height: 100%;
  overflow: auto;

}

</style>
