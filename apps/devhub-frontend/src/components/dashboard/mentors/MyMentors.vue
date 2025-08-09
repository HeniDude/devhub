<script setup lang="ts">
import "@/components/dashboard/styles/style.css"

const myMentors = [
  {
    id: 1,
    name: 'Мария Сидорова',
    role: 'Senior Full Stack',
    avatar: '👩‍💻',
    rating: 5,
    isOnline: true
  },
  {
    id: 2,
    name: 'Дмитрий Козлов',
    role: 'DevOps Engineer',
    avatar: '👨‍🔧',
    rating: 4,
    isOnline: false
  }
]
</script>

<template>
  <div v-if="$route.path === '/dashboard/mentors'" class="tab-content">
    <div class="mentors-grid">
      <div class="mentor-card" v-for="mentor in myMentors" :key="mentor.id">
        <div class="mentor-header">
          <div class="mentor-avatar">
            <span class="avatar-emoji">{{ mentor.avatar }}</span>
            <div class="online-status" :class="{ 'online': mentor.isOnline }"></div>
          </div>
          <div class="mentor-info">
            <h3 class="mentor-name">{{ mentor.name }}</h3>
            <p class="mentor-role">{{ mentor.role }}</p>
            <div class="mentor-rating">
              <span class="stars">★★★★★</span>
              <span class="rating-text">{{ mentor.rating }}/5</span>
            </div>
          </div>
        </div>
        <div class="mentor-actions">
          <button class="btn btn-primary">Написать</button>
          <button class="btn btn-secondary">Профиль</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mentors-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.mentor-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(121, 101, 193, 0.1);
}

.mentor-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mentor-avatar {
  position: relative;
  flex-shrink: 0;
}

.mentor-info {
  flex: 1;
}

.mentor-name {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.mentor-role{
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.mentor-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #fbbf24;
  font-size: 0.875rem;
}

.rating-text {
  font-size: 0.75rem;
  color: var(--text-light);
}

.mentor-actions {
  display: flex;
  gap: 0.75rem;
}

.mentor-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mentor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

@media (max-width: 640px) {
  .mentors-grid {
    grid-template-columns: 1fr;
  }
}
</style>