<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMenu } from '../composables/useMenu'

const router = useRouter()
const { toggleMenu } = useMenu()

// Handyman Mock Data
const handyman = {
  id: 1,
  name: 'John Smith',
  category: 'Electrical',
  rating: 4.8,
  reviewsCount: 120,
  completedJobs: 52,
  avatar: 'https://i.pravatar.cc/150?u=1',
  address: '123 Main St, New York, NY 10001',
  about: 'Licensed electrician with over 15 years of experience in residential and commercial electrical systems. I specialize in troubleshooting, rewiring, and smart home installations. I take pride in delivering safe, high-quality workmanship on every job.',
  days: 'Mon - Sat',
  hours: '8:00 AM - 6:00 PM',
  gallery: [
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=200&h=200',
    'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=200&h=200',
    'https://images.unsplash.com/photo-1581092921461-7031e4bf0e5a?auto=format&fit=crop&q=80&w=200&h=200',
    'https://images.unsplash.com/photo-1540344464-1da22e1b9b94?auto=format&fit=crop&q=80&w=200&h=200'
  ],
  reviews: [
    { id: 1, user: 'Alice W.', rating: 5, comment: 'John was fast, professional, and fixed our breaker issue in under an hour.', date: '2 days ago' },
    { id: 2, user: 'Mark T.', rating: 4, comment: 'Good work on the lighting installation. Was a bit late but communicated well.', date: '1 week ago' },
  ]
}

// Modal States
const showMapModal = ref(false)
const showGalleryModal = ref(false)
const activeImageIndex = ref(0)

const openGallery = (index) => {
  activeImageIndex.value = index
  showGalleryModal.value = true
}

const nextImage = () => {
  if (activeImageIndex.value < handyman.gallery.length - 1) activeImageIndex.value++
}

const prevImage = () => {
  if (activeImageIndex.value > 0) activeImageIndex.value--
}
</script>

<template>
  <div class="profile-view">
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
      <h1 class="title">Profile</h1>
      <button class="icon-btn">
        <!-- Share icon -->
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>
    </header>

    <main class="content">
      <!-- Hero Section -->
      <section class="hero-card">
        <img :src="handyman.avatar" class="avatar-large" alt="Profile" />
        <h2 class="name">{{ handyman.name }}</h2>
        <p class="category">{{ handyman.category }}</p>
        
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-value">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFA41B" stroke="#FFA41B" stroke-width="2" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {{ handyman.rating }}
            </span>
            <span class="stat-label">{{ handyman.reviewsCount }} Reviews</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ handyman.completedJobs }}</span>
            <span class="stat-label">Jobs Done</span>
          </div>
        </div>
      </section>

      <!-- Location Section -->
      <section class="info-section">
        <div class="section-header-row">
          <h3 class="section-title">Location</h3>
          <button class="text-btn" @click="showMapModal = true">View on Map</button>
        </div>
        <div class="address-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="location-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p class="address-text">{{ handyman.address }}</p>
        </div>
      </section>

      <!-- About Section -->
      <section class="info-section">
        <h3 class="section-title">About</h3>
        <p class="body-text">{{ handyman.about }}</p>
      </section>

      <!-- Availability -->
      <section class="info-section">
        <h3 class="section-title">Availability</h3>
        <div class="availability-row">
          <div class="time-block">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{{ handyman.days }}</span>
          </div>
          <div class="time-block">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{{ handyman.hours }}</span>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section class="info-section">
        <div class="section-header-row">
          <h3 class="section-title">Gallery</h3>
        </div>
        <div class="gallery-grid">
          <div class="gallery-img-wrapper" v-for="(img, idx) in handyman.gallery" :key="idx" @click="openGallery(idx)">
            <img :src="img" class="gallery-thumbnail" />
          </div>
        </div>
      </section>

      <!-- Reviews Section -->
      <section class="info-section no-border">
        <div class="section-header-row">
          <h3 class="section-title">Reviews ({{ handyman.reviewsCount }})</h3>
        </div>
        <div class="review-item" v-for="review in handyman.reviews" :key="review.id">
          <div class="review-header">
            <span class="reviewer-name">{{ review.user }}</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
          <div class="review-stars">
            <span v-for="n in 5" :key="n" :class="['star', { filled: n <= review.rating }]">★</span>
          </div>
          <p class="review-comment">{{ review.comment }}</p>
        </div>
      </section>
    </main>

    <!-- Bottom Sticky CTA -->
    <div class="bottom-action">
      <button class="btn-primary large" @click="router.push(`/request/${handyman.id}`)">Make a Request</button>
    </div>

    <!-- Modals -->
    <!-- Map Modal -->
    <div class="modal-overlay" v-if="showMapModal" @click.self="showMapModal = false">
      <div class="modal-content modal-map">
        <div class="modal-header">
          <h3>Location</h3>
          <button class="close-btn" @click="showMapModal = false">✕</button>
        </div>
        <div class="map-placeholder">
          <!-- Real GMaps integration would go here -->
          <div class="mock-map-bg">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)" class="map-pin" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        </div>
        <div class="modal-footer">
          <p class="address-text">{{ handyman.address }}</p>
        </div>
      </div>
    </div>

    <!-- Gallery Slider Modal -->
    <div class="modal-overlay dark" v-if="showGalleryModal" @click.self="showGalleryModal = false">
      <button class="close-btn-floating" @click="showGalleryModal = false">✕</button>
      <div class="slider-container">
        <button class="slider-nav prev" @click="prevImage" :disabled="activeImageIndex === 0">‹</button>
        <img :src="handyman.gallery[activeImageIndex]" class="slider-image" />
        <button class="slider-nav next" @click="nextImage" :disabled="activeImageIndex === handyman.gallery.length - 1">›</button>
      </div>
      <div class="slider-dots">
        <span v-for="(img, idx) in handyman.gallery" :key="idx" :class="['dot', { active: idx === activeImageIndex }]"></span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.profile-view {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Fill full viewport so sticky parts work inside scrollable container */
  background-color: var(--surface-color);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
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
.content {
  flex: 1;
  overflow-y: auto;
  background-color: #FAFAFA;
}
.hero-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px 24px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
}
.avatar-large {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 16px;
}
.name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.category {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-weight: 500;
}
.stats-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  background-color: #F8F9FA;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02) inset;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.stat-value {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}
.stat-divider {
  width: 1px;
  height: 32px;
  background-color: #E2E8F0;
}

