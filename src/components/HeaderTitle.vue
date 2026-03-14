<script setup>
import { useMenu } from '../composables/useMenu'
const { toggleMenu } = useMenu()
</script>

<template>
  <header class="header">
    <button class="icon-btn" @click="toggleMenu">
      <!-- Burger SVG -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    <h1 class="title">Select Category</h1>
    <button class="icon-btn">
      <!-- Search Magnifier SVG -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: var(--surface-color);
}
.title {
  font-size: 19px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}
.icon-btn {
  color: #1E2022;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px; /* hit area */
}
</style>
