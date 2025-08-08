<template>
  <div class="dashboard">
    <DashboardSidebar />
    <MobileMenu :is-open="showMobileMenu" @close="showMobileMenu = false" />
    
    <main class="dashboard-main">
      <div class="dashboard-header">
        <div class="header-left">
          <button class="mobile-menu-btn" @click="showMobileMenu = true">
            <span class="menu-icon">☰</span>
          </button>
          <h1 class="dashboard-title">{{ getCurrentTabTitle() }}</h1>
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
        <!-- Профиль -->
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

        <!-- Мои менторы -->
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

        <!-- Мои ученики -->
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

        <!-- Группы -->
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

        <!-- Чаты -->
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

        <!-- GitHub интеграция -->
        <div v-if="$route.path === '/dashboard/github'" class="tab-content">
          <div class="github-section">
            <div class="github-header">
              <h2>GitHub интеграция</h2>
              <button class="btn btn-primary">Подключить GitHub</button>
            </div>
            <div class="repositories-grid">
              <div class="repo-card" v-for="repo in repositories" :key="repo.id">
                <div class="repo-header">
                  <h3 class="repo-name">{{ repo.name }}</h3>
                  <span class="repo-visibility">{{ repo.visibility }}</span>
                </div>
                <p class="repo-description">{{ repo.description }}</p>
                <div class="repo-stats">
                  <span class="repo-stat">⭐ {{ repo.stars }}</span>
                  <span class="repo-stat">🔄 {{ repo.forks }}</span>
                  <span class="repo-stat">👀 {{ repo.watchers }}</span>
                </div>
                <div class="repo-languages">
                  <span class="language-tag" v-for="lang in repo.languages" :key="lang">{{ lang }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Заглушка для других разделов -->
        <div v-if="!['/dashboard', '/dashboard/mentors', '/dashboard/students', '/dashboard/groups', '/dashboard/chats', '/dashboard/github'].includes($route.path)" class="tab-content">
          <div class="placeholder-section">
            <div class="placeholder-icon">🚧</div>
            <h2 class="placeholder-title">Раздел в разработке</h2>
            <p class="placeholder-text">Этот раздел находится в разработке и будет доступен в ближайшее время.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DashboardSidebar from '../components/dashboard/DashboardSidebar.vue'
import MobileMenu from '../components/dashboard/MobileMenu.vue'

const route = useRoute()
const showMobileMenu = ref(false)

const skills = [
  'Vue.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 
  'HTML/CSS', 'Git', 'Docker', 'AWS', 'MongoDB'
]

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

const repositories = [
  {
    id: 1,
    name: 'mentor-hub-frontend',
    description: 'Фронтенд для платформы менторства',
    visibility: 'public',
    stars: 15,
    forks: 3,
    watchers: 8,
    languages: ['Vue.js', 'TypeScript', 'CSS']
  },
  {
    id: 2,
    name: 'portfolio-website',
    description: 'Персональный сайт-портфолио',
    visibility: 'public',
    stars: 8,
    forks: 2,
    watchers: 5,
    languages: ['React', 'JavaScript', 'CSS']
  }
]

const getCurrentTabTitle = () => {
  const titles: Record<string, string> = {
    '/dashboard': 'Профиль',
    '/dashboard/mentors': 'Мои менторы',
    '/dashboard/students': 'Мои ученики',
    '/dashboard/groups': 'Группы',
    '/dashboard/chats': 'Чаты',
    '/dashboard/github': 'GitHub интеграция'
  }
  return titles[route.path] || 'Дашборд'
}
</script>

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

.mobile-menu-btn {
  display: none;
  width: 40px;
  height: 40px;
  background: var(--bg-light);
  border: 1px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--primary-light);
  color: white;
}

.menu-icon {
  font-size: 1.25rem;
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

/* Профиль */
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

/* Сетки для других вкладок */
.mentors-grid,
.students-grid,
.groups-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.mentor-card,
.student-card,
.group-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(121, 101, 193, 0.1);
}

.mentor-header,
.student-header,
.group-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mentor-avatar,
.student-avatar {
  position: relative;
  flex-shrink: 0;
}

.mentor-avatar .avatar-emoji,
.student-avatar .avatar-emoji {
  width: 50px;
  height: 50px;
  font-size: 1.25rem;
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

.mentor-info,
.student-info {
  flex: 1;
}

.mentor-name,
.student-name {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.mentor-role,
.student-level {
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

.mentor-actions,
.student-actions,
.group-actions {
  display: flex;
  gap: 0.75rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.btn-primary {
  background: var(--primary-medium);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-medium);
  border: 1px solid var(--primary-medium);
}

.btn-secondary:hover {
  background: var(--primary-medium);
  color: white;
}

/* Чаты */
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
  transition: all 0.3s ease;
}

.chat-item:hover {
  background: var(--bg-light);
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

/* GitHub интеграция */
.github-section {
  max-width: 1000px;
}

.github-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.github-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.repositories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.repo-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(121, 101, 193, 0.1);
}

.repo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.repo-name {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 1.125rem;
}

.repo-visibility {
  background: var(--bg-light);
  color: var(--text-light);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.repo-description {
  color: var(--text-light);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.repo-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.repo-stat {
  font-size: 0.875rem;
  color: var(--text-light);
}

.repo-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.language-tag {
  background: var(--bg-warm);
  color: var(--primary-dark);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Заглушка */
.placeholder-section {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.placeholder-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.placeholder-text {
  color: var(--text-light);
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .dashboard-main {
    margin-left: 80px;
    padding: 1.5rem;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
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

  .mobile-menu-btn {
    display: flex;
  }

  .dashboard-actions {
    display: none;
  }

  .mentors-grid,
  .students-grid,
  .groups-grid,
  .repositories-grid {
    grid-template-columns: 1fr;
  }
}
</style> 