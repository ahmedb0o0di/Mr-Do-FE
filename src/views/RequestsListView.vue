<script setup>
import { useRouter } from 'vue-router'
import { useMenu } from '../composables/useMenu'

const router = useRouter()
const { toggleMenu } = useMenu()

// Mock data for requests
const requests = [
  {
    id: 1,
    title: 'Broken pipe in kitchen',
    handymanName: 'John Smith',
    date: 'Oct 24, 2023',
    time: '10:30 AM',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Replace living room light fixture',
    handymanName: 'Mike Anderson',
    date: 'Oct 20, 2023',
    time: '02:00 PM',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Fix loose cabinet hinges',
    handymanName: 'Paul Brown',
    date: 'Oct 15, 2023',
    time: '09:15 AM',
    status: 'Completed'
  }
]
</script>

<template>
  <div class="requests-list-view">
    <header class="header">
      <button class="icon-btn" @click="toggleMenu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <h1 class="title">My Requests</h1>
      <div style="width: 24px;"></div>
    </header>

    <main class="content">
      <div class="request-card" v-for="req in requests" :key="req.id">
        <div class="card-header">
          <h3 class="req-title">{{ req.title }}</h3>
          <span :class="['status-badge', req.status.toLowerCase().replace(' ', '-')]">{{ req.status }}</span>
        </div>
        
        <div class="req-details">
          <div class="detail-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{{ req.handymanName }}</span>
          </div>
          <div class="detail-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{{ req.date }}</span>
          </div>
          <div class="detail-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{{ req.time }}</span>
          </div>
        </div>
        
        <div class="card-actions">
          <button class="btn-outline" @click="router.push(`/requests/${req.id}`)">View Details</button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.requests-list-view {
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
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}
.icon-btn {
  color: #1E2022;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
}
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  padding-bottom: 100px; /* space for bottom nav */
}
.request-card {
  background-color: var(--surface-color);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  border: 1px solid #E5E5EA;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}
.req-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
  padding-right: 12px;
  line-height: 1.3;
}
.status-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
}
.status-badge.in-progress {
  background-color: rgba(220, 123, 55, 0.15);
  color: var(--primary-color);
}
.status-badge.completed {
  background-color: #E6F4EA;
  color: #137333;
}
.req-details {
  margin-bottom: 20px;
}
.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.detail-row:last-child {
  margin-bottom: 0;
}
.card-actions {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #F1F5F9;
  padding-top: 16px;
}
.btn-outline {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  border: 1.5px solid var(--primary-color);
  background: transparent;
  transition: all 0.2s;
}
.btn-outline:active {
  background-color: rgba(220, 123, 55, 0.1);
}
</style>
