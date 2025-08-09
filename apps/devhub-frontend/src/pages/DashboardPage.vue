<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import DashboardSidebar from '../components/dashboard/sidebar/DashboardSidebar.vue'

const route = useRoute()

const getCurrentTabTitle = computed(() => {
  switch (route.name) {
    case 'profile':
      return 'Профиль'
    case 'mentors':
      return 'Мои менторы'
    case 'students':
      return 'Мои ученики'
    case 'groups':
      return 'Группы'
    case 'chats':
      return 'Чаты'
    case 'github':
      return 'GitHub Интеграция'
    default:
      return 'Дашборд'
  }
})
</script>

<template>
  <div class="dashboard">
    <DashboardSidebar />
    <main class="dashboard-main">
      <div class="dashboard-header">
        <div class="header-left">
          <h1 class="dashboard-title">{{ getCurrentTabTitle }}</h1>
        </div>
        <div class="dashboard-actions">
          <button class="action-btn">
            <span class="action-icon">🔔</span>
            <span class="action-text">Уведомления</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">⚙️</span>
            <span class="action-text">Настройки</span>
          </button>
        </div>
      </div>

      <div class="dashboard-content">
        <RouterView/>
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
  background: var(--bg-light);
}

.dashboard-main {
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  overflow-y: auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.dashboard-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
}

.dashboard-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;
}

.action-btn:hover {
  background: var(--bg-light);
  border-color: var(--primary-light);
}

.action-icon {
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .dashboard-main {
    margin-left: 80px;
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .dashboard-main {
    margin-left: 0;
    padding: 1rem;
  }

  .dashboard-header {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .dashboard-actions {
    display: none;
  }
}
</style> 