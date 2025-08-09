<template>
  <section class="cta">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">
          Создай свой путь <span class="title-accent">развития</span>
        </h2>
        <p class="cta-description">
          Присоединяйся к сообществу разработчиков и начни свой путь к успеху уже сегодня. 
          Найди ментора, который поможет тебе достичь новых высот в программировании.
        </p>
        
        <div class="cta-stats">
          <div class="cta-stat">
            <div class="stat-icon">🚀</div>
            <div class="stat-content">
              <div class="stat-number">95%</div>
              <div class="stat-label">учеников находят работу</div>
            </div>
          </div>
          <div class="cta-stat">
            <div class="stat-icon">⏱️</div>
            <div class="stat-content">
              <div class="stat-number">3 мес</div>
              <div class="stat-label">среднее время до трудоустройства</div>
            </div>
          </div>
          <div class="cta-stat">
            <div class="stat-icon">💰</div>
            <div class="stat-content">
              <div class="stat-number">+150%</div>
              <div class="stat-label">рост зарплаты в среднем</div>
            </div>
          </div>
        </div>

        <div class="cta-actions">
          <button class="btn btn-primary btn-large">
            <span class="btn-icon">🎯</span>
            Начать обучение
          </button>
          <button class="btn btn-secondary btn-large">
            <span class="btn-icon">📋</span>
            Бесплатная консультация
          </button>
        </div>

        <div class="cta-guarantee">
          <div class="guarantee-item">
            <span class="guarantee-icon">✅</span>
            <span class="guarantee-text">Гарантия возврата средств в течение 30 дней</span>
          </div>
          <div class="guarantee-item">
            <span class="guarantee-icon">✅</span>
            <span class="guarantee-text">Персональный план развития</span>
          </div>
          <div class="guarantee-item">
            <span class="guarantee-icon">✅</span>
            <span class="guarantee-text">Поддержка 24/7</span>
          </div>
        </div>
      </div>

      <div class="cta-visual">
        <div class="success-stories">
          <div class="story-card story-1">
            <div class="story-avatar">👨‍💻</div>
            <div class="story-content">
              <div class="story-name">Александр К.</div>
              <div class="story-role">Frontend Developer</div>
              <div class="story-text">"Благодаря MentorHub нашел работу в крупной IT-компании за 2 месяца!"</div>
            </div>
          </div>
          
          <div class="story-card story-2">
            <div class="story-avatar">👩‍💻</div>
            <div class="story-content">
              <div class="story-name">Елена М.</div>
              <div class="story-role">Full Stack Developer</div>
              <div class="story-text">"Ментор помог мне перейти с PHP на современный стек за 4 месяца."</div>
            </div>
          </div>
          
          <div class="story-card story-3">
            <div class="story-avatar">👨‍🎓</div>
            <div class="story-content">
              <div class="story-name">Дмитрий С.</div>
              <div class="story-role">Junior Developer</div>
              <div class="story-text">"С нуля до первой работы за 6 месяцев. Спасибо платформе!"</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-background">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-medium) 100%);
  position: relative;
  overflow: hidden;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.cta-content {
  color: white;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.title-accent {
  background: linear-gradient(135deg, var(--accent-warm) 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.cta-stat {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--accent-warm);
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-warm) 0%, #fbbf24 100%);
  color: var(--primary-dark);
  box-shadow: 0 8px 25px rgba(227, 208, 149, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(227, 208, 149, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 1.25rem;
}

.cta-guarantee {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.guarantee-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.guarantee-icon {
  font-size: 1.25rem;
  color: var(--accent-warm);
}

.guarantee-text {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Визуальная часть */
.cta-visual {
  position: relative;
  height: 500px;
}

.success-stories {
  position: relative;
  width: 100%;
  height: 100%;
}

.story-card {
  position: absolute;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  max-width: 300px;
  animation: float 6s ease-in-out infinite;
}

.story-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.story-2 {
  top: 40%;
  right: 5%;
  animation-delay: 2s;
}

.story-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.story-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.story-content {
  flex: 1;
}

.story-name {
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.story-role {
  font-size: 0.875rem;
  color: var(--primary-medium);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.story-text {
  font-size: 0.875rem;
  color: var(--text-light);
  line-height: 1.5;
  font-style: italic;
}

/* Фоновые элементы */
.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: rotate 20s linear infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
  animation: rotate 15s linear infinite reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 10%;
  animation: rotate 25s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Адаптивность */
@media (max-width: 1024px) {
  .cta-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-description {
    font-size: 1.125rem;
  }

  .cta-actions {
    justify-content: center;
  }

  .cta-visual {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .cta {
    padding: 4rem 0;
  }

  .cta-container {
    padding: 0 1rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-large {
    width: 100%;
    max-width: 300px;
  }

  .cta-stats {
    gap: 1rem;
  }

  .cta-stat {
    padding: 0.75rem;
  }

  .stat-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .story-card {
    transform: scale(0.8);
    max-width: 250px;
  }

  .cta-visual {
    height: 300px;
  }
}
</style> 