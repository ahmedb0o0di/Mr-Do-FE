<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMenu } from '../composables/useMenu'

const router = useRouter()
const { toggleMenu } = useMenu()
const replyText = ref('')

// Mock thread data
const request = {
  id: 1,
  title: 'Broken pipe in kitchen',
  status: 'In Progress',
  messages: [
    {
      id: 1,
      sender: 'user',
      name: 'You',
      time: 'Oct 24, 10:30 AM',
      text: 'Hi John, the pipe under our kitchen sink just burst and is leaking water continuously. I had to shut off the main water valve. Are you available to come take a look today?',
      hasAttachment: true
    },
    {
      id: 2,
      sender: 'handyman',
      name: 'John Smith',
      time: 'Oct 24, 10:45 AM',
      text: 'Hello! Yes, I am currently finishing up another job nearby. I can be at your place in about an hour. From the picture, it looks like a standard PVC replacement. I will bring the necessary parts. See you soon!',
      hasAttachment: false
    }
  ]
}

const sendReply = () => {
  if (replyText.value.trim() !== '') {
    request.messages.push({
      id: Date.now(),
      sender: 'user',
      name: 'You',
      time: 'Just now',
      text: replyText.value,
      hasAttachment: false
    })
    replyText.value = ''
    
    // Simulate scrolling to bottom (in a real app you'd use a ref)
    setTimeout(() => {
      const thread = document.querySelector('.thread-content');
      if(thread) thread.scrollTop = thread.scrollHeight;
    }, 100)
  }
}
</script>

<template>
  <div class="request-thread-view">
    <header class="header">
      <div class="header-top">
        <div style="display: flex; gap: 8px; align-items: center;">
          <button class="icon-btn" @click="toggleMenu" style="background: none; border: none; cursor: pointer;">
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
        <span class="status-badge">{{ request.status }}</span>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="logo-icon" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
          <h1 class="target-title" style="margin: 0;">{{ request.title }}</h1>
        </div>
      </div>
    </header>

    <main class="thread-content">
      <div class="message-group" v-for="msg in request.messages" :key="msg.id">
        <!-- Message Box -->
        <div :class="['message-box', msg.sender]">
          <div class="msg-header">
            <span class="sender-name">{{ msg.name }}</span>
            <span class="msg-time">{{ msg.time }}</span>
          </div>
          <p class="msg-text">{{ msg.text }}</p>
          
          <div v-if="msg.hasAttachment" class="attachment">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>pipe_leak_photo.jpg</span>
          </div>
        </div>
      </div>
    </main>

    <!-- Reply Area -->
    <div class="reply-bar">
      <div class="reply-input-wrapper">
        <textarea 
          v-model="replyText" 
          placeholder="Type your reply..." 
          class="reply-textarea" 
          rows="1"
          @input="$event.target.style.height = 'auto'; $event.target.style.height = $event.target.scrollHeight + 'px'"
        ></textarea>
        <button class="send-btn" :disabled="!replyText.trim()" @click="sendReply">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="send-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.request-thread-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #FAFAFA;
}
.header {
  padding: 16px 20px;
  background-color: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
  z-index: 10;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.icon-btn {
  color: #1E2022;
  padding: 4px;
}
.status-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: rgba(220, 123, 55, 0.15);
  color: var(--primary-color);
}
.target-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}
.thread-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.message-box {
  max-width: 85%;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.message-box.user {
  align-self: flex-end;
  background-color: var(--surface-color);
  border: 1px solid #E5E5EA;
  border-bottom-right-radius: 4px;
  margin-left: auto;
}
.message-box.handyman {
  align-self: flex-start;
  background-color: rgba(220, 123, 55, 0.08); /* slight primary tint */
  border: 1px solid rgba(220, 123, 55, 0.15);
  border-bottom-left-radius: 4px;
}
.msg-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.sender-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}
.message-box.handyman .sender-name {
  color: var(--primary-color);
}
.msg-time {
  font-size: 11px;
  color: var(--text-secondary);
}
.msg-text {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-primary);
}
.attachment {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 8px 12px;
  background-color: rgba(0,0,0,0.04);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
}

/* Reply Bar */
.reply-bar {
  padding: 16px 20px 24px;
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
}
.reply-input-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  background-color: #FAFAFA;
  border: 1px solid #E5E5EA;
  border-radius: 24px;
  padding: 8px 16px;
  transition: border-color 0.2s;
}
.reply-input-wrapper:focus-within {
  border-color: var(--primary-color);
}
.reply-textarea {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 15px;
  color: var(--text-primary);
  resize: none;
  min-height: 24px;
  max-height: 120px;
  padding: 4px 0;
}
.reply-textarea::placeholder {
  color: #A0A0A0;
}
.send-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 2px;
  transition: opacity 0.2s, background-color 0.2s;
}
.send-btn:disabled {
  background-color: #E2E8F0;
  color: #94A3B8;
  cursor: not-allowed;
}
.send-btn:not(:disabled):active {
  opacity: 0.8;
}
.send-icon {
  margin-left: -2px; /* slight visual center tweak for the send icon */
  margin-top: 2px;
}
</style>
