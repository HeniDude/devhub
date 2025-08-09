<script setup lang="ts">
import "@/components/dashboard/styles/style.css"

const skills = [
  'Vue.js', 'React', 'TypeScript', 'JavaScript', 'Node.js',
  'HTML/CSS', 'Git', 'Docker', 'AWS', 'MongoDB'
]
</script>

<template>
  <div v-if="$route.path === '/dashboard'" class="tab-content">
    <div class="profile-section">
      <div class="profile-header">
        <div class="profile-avatar">
          <span class="avatar-emoji">👨‍💻</span>
          <button class="avatar-edit">📷</button>
        </div>
        <div class="profile-info">
          <h2 class="profile-name">Алексей Петров</h2>
          <p class="profile-role">Frontend Developer</p>
          <p class="profile-location">📍 Москва, Россия</p>
        </div>
        <button class="edit-profile-btn">Редактировать профиль</button>
      </div>

      <div class="profile-details">
        <div class="detail-card">
          <h3 class="detail-title">О себе</h3>
          <p class="detail-text">
            Опытный фронтенд разработчик с 5+ годами опыта. Специализируюсь на Vue.js, React и TypeScript.
            Люблю создавать качественные пользовательские интерфейсы и делиться знаниями с коллегами.
          </p>
        </div>

        <div class="detail-card">
          <h3 class="detail-title">Навыки</h3>
          <div class="skills-grid">
            <span class="skill-tag" v-for="skill in skills" :key="skill">{{ skill }}</span>
          </div>
        </div>

        <div class="detail-card">
          <h3 class="detail-title">Статистика</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">45</div>
              <div class="stat-label">Проектов</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">12</div>
              <div class="stat-label">Учеников</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Успешность</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-section {
  max-width: 800px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.profile-avatar {
  position: relative;
  flex-shrink: 0;
}

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

.avatar-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  background: var(--accent-warm);
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.profile-role {
  font-size: 1rem;
  color: var(--primary-medium);
  margin-bottom: 0.5rem;
}

.profile-location {
  font-size: 0.875rem;
  color: var(--text-light);
}

.edit-profile-btn {
  padding: 0.75rem 1.5rem;
  background: var(--primary-medium);
  color: white;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.edit-profile-btn:hover {
  background: var(--primary-dark);
}

.profile-details {
  display: grid;
  gap: 1.5rem;
}

.detail-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.detail-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.detail-text {
  color: var(--text-light);
  line-height: 1.6;
}

.detail-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.detail-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.skill-tag {
  transition: background 0.2s ease, color 0.2s ease;
}
.skill-tag:hover {
  background: var(--primary-medium);
  color: white;
}


.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--bg-warm);
  color: var(--primary-dark);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(121, 101, 193, 0.2);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: var(--bg-light);
  border-radius: 0.75rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-medium);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-light);
}

@media (max-width: 640px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  .edit-profile-btn {
    width: 100%;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>