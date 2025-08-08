<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Развивайся с лучшими
          <span class="hero-title-accent">менторами</span>
        </h1>
        
        <p class="hero-description">
          Присоединяйся к сообществу разработчиков, где опытные менторы помогают 
          новичкам расти и развиваться. Получай персональную поддержку, 
          практикуйся в реальных проектах и интегрируйся с Git-платформами.
        </p>
        
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Менторов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2000+</div>
            <div class="stat-label">Учеников</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Сообществ</div>
          </div>
        </div>
        
        <div class="hero-actions">
          <button class="btn btn-primary btn-large">
            <span class="btn-icon">🚀</span>
            Присоединиться
          </button>
          <button class="btn btn-secondary btn-large">
            <span class="btn-icon">🔍</span>
            Найти ментора
          </button>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="hero-cards">
          <div class="floating-card card-1">
            <div class="card-avatar">👨‍💻</div>
            <div class="card-info">
              <div class="card-name">Алексей Петров</div>
              <div class="card-role">Senior Frontend</div>
            </div>
            <div class="card-status online"></div>
          </div>
          
          <div class="floating-card card-2">
            <div class="card-avatar">👩‍💻</div>
            <div class="card-info">
              <div class="card-name">Мария Сидорова</div>
              <div class="card-role">Full Stack</div>
            </div>
            <div class="card-status online"></div>
          </div>
          
          <div class="floating-card card-3">
            <div class="card-avatar">👨‍🎓</div>
            <div class="card-info">
              <div class="card-name">Дмитрий Козлов</div>
              <div class="card-role">Junior Dev</div>
            </div>
            <div class="card-status typing"></div>
          </div>
        </div>
        
        <div class="hero-graphics">
          <div class="graphic-circle circle-1"></div>
          <div class="graphic-circle circle-2"></div>
          <div class="graphic-circle circle-3"></div>
        </div>
      </div>
    </div>
    
    <!-- Фоновая анимация -->
    <div class="hero-background">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-shape shape-3"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Компонент не требует дополнительной логики
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--bg-warm) 100%);
  overflow: hidden;
  padding-top: 80px;
}

.hero-container {
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

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.hero-title-accent {
  background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-medium);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-light);
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1rem;
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
  background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(121, 101, 193, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(121, 101, 193, 0.4);
}

.btn-secondary {
  background: white;
  color: var(--primary-medium);
  border: 2px solid var(--primary-medium);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background: var(--primary-medium);
  color: white;
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 1.25rem;
}

/* Визуальная часть */
.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-cards {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid rgba(121, 101, 193, 0.1);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 15%;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.card-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.card-info {
  flex: 1;
}

.card-name {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.875rem;
}

.card-role {
  font-size: 0.75rem;
  color: var(--text-light);
}

.card-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 0.5rem;
}

.card-status.online {
  background: #10b981;
  animation: pulse 2s infinite;
}

.card-status.typing {
  background: #f59e0b;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.hero-graphics {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.graphic-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 100%);
  opacity: 0.1;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation: rotate 20s linear infinite;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation: rotate 15s linear infinite reverse;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 30%;
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

/* Фоновые элементы */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-shape {
  position: absolute;
  background: linear-gradient(135deg, var(--accent-warm) 0%, rgba(227, 208, 149, 0.3) 100%);
  border-radius: 50%;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: -75px;
  animation: float 12s ease-in-out infinite;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 60px;
  }

  .hero-container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-large {
    width: 100%;
    max-width: 300px;
  }

  .floating-card {
    transform: scale(0.8);
  }

  .hero-visual {
    height: 300px;
  }
}
</style> 