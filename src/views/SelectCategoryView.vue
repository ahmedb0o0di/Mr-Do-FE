<script setup>
import { ref } from 'vue'
import HeaderTitle from '../components/HeaderTitle.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryList from '../components/CategoryList.vue'

const viewMode = ref('list')
</script>

<template>
  <div class="select-category-view">
    <div class="sticky-header">
      <HeaderTitle />
      <SearchBar v-model:viewMode="viewMode" />
    </div>
    <main class="scrollable-content">
      <CategoryList :viewMode="viewMode" />
    </main>
  </div>
</template>

<style scoped>
.select-category-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sticky-header {
  position: sticky;
  top: 0;
  background-color: var(--surface-color);
  z-index: 10;
}
.scrollable-content {
  flex: 1;
  background-color: var(--surface-color);
}
</style>
