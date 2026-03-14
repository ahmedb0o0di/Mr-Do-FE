<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMenu } from '../composables/useMenu'

const router = useRouter()
const { toggleMenu } = useMenu()

// Mock User Data
const user = ref({
  name: 'Ahmed Youssef',
  email: 'ahmed.youssef@example.com',
  address: '456 Palm Avenue, Los Angeles, CA 90028',
  avatar: 'https://i.pravatar.cc/150?u=44'
})

// Mock Recent Requests Data (Subset of Requests List)
const recentRequests = [
  {
    id: 1,
    title: 'Broken pipe in kitchen',
    date: 'Oct 24, 2023',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Replace living room light fixture',
    date: 'Oct 20, 2023',
    status: 'Completed'
  }
]
</script>

<template>
  <div class="user-profile-view">
    <header class="header">
      <button class="settings-btn" @click="toggleMenu" style="background: none; border: none; cursor: pointer;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <h1 class="title">My Profile</h1>
      <div style="width: 24px;"></div>
    </header>

    <main class="content">
      <!-- Profile Hero -->
      <section class="profile-hero">
        <div class="avatar-container">
          <img :src="user.avatar" alt="User Avatar" class="avatar-img" />
          <button class="edit-avatar-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </button>
        </div>
        <h2 class="user-name">{{ user.name }}</h2>
        <p class="user-email">{{ user.email }}</p>
        
        <div class="location-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{{ user.address }}</span>
        </div>

        <button class="edit-profile-btn" @click="alert('Edit Basic Info Flow')">Edit Profile</button>
      </section>

      <!-- Account Settings Options -->
      <section class="menu-section">
        <div class="menu-item">
          <div class="item-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <span class="item-text">Privacy and Security</span>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
        
        <div class="menu-item">
          <div class="item-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
          </div>
          <span class="item-text">Payment Methods</span>
          <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </section>

      <!-- Recent Requests -->
      <section class="recent-requests">
        <div class="section-header">
          <h3 class="section-title">Recent Requests</h3>
          <button class="view-all-btn" @click="router.push('/requests')">View All</button>
        </div>
        
        <div class="request-list">
          <div class="sm-req-card" v-for="req in recentRequests" :key="req.id" @click="router.push(`/requests/${req.id}`)">
            <div class="req-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="req-info">
              <h4 class="req-title">{{ req.title }}</h4>
              <p class="req-date">{{ req.date }}</p>
            </div>
            <span :class="['mini-badge', req.status.toLowerCase().replace(' ', '-')]">{{ req.status }}</span>
          </div>
        </div>
      </section>
      
      <!-- Logout -->
      <div class="logout-wrapper">
        <button class="logout-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Log Out
        </button>
      </div>

    </main>
  </div>
</template>

<style scoped>
.user-profile-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #FAFAFA;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 10;
}
.title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
}
.settings-btn {
  color: #1E2022;
  padding: 4px;
}
.content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 90px;
}

/* Hero Section */
.profile-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--surface-color);
  padding: 32px 20px 24px;
  border-bottom: 1px solid var(--border-color);
}
.avatar-container {
  position: relative;
  margin-bottom: 16px;
}
.avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.edit-avatar-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--primary-color);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.user-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.user-email {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}
.location-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #F1F5F9;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  color: #475569;
  font-weight: 500;
  margin-bottom: 24px;
}
.location-badge svg {
  color: var(--primary-color);
}
.edit-profile-btn {
  width: 100%;
  max-width: 280px;
  padding: 12px;
  border-radius: 12px;
  background-color: rgba(220, 123, 55, 0.1); /* light primary */
  color: var(--primary-color);
  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.2s;
}
.edit-profile-btn:active {
  background-color: rgba(220, 123, 55, 0.2);
}

/* Menu Items */
.menu-section {
  background-color: var(--surface-color);
  margin-top: 16px;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.menu-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #F1F5F9;
  cursor: pointer;
}
.menu-item:last-child {
  border-bottom: none;
}
.menu-item:active {
  background-color: #FAFAFA;
}
.item-icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: #F8F9FA;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: #64748B;
}
.item-text {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
}
.chevron {
  color: #CBD5E1;
}

/* Recent Requests */
.recent-requests {
  padding: 24px 20px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.section-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}
.view-all-btn {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-color);
}
.sm-req-card {
  display: flex;
  align-items: center;
  background-color: var(--surface-color);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  border: 1px solid #E5E5EA;
  margin-bottom: 12px;
  cursor: pointer;
}
.sm-req-card:active {
  transform: scale(0.99);
}
.req-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(220, 123, 55, 0.1);
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  flex-shrink: 0;
}
.req-info {
  flex: 1;
  padding-right: 12px;
}
.req-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.3;
}
.req-date {
  font-size: 12px;
  color: var(--text-secondary);
}
.mini-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
}
.mini-badge.in-progress {
  background-color: rgba(220, 123, 55, 0.15);
  color: var(--primary-color);
}
.mini-badge.completed {
  background-color: #E6F4EA;
  color: #137333;
}

.logout-wrapper {
  padding: 24px 20px 48px;
  display: flex;
  justify-content: center;
}
.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #DC2626;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: #FEF2F2;
  transition: opacity 0.2s;
}
.logout-btn:active {
  opacity: 0.8;
}
</style>
