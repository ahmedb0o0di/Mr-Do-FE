<script setup>
defineProps({
  viewMode: {
    type: String,
    required: true
  }
})
defineEmits(['update:viewMode'])
</script>

<template>
  <div class="search-container">
    <div class="search-input-wrapper">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="text" placeholder="Search services..." class="search-input" />
    </div>
    <div class="view-toggles">
      <button :class="['toggle-btn', { active: viewMode === 'list' }]" @click="$emit('update:viewMode', 'list')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      </button>
      <button :class="['toggle-btn', { active: viewMode === 'grid' }]" @click="$emit('update:viewMode', 'grid')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  padding: 8px 20px 20px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 12px;
}
.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  /* background-color: #F8F8F8; */
  border-radius: 8px;
  border: 1px solid #E5E5EA;
  padding: 10px 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02) inset;
}
.search-icon {
  margin-right: 12px;
}
.search-input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  color: var(--text-primary);
  outline: none;
  font-family: inherit;
}
.search-input::placeholder {
  color: #8E8E93;
}
.view-toggles {
  display: flex;
  gap: 4px;
  background-color: rgba(0,0,0,0.04);
  border-radius: 8px;
  padding: 4px;
}
.toggle-btn {
  padding: 6px;
  border-radius: 6px;
  color: #8E8E93;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.toggle-btn.active {
  background-color: white;
  color: var(--text-primary);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
