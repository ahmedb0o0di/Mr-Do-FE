<template>
  <nav class="bottom-nav">
    <div :class="['nav-item', { active: $route.name === 'select-category' }]" @click="$router.push('/')">
      <div class="icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>
      <span class="label">Home</span>
    </div>
    <div :class="['nav-item', { active: $route.path.startsWith('/requests') }]" @click="$router.push('/requests')">
      <div class="icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>
      <span class="label">Requests</span>
    </div>
    <div class="nav-item">
      <div class="icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <span class="label">Messages</span>
    </div>
    <div :class="['nav-item', { active: $route.path === '/profile' }]" @click="$router.push('/profile')">
      <div class="icon-wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <span class="label">Profile</span>
    </div>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #ECECEC;
  display: flex;
  justify-content: space-around;
  padding: 12px 0 8px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.02);
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A0A0A0;
  cursor: pointer;
  flex: 1;
  transition: color 0.2s;
}
.nav-item.active {
  color: var(--primary-color);
}
.icon-wrapper {
  margin-bottom: 4px;
}
.nav-item svg {
  stroke: currentColor;
}
.nav-item.active svg {
  stroke: var(--primary-color);
}
.label {
  font-size: 11px;
  font-weight: 500;
}
.nav-item.active .label {
  font-weight: 600;
}
</style>