/* Sections */
.info-section {
  padding: 24px 20px;
  background-color: var(--surface-color);
  margin-bottom: 8px; /* space between sections showing the FAFAFA bg */
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.no-border {
  border-bottom: none;
  margin-bottom: 0;
}
.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}
.section-header-row .section-title {
  margin-bottom: 0;
}
.text-btn {
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
}

/* Location */
.address-box {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: #F8F9FA;
  padding: 16px;
  border-radius: 12px;
}
.location-icon {
  color: var(--primary-color);
  margin-top: 2px;
  flex-shrink: 0;
}
.address-text {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-primary);
}

/* About */
.body-text {
  font-size: 15px;
  line-height: 1.6;
  color: #4A5568;
}

/* Availability */
.availability-row {
  display: flex;
  gap: 24px;
}
.time-block {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 15px;
}
.time-block svg {
  color: var(--primary-color);
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.gallery-img-wrapper {
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}
.gallery-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}
.gallery-img-wrapper:active .gallery-thumbnail {
  transform: scale(0.95);
}

/* Reviews */
.review-item {
  padding: 16px 0;
  border-bottom: 1px solid #F1F5F9;
}
.review-item:last-child {
  border-bottom: none;
}
.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.reviewer-name {
  font-weight: 600;
  font-size: 15px;
  color: var(--text-primary);
}
.review-date {
  font-size: 12px;
  color: var(--text-secondary);
}
.review-stars {
  margin-bottom: 8px;
}
.star {
  color: #E2E8F0;
  font-size: 14px;
}
.star.filled {
  color: #FFA41B;
}
.review-comment {
  font-size: 14px;
  line-height: 1.5;
  color: #4A5568;
}

/* Bottom CTA */
.bottom-action {
  padding: 16px 20px 24px;
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
  box-shadow: 0 -4px 12px rgba(0,0,0,0.03);
}
.btn-primary.large {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  background-color: var(--primary-color);
  color: white;
  transition: opacity 0.2s;
}
.btn-primary.large:active {
  opacity: 0.8;
}

/* MODALS */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}
.modal-overlay.dark {
  background-color: rgba(0,0,0,0.9);
}
.modal-content {
  background-color: white;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes slideUp {
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
}
.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
}
.close-btn {
  font-size: 20px;
  color: var(--text-secondary);
  padding: 4px;
}

/* Map Modal */
.map-placeholder {
  height: 250px;
  width: 100%;
  background-color: #E2E8F0;
  position: relative;
}
.mock-map-bg {
  width: 100%;
  height: 100%;
  /* Using a generic SVG pattern for a mock map */
  background-image: radial-gradient(#CBD5E1 2px, transparent 2px);
  background-size: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.map-pin {
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
  animation: bounce 2s infinite ease-in-out;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.modal-footer {
  padding: 16px 20px;
  background-color: white;
}

/* Gallery Slider */
.close-btn-floating {
  position: absolute;
  top: 24px;
  right: 24px;
  color: white;
  font-size: 28px;
  z-index: 10;
  padding: 8px;
}
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  position: relative;
}
.slider-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255,255,255,0.2);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  line-height: 1;
  transition: background-color 0.2s;
  backdrop-filter: blur(4px);
}
.slider-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.slider-nav:not(:disabled):active {
  background-color: rgba(255,255,255,0.4);
}
.slider-nav.prev {
  left: 16px;
}
.slider-nav.next {
  right: 16px;
}
.slider-dots {
  position: absolute;
  bottom: 40px;
  display: flex;
  gap: 8px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.4);
  transition: all 0.3s;
}
.dot.active {
  background-color: white;
  transform: scale(1.2);
}
</style>
