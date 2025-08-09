<script setup lang="ts">
import "@/components/dashboard/styles/style.css"

const groups = [
  {
    id: 1,
    name: 'Frontend разработка',
    description: 'Сообщество фронтенд разработчиков',
    icon: '🎨',
    members: 156,
    activity: 'Активно'
  },
  {
    id: 2,
    name: 'Vue.js разработчики',
    description: 'Специалисты по Vue.js',
    icon: '⚡',
    members: 89,
    activity: 'Активно'
  }
]
</script>

<template>
  <div v-if="$route.path === '/dashboard/groups'" class="tab-content">
    <div class="groups-grid">
      <div class="group-card" v-for="group in groups" :key="group.id">
        <div class="group-header">
          <div class="group-icon">{{ group.icon }}</div>
          <div class="group-info">
            <h3 class="group-name">{{ group.name }}</h3>
            <p class="group-description">{{ group.description }}</p>
            <div class="group-stats">
              <span class="group-members">{{ group.members }} участников</span>
              <span class="group-activity">{{ group.activity }}</span>
            </div>
          </div>
        </div>
        <div class="group-actions">
          <button class="btn btn-primary">Открыть</button>
          <button class="btn btn-secondary">Настройки</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.groups-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.group-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(121, 101, 193, 0.1);
}

.group-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.group-actions {
  display: flex;
  gap: 0.75rem;
}

.group-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.group-name {
  font-weight: 600;
  color: var(--text-dark);
}

.group-description {
  font-size: 0.875rem;
  color: var(--text-light);
}

.group-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--text-light);
}

.group-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.group-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

@media (max-width: 640px) {
  .groups-grid {
    grid-template-columns: 1fr;
  }
}
</style>