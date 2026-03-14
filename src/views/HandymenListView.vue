<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenu } from '../composables/useMenu'

const route = useRoute()
const router = useRouter()

const viewMode = ref('list')
const { toggleMenu } = useMenu()

// Mock data based on wireframe
const handymen = [
  {
    id: 1,
    name: 'John Smith',
    rating: 4.8,
    reviews: 120,
    avatar: 'https://i.pravatar.cc/150?u=1',
    skills: ['Electrical', 'Plumbing'],
    available: 'Available 7 Days',
    jobsCompleted: 52
  },
  {
    id: 2,
    name: 'Mike Anderson',
    rating: 4.5,
    reviews: 98,
    avatar: 'https://i.pravatar.cc/150?u=2',
    skills: ['Electrical'],
    badge: 'Licensed & Insured',
    jobsCompleted: 45
  },
  {
    id: 3,
    name: 'Paul Brown',
    rating: 4.9,
    reviews: 86,
    avatar: 'https://i.pravatar.cc/150?u=3',
    skills: ['Electrical'],
    experience: '10+ Years Experience',
    jobsCompleted: 32
  }
]
</script>

<template>
  <div class="handymen-list-view">
    <div class="sticky-header">
      <!-- Header -->
      <header class="header">
        <div style="display: flex; gap: 8px; align-items: center;">
          <button class="icon-btn" @click="toggleMenu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <button class="icon-btn" @click="router.back()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>
        <h1 class="title">Handymen</h1>
        <button class="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </header>

      <!-- Subtitle -->
      <div class="subtitle-container">
        <span class="subtitle-label">Category:</span>
        <span class="subtitle-value">Electrical</span>
      </div>

      <!-- Search Component specific to Handymen List -->
      <div class="search-container">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Search by name..." class="search-input" />
          <button class="microphone-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Filter and Sort Bar -->
      <div class="toolbar">
        <button class="filter-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-color)" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filters
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        
        <div class="view-toggles">
          <button :class="['toggle-btn', { active: viewMode === 'list' }]" @click="viewMode = 'list'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
          </button>
          <button :class="['toggle-btn', { active: viewMode === 'grid' }]" @click="viewMode = 'grid'">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
        </div>

        <div class="sort-dropdown">
          <span class="sort-label">Sort by:</span>
          <span class="sort-value">Best Rated</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <main class="scrollable-content">
      <div :class="['handyman-list', viewMode]">
        <!-- Profile Card -->
        <div class="profile-card" v-for="pro in handymen" :key="pro.id">
          <div class="card-top">
            <img :src="pro.avatar" class="avatar" alt="Avatar" />
            <div class="details">
              <h3 class="name">{{ pro.name }}</h3>
              <div class="rating">
                <div class="stars">
                  <span v-for="n in 5" :key="n" :class="['star', { filled: n <= Math.floor(pro.rating) }]">★</span>
                </div>
                <span class="reviews">({{ pro.reviews }} Reviews)</span>
              </div>
              <div class="tags">
                <span class="tag primary" v-for="skill in pro.skills" :key="skill">{{ skill }}</span>
                <span class="tag secondary" v-if="pro.available">{{ pro.available }}</span>
                <span class="tag secondary" v-if="pro.badge">{{ pro.badge }}</span>
                <span class="tag secondary" v-if="pro.experience">{{ pro.experience }}</span>
              </div>
            </div>
          </div>
          <div class="card-bottom">
            <span class="jobs-completed">{{ pro.jobsCompleted }} Jobs Completed</span>
            <button class="btn-primary" @click="$router.push(`/handyman-profile/${pro.id}`)">View Profile</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.handymen-list-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sticky-header {
  position: sticky;
  top: 0;
  background-color: var(--surface-color);
  z-index: 10;
  border-bottom: 1px solid var(--border-color);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 8px;
}
.title {
  font-size: 19px;
  font-weight: 600;
  color: var(--text-primary);
}
.icon-btn {
  color: #1E2022;
  padding: 4px;
}
.subtitle-container {
  padding: 8px 20px 12px;
  font-size: 16px;
}
.subtitle-label {
  color: var(--text-secondary);
}
.subtitle-value {
  color: var(--text-primary);
  font-weight: 600;
  margin-left: 4px;
}
.search-container {
  padding: 0 20px 16px;
}
.search-input-wrapper {
  display: flex;
  align-items: center;
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
  flex: 1;
  font-size: 15px;
  color: var(--text-primary);
  outline: none;
  font-family: inherit;
}
.search-input::placeholder {
  color: #8E8E93;
}
.microphone-btn {
  margin-left: 12px;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #FAFAFA;
  border-radius: 8px;
  margin: 0 20px 16px;
  border: 1px solid #EFEFEF;
}
.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
}
.sort-dropdown {
  display: flex;
  align-items: center;
  font-size: 13px;
}
.sort-label {
  color: var(--text-secondary);
  margin-right: 4px;
}
.sort-value {
  color: var(--text-primary);
  font-weight: 600;
  margin-right: 4px;
}
.view-toggles {
  display: flex;
  gap: 4px;
  background-color: rgba(0,0,0,0.04);
  border-radius: 8px;
  padding: 4px;
}
.toggle-btn {
  padding: 4px;
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

/* List Content */
.scrollable-content {
  flex: 1;
  background-color: var(--surface-color);
}
.handyman-list {
  padding: 16px 20px;
}
.handyman-list.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.profile-card {
  border: 1px solid #E5E5EA;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: var(--surface-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  transition: all 0.2s;
}
.handyman-list.grid .profile-card {
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
}
.card-top {
  display: flex;
  margin-bottom: 16px;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  background-color: #eee;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.handyman-list.grid .card-top {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.handyman-list.grid .avatar {
  margin-right: 0;
  margin-bottom: 12px;
}
.details {
  flex: 1;
}
.handyman-list.grid .rating {
  justify-content: center;
}
.handyman-list.grid .tags {
  justify-content: center;
}
.name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #1a202c; /* slightly darker navy */
}
.rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.stars {
  color: #E2E8F0;
  font-size: 14px;
  letter-spacing: 1px;
}
.star.filled {
  color: #FFA41B;
}
.reviews {
  font-size: 12px;
  color: var(--text-secondary);
  margin-left: 6px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}
.tag.primary {
  background-color: rgba(220, 123, 55, 0.15); /* Primary color light */
  color: #C05612; /* Darker shade of primary */
}
.tag.secondary {
  background-color: #F1F5F9;
  color: #475569;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #F1F5F9;
}
.handyman-list.grid .card-bottom {
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
.jobs-completed {
  font-size: 13px;
  color: #64748B;
  font-weight: 500;
}
.btn-primary {
  background-color: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  transition: opacity 0.2s;
}
.handyman-list.grid .btn-primary {
  width: 100%;
}
.btn-primary:active {
  opacity: 0.8;
}
</style>
