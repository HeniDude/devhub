<script setup lang="ts">
import { ref } from 'vue'

const mentors = ref([
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'Senior Frontend Developer',
    avatar: '👨‍💻',
    rating: 5,
    isOnline: true,
    skills: ['Vue.js', 'React', 'TypeScript', 'Node.js'],
    description: 'Помогаю разработчикам освоить современный фронтенд стек и лучшие практики разработки.',
    students: 45,
    experience: 8,
    projects: 120
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    role: 'Full Stack Developer',
    avatar: '👩‍💻',
    rating: 5,
    isOnline: true,
    skills: ['Python', 'Django', 'React', 'PostgreSQL'],
    description: 'Специализируюсь на создании масштабируемых веб-приложений и обучении full-stack разработке.',
    students: 38,
    experience: 6,
    projects: 85
  },
  {
    id: 3,
    name: 'Дмитрий Козлов',
    role: 'DevOps Engineer',
    avatar: '👨‍🔧',
    rating: 4,
    isOnline: false,
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    description: 'Эксперт по автоматизации процессов разработки и развертывания приложений.',
    students: 32,
    experience: 7,
    projects: 95
  },
  {
    id: 4,
    name: 'Анна Волкова',
    role: 'Mobile Developer',
    avatar: '👩‍📱',
    rating: 5,
    isOnline: true,
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    description: 'Помогаю создавать качественные мобильные приложения и изучать кроссплатформенную разработку.',
    students: 28,
    experience: 5,
    projects: 65
  },
  {
    id: 5,
    name: 'Сергей Морозов',
    role: 'Backend Developer',
    avatar: '👨‍💼',
    rating: 4,
    isOnline: false,
    skills: ['Java', 'Spring', 'Microservices', 'MongoDB'],
    description: 'Специалист по созданию надежных backend систем и архитектуре приложений.',
    students: 41,
    experience: 9,
    projects: 150
  },
  {
    id: 6,
    name: 'Елена Соколова',
    role: 'UI/UX Designer',
    avatar: '👩‍🎨',
    rating: 5,
    isOnline: true,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    description: 'Помогаю создавать интуитивные и красивые интерфейсы с фокусом на пользовательский опыт.',
    students: 35,
    experience: 6,
    projects: 80
  }
])

const selectMentor = (mentor: any) => {
  console.log('Выбран ментор:', mentor.name)
  // Здесь будет логика перехода к профилю ментора
}
</script>

<template>
  <section class="mentors" id="mentors">
    <div class="mentors-container">
      <div class="mentors-header">
        <h2 class="mentors-title">
          Популярные <span class="title-accent">менторы</span>
        </h2>
        <p class="mentors-subtitle">
          Выберите эксперта в своей области и начните развиваться уже сегодня
        </p>
      </div>

      <div class="mentors-grid">
        <div 
          class="mentor-card" 
          v-for="mentor in mentors" 
          :key="mentor.id"
          @click="selectMentor(mentor)"
        >
          <div class="mentor-header">
            <div class="mentor-avatar">
              <span class="avatar-emoji">{{ mentor.avatar }}</span>
              <div class="online-status" :class="{ 'online': mentor.isOnline }"></div>
            </div>
            <div class="mentor-info">
              <h3 class="mentor-name">{{ mentor.name }}</h3>
              <p class="mentor-role">{{ mentor.role }}</p>
              <div class="mentor-rating">
                <div class="stars">
                  <span 
                    class="star" 
                    v-for="i in 5" 
                    :key="i"
                    :class="{ 'filled': i <= mentor.rating }"
                  >★</span>
                </div>
                <span class="rating-text">{{ mentor.rating }}/5</span>
              </div>
            </div>
          </div>

          <div class="mentor-skills">
            <span 
              class="skill-tag" 
              v-for="skill in mentor.skills" 
              :key="skill"
            >{{ skill }}</span>
          </div>

          <p class="mentor-description">{{ mentor.description }}</p>

          <div class="mentor-stats">
            <div class="stat">
              <span class="stat-number">{{ mentor.students }}</span>
              <span class="stat-label">учеников</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ mentor.experience }}</span>
              <span class="stat-label">лет опыта</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ mentor.projects }}</span>
              <span class="stat-label">проектов</span>
            </div>
          </div>

          <div class="mentor-actions">
            <button class="btn btn-primary btn-full">
              <span class="btn-icon">💬</span>
              Связаться
            </button>
            <button class="btn btn-secondary btn-full">
              <span class="btn-icon">👁️</span>
              Профиль
            </button>
          </div>
        </div>
      </div>

      <div class="mentors-cta">
        <button class="btn btn-primary btn-large">
          <span class="btn-icon">🔍</span>
          Найти больше менторов
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mentors {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-warm) 100%);
  position: relative;
}

.mentors-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.mentors-header {
  text-align: center;
  margin-bottom: 4rem;
}

.mentors-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title-accent {
  background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mentors-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.mentors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.mentor-card {
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 2px solid rgba(121, 101, 193, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.mentor-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.mentor-card:hover::before {
  transform: scaleX(1);
}

.mentor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(121, 101, 193, 0.15);
  border-color: var(--primary-light);
}

.mentor-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.mentor-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-emoji {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.online-status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #9ca3af;
  border: 3px solid white;
}

.online-status.online {
  background: #10b981;
}

.mentor-info {
  flex: 1;
}

.mentor-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.mentor-role {
  color: var(--text-light);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.mentor-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #d1d5db;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.star.filled {
  color: #fbbf24;
}

.rating-text {
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 500;
}

.mentor-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-tag {
  background: linear-gradient(135deg, var(--bg-warm) 0%, rgba(245, 240, 208, 0.5) 100%);
  color: var(--primary-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(121, 101, 193, 0.2);
}

.mentor-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.mentor-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--bg-light);
  border-radius: 0.75rem;
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-medium);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 500;
}

.mentor-actions {
  display: flex;
  gap: 0.75rem;
}

.btn {
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(121, 101, 193, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(121, 101, 193, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-medium);
  border: 2px solid var(--primary-medium);
}

.btn-secondary:hover {
  background: var(--primary-medium);
  color: white;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1rem;
}

.mentors-cta {
  text-align: center;
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

/* Анимации при появлении */
.mentor-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.mentor-card:nth-child(1) { animation-delay: 0.1s; }
.mentor-card:nth-child(2) { animation-delay: 0.2s; }
.mentor-card:nth-child(3) { animation-delay: 0.3s; }
.mentor-card:nth-child(4) { animation-delay: 0.4s; }
.mentor-card:nth-child(5) { animation-delay: 0.5s; }
.mentor-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивность */
@media (max-width: 1024px) {
  .mentors {
    padding: 4rem 0;
  }

  .mentors-title {
    font-size: 2.5rem;
  }

  .mentors-subtitle {
    font-size: 1.125rem;
  }

  .mentors-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .mentors-container {
    padding: 0 1rem;
  }

  .mentors-title {
    font-size: 2rem;
  }

  .mentors-subtitle {
    font-size: 1rem;
  }

  .mentors-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .mentor-card {
    padding: 1.5rem;
  }

  .mentor-actions {
    flex-direction: column;
  }

  .mentor-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style> 