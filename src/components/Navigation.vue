<template>
  <section>
    <div class="navbar">
       <!-- <TopNav/> -->
       <SidebarNav/>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopNav from './TopNav.vue';
import SidebarNav from './SidebarNav.vue';

</script>

<style lang="scss" scoped>

.navbar{
   
    // height: 100%;
    position: relative;
    // overflow: scroll;
}

</style>