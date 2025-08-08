<template>
  <aside class="sidebar" :class="{ 'sidebar--collapsed': isCollapsed }">
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <div class="logo-icon">🚀</div>
        <span class="logo-text" v-show="!isCollapsed">MentorHub</span>
      </div>
      <button class="collapse-btn" @click="toggleCollapse">
        <span class="collapse-icon">◀</span>
      </button>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section">
        <h3 class="nav-section-title" v-show="!isCollapsed">Основное</h3>
        <ul class="nav-list">
          <li v-for="item in mainNavItems" :key="item.id">
            <a 
              :href="item.href" 
              class="nav-link"
              :class="{ 'nav-link--active': activeTab === item.id }"
              @click="setActiveTab(item.id)"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text" v-show="!isCollapsed">{{ item.text }}</span>
              <span class="nav-badge" v-if="item.badge && !isCollapsed">{{ item.badge }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <h3 class="nav-section-title" v-show="!isCollapsed">Сообщества</h3>
        <ul class="nav-list">
          <li v-for="item in communityNavItems" :key="item.id">
            <a 
              :href="item.href" 
              class="nav-link"
              :class="{ 'nav-link--active': activeTab === item.id }"
              @click="setActiveTab(item.id)"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text" v-show="!isCollapsed">{{ item.text }}</span>
              <span class="nav-badge" v-if="item.badge && !isCollapsed">{{ item.badge }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <h3 class="nav-section-title" v-show="!isCollapsed">Интеграции</h3>
        <ul class="nav-list">
          <li v-for="item in integrationNavItems" :key="item.id">
            <a 
              :href="item.href" 
              class="nav-link"
              :class="{ 'nav-link--active': activeTab === item.id }"
              @click="setActiveTab(item.id)"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text" v-show="!isCollapsed">{{ item.text }}</span>
              <span class="nav-status" v-if="item.status && !isCollapsed" :class="item.status">
                {{ item.status === 'connected' ? '✓' : '○' }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="sidebar-footer" v-show="!isCollapsed">
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
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapsed = ref(false)
const activeTab = ref('profile')

const mainNavItems = [
  { id: 'profile', text: 'Профиль', icon: '👤', href: '#profile' },
  { id: 'mentors', text: 'Мои менторы', icon: '👥', href: '#mentors', badge: '3' },
  { id: 'students', text: 'Мои ученики', icon: '🎓', href: '#students', badge: '12' },
  { id: 'groups', text: 'Группы', icon: '👥', href: '#groups', badge: '5' },
  { id: 'chats', text: 'Чаты', icon: '💬', href: '#chats', badge: '8' }
]

const communityNavItems = [
  { id: 'communities', text: 'Сообщества', icon: '🏘️', href: '#communities' },
  { id: 'events', text: 'События', icon: '📅', href: '#events', badge: '2' },
  { id: 'resources', text: 'Ресурсы', icon: '📚', href: '#resources' }
]

const integrationNavItems = [
  { id: 'github', text: 'GitHub', icon: '🐙', href: '#github', status: 'connected' },
  { id: 'gitlab', text: 'GitLab', icon: '🦊', href: '#gitlab', status: 'disconnected' },
  { id: 'discord', text: 'Discord', icon: '🎮', href: '#discord', status: 'connected' }
]

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

const logout = () => {
  console.log('Выход из системы')
  // Здесь будет логика выхода
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background: white;
  border-right: 1px solid rgba(121, 101, 193, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.sidebar--collapsed {
  width: 80px;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-logo {
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

.collapse-btn {
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
}

.collapse-btn:hover {
  background: var(--primary-light);
  color: white;
}

.collapse-icon {
  font-size: 0.875rem;
  transition: transform 0.3s ease;
}

.sidebar--collapsed .collapse-icon {
  transform: rotate(180deg);
}

.sidebar-nav {
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

.sidebar-footer {
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
.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(121, 101, 193, 0.2);
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(121, 101, 193, 0.4);
}

/* Адаптивность */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    width: 280px;
  }

  .sidebar--collapsed {
    transform: translateX(0);
    width: 280px;
  }

  .sidebar--collapsed .nav-text,
  .sidebar--collapsed .nav-section-title,
  .sidebar--collapsed .logo-text,
  .sidebar--collapsed .user-details,
  .sidebar--collapsed .logout-text {
    display: block !important;
  }
}
</style> 