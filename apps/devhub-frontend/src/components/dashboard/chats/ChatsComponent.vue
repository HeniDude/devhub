<script setup lang="ts">
import "@/components/dashboard/styles/style.css"

const chats = [
  {
    id: 1,
    name: 'Мария Сидорова',
    avatar: '👩‍💻',
    lastMessage: 'Привет! Как дела с проектом?',
    lastMessageTime: '2 мин назад',
    isOnline: true,
    unreadCount: 2
  },
  {
    id: 2,
    name: 'Frontend разработка',
    avatar: '👥',
    lastMessage: 'Новое сообщение в группе',
    lastMessageTime: '5 мин назад',
    isOnline: false,
    unreadCount: 0
  }
]
</script>

<template>
  <div v-if="$route.path === '/dashboard/chats'" class="tab-content">
    <div class="chats-container">
      <div class="chats-list">
        <div class="chat-item" v-for="chat in chats" :key="chat.id">
          <div class="chat-avatar">
            <span class="avatar-emoji">{{ chat.avatar }}</span>
            <div class="online-status" :class="{ 'online': chat.isOnline }"></div>
          </div>
          <div class="chat-info">
            <div class="chat-header">
              <h4 class="chat-name">{{ chat.name }}</h4>
              <span class="chat-time">{{ chat.lastMessageTime }}</span>
            </div>
            <p class="chat-preview">{{ chat.lastMessage }}</p>
          </div>
          <div class="chat-badge" v-if="chat.unreadCount">{{ chat.unreadCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar-emoji {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.online-status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #9ca3af;
  border: 2px solid white;
}

.online-status.online {
  background: #10b981;
}

.chats-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

.chat-item:hover {
  background: var(--bg-light);
  transform: translateX(4px);
}

.chat-item:last-child {
  border-bottom: none;
}

.chat-avatar {
  position: relative;
  flex-shrink: 0;
}

.chat-avatar .avatar-emoji {
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

.chat-info {
  flex: 1;
  min-width: 0;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.chat-name {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.875rem;
}

.chat-time {
  font-size: 0.75rem;
  color: var(--text-light);
}

.chat-preview {
  font-size: 0.875rem;
  color: var(--text-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-badge {
  background: var(--accent-warm);
  color: var(--primary-dark);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 640px) {
  .chat-item {
    padding: 0.75rem 1rem;
  }
  .chat-name {
    font-size: 0.8rem;
  }
  .chat-preview {
    font-size: 0.75rem;
  }
}
</style>