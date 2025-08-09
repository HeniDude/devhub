<script setup lang="ts">
import "@/components/dashboard/styles/style.css"

const myStudents = [
  {
    id: 1,
    name: 'Анна Волкова',
    level: 'Junior',
    avatar: '👩‍🎓',
    progress: 75
  },
  {
    id: 2,
    name: 'Сергей Морозов',
    level: 'Middle',
    avatar: '👨‍💼',
    progress: 45
  }
]
</script>

<template>
  <div v-if="$route.path === '/dashboard/students'" class="tab-content">
    <div class="students-grid">
      <div class="student-card" v-for="student in myStudents" :key="student.id">
        <div class="student-header">
          <div class="student-avatar">
            <span class="avatar-emoji">{{ student.avatar }}</span>
          </div>
          <div class="student-info">
            <h3 class="student-name">{{ student.name }}</h3>
            <p class="student-level">{{ student.level }}</p>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: student.progress + '%' }"></div>
            </div>
            <span class="progress-text">{{ student.progress }}% завершено</span>
          </div>
        </div>
        <div class="student-actions">
          <button class="btn btn-primary">Проверить</button>
          <button class="btn btn-secondary">Чат</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.students-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.student-card{
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(121, 101, 193, 0.1);
}

.student-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.student-avatar {
  position: relative;
  flex-shrink: 0;
}

.student-avatar .avatar-emoji {
  width: 50px;
  height: 50px;
  font-size: 1.25rem;
}

.student-info {
  flex: 1;
}

.student-name {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.student-level {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--bg-light);
  border-radius: 3px;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: var(--text-light);
}

.student-actions {
  display: flex;
  gap: 0.75rem;
}
</style>