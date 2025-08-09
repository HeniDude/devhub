<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    icon: '💬',
    title: 'Общение',
    description: 'Прямое общение с менторами через удобный чат с поддержкой файлов и кода',
    benefits: [
      'Индивидуальные консультации',
      'Групповые обсуждения',
      'Обмен файлами и кодом',
      'Голосовые сообщения'
    ]
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Поддержка',
    description: 'Персональная поддержка на каждом этапе вашего развития',
    benefits: [
      'Персональный план развития',
      'Регулярные проверки прогресса',
      'Мотивация и поддержка',
      'Помощь в решении проблем'
    ]
  },
  {
    id: 3,
    icon: '💻',
    title: 'Практика',
    description: 'Реальные проекты и практические задания для закрепления навыков',
    benefits: [
      'Работа с реальными проектами',
      'Code review от экспертов',
      'Практические задания',
      'Портфолио проектов'
    ]
  },
  {
    id: 4,
    icon: '🔗',
    title: 'Git-интеграция',
    description: 'Прямая интеграция с GitHub и GitLab для отслеживания прогресса',
    benefits: [
      'Автоматическая синхронизация',
      'Отслеживание коммитов',
      'Анализ активности',
      'Интеграция с CI/CD'
    ]
  }
])
</script>

<template>
  <section class="features" id="about">
    <div class="features-container">
      <div class="features-header">
        <h2 class="features-title">
          Почему выбирают <span class="title-accent">MentorHub</span>
        </h2>
        <p class="features-subtitle">
          Наша платформа объединяет лучшие практики менторства с современными технологиями
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">
            <span class="icon-emoji">{{ feature.icon }}</span>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-benefits">
            <div class="benefit-item" v-for="benefit in feature.benefits" :key="benefit">
              <span class="benefit-icon">✓</span>
              <span class="benefit-text">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 0;
  background: white;
  position: relative;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
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

.features-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 2px solid rgba(121, 101, 193, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
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

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(121, 101, 193, 0.15);
  border-color: var(--primary-light);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--bg-warm) 0%, rgba(245, 240, 208, 0.5) 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.feature-icon::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  border-radius: 1rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-icon::after {
  opacity: 1;
}

.icon-emoji {
  font-size: 2.5rem;
  filter: grayscale(0.2);
  transition: all 0.3s ease;
}

.feature-card:hover .icon-emoji {
  filter: grayscale(0);
  transform: scale(1.1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.benefit-icon {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.benefit-text {
  font-size: 0.875rem;
  color: var(--text-dark);
  font-weight: 500;
}

/* Анимации при появлении */
.feature-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивность */
@media (max-width: 1024px) {
  .features {
    padding: 4rem 0;
  }

  .features-title {
    font-size: 2.5rem;
  }

  .features-subtitle {
    font-size: 1.125rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .features-container {
    padding: 0 1rem;
  }

  .features-title {
    font-size: 2rem;
  }

  .features-subtitle {
    font-size: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
  }

  .icon-emoji {
    font-size: 2rem;
  }

  .feature-title {
    font-size: 1.25rem;
  }
}
</style> 