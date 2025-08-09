<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo-icon">🚀</div>
            <span class="logo-text">MentorHub</span>
          </div>
          <p class="footer-description">
            Платформа для развития навыков программирования через менторство. 
            Соединяем опытных разработчиков с начинающими специалистами.
          </p>
          <div class="social-links">
            <a href="#" class="social-link" title="Telegram">
              <span class="social-icon">📱</span>
            </a>
            <a href="#" class="social-link" title="GitHub">
              <span class="social-icon">🐙</span>
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              <span class="social-icon">💼</span>
            </a>
            <a href="#" class="social-link" title="YouTube">
              <span class="social-icon">📺</span>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Платформа</h3>
          <ul class="footer-links">
            <li><a href="#about" class="footer-link">О нас</a></li>
            <li><a href="#mentors" class="footer-link">Менторы</a></li>
            <li><a href="#community" class="footer-link">Сообщества</a></li>
            <li><a href="#courses" class="footer-link">Курсы</a></li>
            <li><a href="#blog" class="footer-link">Блог</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Поддержка</h3>
          <ul class="footer-links">
            <li><a href="#help" class="footer-link">Помощь</a></li>
            <li><a href="#faq" class="footer-link">FAQ</a></li>
            <li><a href="#contact" class="footer-link">Контакты</a></li>
            <li><a href="#feedback" class="footer-link">Обратная связь</a></li>
            <li><a href="#status" class="footer-link">Статус сервиса</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Правовая информация</h3>
          <ul class="footer-links">
            <li><a href="#privacy" class="footer-link">Политика конфиденциальности</a></li>
            <li><a href="#terms" class="footer-link">Условия использования</a></li>
            <li><a href="#cookies" class="footer-link">Политика cookies</a></li>
            <li><a href="#security" class="footer-link">Безопасность</a></li>
            <li><a href="#compliance" class="footer-link">Соответствие</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Контакты</h3>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-text">support@mentorhub.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">+7 (800) 555-0123</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span class="contact-text">Москва, Россия</span>
            </div>
          </div>
          <div class="newsletter">
            <h4 class="newsletter-title">Подписка на новости</h4>
            <div class="newsletter-form">
              <input 
                type="email" 
                placeholder="Ваш email" 
                class="newsletter-input"
              />
              <button class="newsletter-btn">
                <span class="btn-icon">📨</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © 2024 MentorHub. Все права защищены.
          </p>
          <div class="footer-bottom-links">
            <a href="#sitemap" class="footer-bottom-link">Карта сайта</a>
            <a href="#accessibility" class="footer-bottom-link">Доступность</a>
            <a href="#language" class="footer-bottom-link">Русский</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--primary-dark);
  color: white;
  padding: 4rem 0 0 0;
  position: relative;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-icon {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-warm);
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.25rem;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--accent-warm);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: var(--accent-warm);
  transform: translateX(4px);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  font-size: 1rem;
  color: var(--accent-warm);
}

.contact-text {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.newsletter {
  margin-top: auto;
}

.newsletter-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--accent-warm);
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--accent-warm);
  background: rgba(255, 255, 255, 0.15);
}

.newsletter-btn {
  width: 44px;
  height: 44px;
  background: var(--accent-warm);
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-btn:hover {
  background: #fbbf24;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.125rem;
}

/* Нижняя часть футера */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: var(--accent-warm);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 0 0;
  }

  .footer-container {
    padding: 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom-links {
    gap: 1rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-btn {
    width: 100%;
    height: 44px;
  }
}
</style> 