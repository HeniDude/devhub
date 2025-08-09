<script setup lang="ts">
import "@/components/dashboard/styles/style.css"

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
</script>

<template>
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
</template>

<style scoped>
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.repo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
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

@media (max-width: 640px) {
  .github-header {
    flex-direction: column;
    gap: 1rem;
  }
  .repositories-grid {
    grid-template-columns: 1fr;
  }
}
</style>