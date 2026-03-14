<script setup>
// Placeholder for the Request Form
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMenu } from '../composables/useMenu'

const router = useRouter()
const { toggleMenu } = useMenu()
const title = ref('')
const details = ref('')
const imageFileName = ref(null)

const handleFileUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    imageFileName.value = file.name
  }
}

const submitRequest = () => {
  // In a real app this would POST data. Navigating to the Requests tab.
  alert('Request submitted successfully!')
  router.push('/requests') 
}
</script>

<template>
  <div class="request-form-view">
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
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="logo-icon" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
        <h1 class="title" style="margin: 0;">New Request</h1>
      </div>
      <div style="width: 24px;"></div> <!-- Spacer -->
    </header>

    <main class="content">
      <div class="form-group">
        <label>Title of the request</label>
        <input type="text" v-model="title" placeholder="e.g. Broken pipe in kitchen" class="input-field" />
      </div>

      <div class="form-group">
        <label>Message / Request Details</label>
        <textarea v-model="details" placeholder="Describe the issue in detail..." class="input-field textarea" rows="5"></textarea>
      </div>

      <div class="form-group">
        <label>Attachments (Optional)</label>
        <div class="upload-area">
          <input type="file" id="fileUpload" class="hidden-file-input" @change="handleFileUpload" accept="image/*" />
          <label for="fileUpload" class="upload-label">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 5.4.5 7.6M12 19v-9m0 0l-3 3m3-3l3 3"/>
            </svg>
            <span class="upload-text">{{ imageFileName || 'Tap to capture or upload a file' }}</span>
          </label>
        </div>
      </div>
    </main>

    <div class="bottom-action">
      <button class="btn-primary large" @click="submitRequest">Submit Request</button>
    </div>
  </div>
</template>

<style scoped>
.request-form-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--surface-color);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--surface-color);
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
  padding: 24px 20px;
  overflow-y: auto;
}
.form-group {
  margin-bottom: 24px;
}
.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.input-field {
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #E5E5EA;
  font-size: 15px;
  color: var(--text-primary);
  background-color: #FAFAFA;
  outline: none;
  font-family: inherit;
  transition: border-color 0.2s;
}
.input-field:focus {
  border-color: var(--primary-color);
}
.textarea {
  resize: vertical;
}
.input-field::placeholder {
  color: #A0A0A0;
}
.upload-area {
  margin-top: 8px;
}
.hidden-file-input {
  display: none;
}
.upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  border: 2px dashed #E5E5EA;
  border-radius: 12px;
  background-color: #FAFAFA;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.2s;
}
.upload-label:active {
  background-color: #F1F5F9;
}
.upload-label svg {
  margin-bottom: 12px;
  color: var(--primary-color);
}
.upload-text {
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}
.bottom-action {
  padding: 16px 20px 24px;
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
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
</style>
