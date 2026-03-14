<script setup>
import BottomNavigation from './components/BottomNavigation.vue'
import BurgerMenu from './components/BurgerMenu.vue'
</script>

<template>
  <div class="app-container">
    <div class="main-content">
      <router-view />
    </div>
    <BottomNavigation />
    <BurgerMenu />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 480px; /* Mobile constraint for desktop viewing */
  margin: 0 auto;
  background-color: #FAFAFA;
  box-shadow: 0 0 15px rgba(0,0,0,0.05);
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  padding-bottom: 70px; /* Space for bottom nav */
  background-color: #FAFAFA;
}
</style>
