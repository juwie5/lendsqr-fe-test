<template>
  <main class="home-view">
     <Navigation/>
      <section>
          <RouterView/>
      </section>
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
  min-height: 100vh;
  max-height: 100%;
  overflow-y: auto;

  section {
    // margin-left: 208px;
    width: 100%;
  }
}

a.router-link-exact-active {
  background-color: #083972fc;
  color: white;
  padding: 10px;
  border-radius: 8px;
}
</style>
