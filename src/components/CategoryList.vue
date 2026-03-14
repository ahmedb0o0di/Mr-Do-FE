<script setup>
defineProps({
  viewMode: {
    type: String,
    default: 'list'
  }
})

const categories = [
  { id: 1, name: 'Carpenters', subtitle: 'Doors, locks, cabinets', svgType: 'hammer', bg: '#EBF1F6' },
  { id: 2, name: 'Plumbers', subtitle: 'Leaks, taps, toilets', svgType: 'wrench', bg: '#EAF4FE' },
  { id: 3, name: 'Electricians', subtitle: 'Sockets, lights, breakers', svgType: 'bolt', bg: '#FDF1E6' },
  { id: 4, name: 'Mechanics', subtitle: 'Automotive, engines', svgType: 'tool', bg: '#F5ECE7' },
  { id: 5, name: 'Appliance Repair', subtitle: 'Washer, fridge, oven', svgType: 'appliance', bg: '#F2EFED' },
  { id: 6, name: 'TV Technicians', subtitle: 'Mounting, Wi-Fi, devices', svgType: 'tv', bg: '#EAF1F6' },
];
</script>

<template>
  <div :class="['category-container', viewMode]">
    <div class="category-item" v-for="cat in categories" :key="cat.id" @click="$router.push(`/category/${cat.id}`)">
      <div class="icon-box" :style="{ backgroundColor: cat.bg }">
        <svg v-if="cat.svgType === 'hammer'" class="svg-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 4l-4 4 3 3 4-4a2.828 2.828 0 0 0-4-4z"></path><path d="M14 10L4 20l-1-1 10-10"></path><path d="M8 12l4 4"></path>
        </svg>
        <svg v-if="cat.svgType === 'wrench'" class="svg-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
        <svg v-if="cat.svgType === 'bolt'" class="svg-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          <path d="M4 4l16 16 M20 4L4 20" stroke-width="1.5"/>
        </svg>
        <svg v-if="cat.svgType === 'tool'" class="svg-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="8"></circle><line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
        <svg v-if="cat.svgType === 'appliance'" class="svg-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="4" width="14" height="16" rx="2" ry="2"></rect><line x1="5" y1="10" x2="19" y2="10"></line><circle cx="12" cy="15" r="2"></circle>
        </svg>
        <svg v-if="cat.svgType === 'tv'" class="svg-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="12" rx="2" ry="2"></rect><line x1="8" y1="2" x2="12" y2="7"></line><line x1="16" y1="2" x2="12" y2="7"></line><line x1="12" y1="19" x2="12" y2="22"></line>
        </svg>
      </div>
      <div class="text-content">
        <h3 class="category-name">{{ cat.name }}</h3>
        <p class="category-subtitle" v-if="viewMode === 'list'">{{ cat.subtitle }}</p>
      </div>
      <div class="chevron" v-if="viewMode === 'list'">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Common */
.category-container {
  transition: all 0.3s;
}

/* LIST VIEW */
.category-container.list {
  display: flex;
  flex-direction: column;
}
.category-container.list .category-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.2s;
}
.category-container.list .category-item:active {
  background-color: var(--highlight-bg);
}
.category-container.list .icon-box {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  border: 1px solid rgba(0,0,0,0.03); 
  box-shadow: 0 4px 6px rgba(0,0,0,0.02) inset;
}

/* GRID VIEW */
.category-container.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 20px;
  background-color: var(--bg-color); /* Grid looks better with a faint bg behind cards */
}
.category-container.grid .category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  background-color: var(--surface-color);
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}
.category-container.grid .category-item:active {
  transform: scale(0.98);
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.category-container.grid .icon-box {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  margin-bottom: 12px;
  border: 1px solid rgba(0,0,0,0.03); 
  box-shadow: 0 4px 6px rgba(0,0,0,0.02) inset;
}
.svg-icon {
  color: var(--primary-color);
  stroke: var(--primary-color);
}
.category-container.grid .svg-icon {
  width: 36px;
  height: 36px;
}
.text-content {
  flex: 1;
}
.category-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}
.category-container.list .category-name {
  margin-bottom: 4px;
}
.category-subtitle {
  font-size: 13px;
  color: var(--text-secondary);
}
.chevron {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
