<script setup>
import { useMenu } from '../composables/useMenu'
import { useRouter } from 'vue-router'

const { isMenuOpen, closeMenu } = useMenu()
const router = useRouter()

const categories = [
  { id: 1, name: 'Carpenters' },
  { id: 2, name: 'Plumbers' },
  { id: 3, name: 'Electricians' },
  { id: 4, name: 'Mechanics' },
  { id: 5, name: 'Appliance Repair' },
  { id: 6, name: 'TV Technicians' }
]

const navigate = (path) => {
  closeMenu()
  router.push(path)
}
</script>

<template>
  <transition name="slide">
    <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu">
      <aside class="menu-drawer" @click.stop>
        <div class="menu-header">
          <div class="app-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="logo-icon" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            <span class="logo-text">MR-DO</span>
          </div>
          <button class="close-btn" @click="closeMenu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="menu-content">
          <div class="menu-label">Categories</div>
          <ul class="menu-list">
            <li class="menu-item" v-for="cat in categories" :key="cat.id" @click="navigate(`/category/${cat.id}`)">
              <div class="cat-dot"></div>
              {{ cat.name }}
            </li>
          </ul>
          
          <hr class="separator" />
          
          <ul class="menu-list">
            <li class="menu-item" @click="alert('Settings')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Settings
            </li>
          </ul>

          <div class="menu-profile" @click="navigate('/profile')">
            <img src="https://i.pravatar.cc/150?u=44" alt="profile" class="menu-avatar"/>
            <div class="menu-profile-info">
              <span class="menu-name">Ahmed Youssef</span>
              <span class="menu-view">View Profile</span>
            </div>
            <button class="menu-logout-btn" @click.stop="alert('Logout')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
          
          <hr class="separator" />
          
          <ul class="menu-list secondary-list">
            <li class="menu-item link-item" @click="alert('Privacy Page')">Privacy Page</li>
            <li class="menu-item link-item" @click="alert('Copy Rights')">Copy Rights</li>
            <li class="menu-item link-item" @click="alert('Terms and Conditions')">Terms and Conditions</li>
          </ul>
        </div>
      </aside>
    </div>
  </transition>
</template>

<style scoped>
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: flex-start;
}
.menu-drawer {
  width: 280px;
  max-width: 80%;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 16px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}
.menu-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F1F5F9;
  margin-bottom: 8px;
}
.app-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-text {
  font-size: 20px;
  font-weight: 800;
  color: var(--primary-color);
  letter-spacing: -0.5px;
}
.close-btn {
  background: none;
  border: none;
  color: #4A5568;
  padding: 4px;
  cursor: pointer;
}
.menu-label {
  font-size: 13px;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 12px;
  margin-top: 8px;
}
.cat-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--primary-color);
  opacity: 0.5;
}
.menu-content {
  flex: 1;
  overflow-y: auto;
  padding: 0 16px 24px;
}
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.menu-item:active {
  background-color: #F1F5F9;
}
.menu-item svg {
  color: #8E8E93;
}
.link-item {
  font-size: 14px;
  color: #4A5568;
  padding: 12px;
}
.separator {
  border: none;
  border-top: 1px solid #E2E8F0;
  margin: 12px 0;
}
.menu-profile {
  display: flex;
  align-items: center;
  padding: 16px 12px;
  background-color: #F8F9FA;
  border-radius: 12px;
  margin: 12px 0;
  cursor: pointer;
}
.menu-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
  border: 2px solid white;
}
.menu-profile-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.menu-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.menu-view {
  font-size: 12px;
  color: var(--text-secondary);
}
.menu-logout-btn {
  padding: 8px;
  color: #DC2626;
  background: transparent;
  border-radius: 8px;
}
.menu-logout-btn:active {
  background-color: #FEF2F2;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}
.slide-enter-active .menu-drawer,
.slide-leave-active .menu-drawer {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-from .menu-drawer,
.slide-leave-to .menu-drawer {
  transform: translateX(-100%);
}
</style>
