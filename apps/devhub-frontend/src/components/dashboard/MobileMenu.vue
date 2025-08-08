<template>
  <div class="mobile-menu" v-if="isOpen">
    <div class="mobile-overlay" @click="closeMenu"></div>
    <div class="mobile-sidebar">
      <div class="mobile-header">
        <div class="mobile-logo">
          <div class="logo-icon">🚀</div>
          <span class="logo-text">MentorHub</span>
        </div>
        <button class="close-menu-btn" @click="closeMenu">✕</button>
      </div>

      <nav class="mobile-nav">
        <div class="nav-section">
          <h3 class="nav-section-title">Основное</h3>
          <ul class="nav-list">
            <li v-for="item in mainNavItems" :key="item.id">
              <router-link 
                :to="item.route" 
                class="nav-link"
                :class="{ 'nav-link--active': $route.path === item.route }"
                @click="closeMenu"
              >
                <span class="nav-icon">{{ item.icon }}</span>
                <span class="nav-text">{{ item.text }}</span>
                <span class="nav-badge" v-if="item.badge">{{ item.badge }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="nav-section-title">Сообщества</h3>
          <ul class="nav-list">
            <li v-for="item in communityNavItems" :key="item.id">
              <router-link 
                :to="item.route" 
                class="nav-link"
                :class="{ 'nav-link--active': $route.path === item.route }"
                @click="closeMenu"
              >
                <span class="nav-icon">{{ item.icon }}</span>
                <span class="nav-text">{{ item.text }}</span>
                <span class="nav-badge" v-if="item.badge">{{ item.badge }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="nav-section-title">Интеграции</h3>
          <ul class="nav-list">
            <li v-for="item in integrationNavItems" :key="item.id">
              <router-link 
                :to="item.route" 
                class="nav-link"
                :class="{ 'nav-link--active': $route.path === item.route }"
                @click="closeMenu"
              >
                <span class="nav-icon">{{ item.icon }}</span>
                <span class="nav-text">{{ item.text }}</span>
                <span class="nav-status" v-if="item.status" :class="item.status">
                  {{ item.status === 'connected' ? '✓' : '○' }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="mobile-footer">
        <div class="user-info">
          <div class="user-avatar">
            <span class="avatar-emoji">👨‍💻</span>
          </div>
          <div class="user-details">
            <div class="user-name">Алексей Петров</div>
            <div class="user-role">Frontend Developer</div>
          </div>
        </div>
        <button class="logout-btn" @click="logout">
          <span class="logout-icon">🚪</span>
          <span class="logout-text">Выйти</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const router = useRouter()

const mainNavItems = [
  { id: 'profile', text: 'Профиль', icon: '👤', route: '/dashboard', badge: null },
  { id: 'mentors', text: 'Мои менторы', icon: '👥', route: '/dashboard/mentors', badge: '3' },
  { id: 'students', text: 'Мои ученики', icon: '🎓', route: '/dashboard/students', badge: '12' },
  { id: 'groups', text: 'Группы', icon: '👥', route: '/dashboard/groups', badge: '5' },
  { id: 'chats', text: 'Чаты', icon: '💬', route: '/dashboard/chats', badge: '8' }
]

const communityNavItems = [
  { id: 'communities', text: 'Сообщества', icon: '🏘️', route: '/dashboard/communities', badge: null },
  { id: 'events', text: 'События', icon: '📅', route: '/dashboard/events', badge: '2' },
  { id: 'resources', text: 'Ресурсы', icon: '📚', route: '/dashboard/resources', badge: null }
]

const integrationNavItems = [
  { id: 'github', text: 'GitHub', icon: '🐙', route: '/dashboard/github', status: 'connected' },
  { id: 'gitlab', text: 'GitLab', icon: '🦊', route: '/dashboard/gitlab', status: 'disconnected' },
  { id: 'discord', text: 'Discord', icon: '🎮', route: '/dashboard/discord', status: 'connected' }
]

const closeMenu = () => {
  emit('close')
}

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('user')
  router.push('/')
  closeMenu()
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
}

.mobile-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.mobile-sidebar {
  position: relative;
  width: 280px;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.close-menu-btn {
  width: 32px;
  height: 32px;
  background: var(--bg-light);
  border: 1px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.close-menu-btn:hover {
  background: var(--primary-light);
  color: white;
}

.mobile-nav {
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.nav-section {
  margin-bottom: 2rem;
}

.nav-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  padding: 0 1.5rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: var(--text-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: var(--bg-light);
  color: var(--primary-medium);
}

.nav-link--active {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  color: white;
}

.nav-link--active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--accent-warm);
}

.nav-icon {
  font-size: 1.25rem;
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.nav-text {
  font-weight: 500;
  flex: 1;
}

.nav-badge {
  background: var(--accent-warm);
  color: var(--primary-dark);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 20px;
  text-align: center;
}

.nav-status {
  font-size: 0.875rem;
  font-weight: 700;
}

.nav-status.connected {
  color: #10b981;
}

.nav-status.disconnected {
  color: #9ca3af;
}

.mobile-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(121, 101, 193, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-emoji {
  font-size: 1.25rem;
}

.user-details {
  flex: 1;
  min-width: 0;
}

.user-name {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role {
  font-size: 0.75rem;
  color: var(--text-light);
}

.logout-btn {
  width: 100%;
  padding: 0.75rem;
  background: var(--bg-light);
  border: 1px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-dark);
}

.logout-btn:hover {
  background: #fee2e2;
  border-color: #f87171;
  color: #dc2626;
}

.logout-icon {
  font-size: 1rem;
}

/* Скроллбар */
.mobile-nav::-webkit-scrollbar {
  width: 4px;
}

.mobile-nav::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-nav::-webkit-scrollbar-thumb {
  background: rgba(121, 101, 193, 0.2);
  border-radius: 2px;
}

.mobile-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(121, 101, 193, 0.4);
}
</style> 