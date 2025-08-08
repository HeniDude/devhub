<template>
  <div class="app">
    <!-- Сайдбар -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1 class="logo">MentorHub</h1>
        <button class="new-chat-btn">
          <span>+</span>
          Новый чат
        </button>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <h3>Индивидуальные чаты</h3>
          <ul class="chat-list">
            <li class="chat-item active">
              <span class="chat-icon">👤</span>
              <span class="chat-title">Ментор: Алексей</span>
            </li>
            <li class="chat-item">
              <span class="chat-icon">👤</span>
              <span class="chat-title">Ментор: Мария</span>
            </li>
          </ul>
        </div>

        <div class="nav-section">
          <h3>Групповые чаты</h3>
          <ul class="chat-list">
            <li class="chat-item">
              <span class="chat-icon">👥</span>
              <span class="chat-title">Frontend разработка</span>
            </li>
            <li class="chat-item">
              <span class="chat-icon">👥</span>
              <span class="chat-title">Backend разработка</span>
            </li>
            <li class="chat-item">
              <span class="chat-icon">👥</span>
              <span class="chat-title">DevOps практики</span>
            </li>
          </ul>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="user-profile">
          <div class="avatar">👨‍💻</div>
          <div class="user-info">
            <span class="username">Иван Петров</span>
            <span class="user-status">Начинающий разработчик</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Основной контент -->
    <main class="main-content">
      <!-- Заголовок чата -->
      <header class="chat-header">
        <div class="chat-info">
          <h2>Ментор: Алексей</h2>
          <span class="chat-status">Онлайн</span>
        </div>
        <div class="chat-actions">
          <button class="action-btn">📞</button>
          <button class="action-btn">📹</button>
          <button class="action-btn">⚙️</button>
        </div>
      </header>

      <!-- Область чата -->
      <div class="chat-container">
        <div class="messages">
          <div class="message mentor">
            <div class="message-avatar">👨‍🏫</div>
            <div class="message-content">
              <div class="message-header">
                <span class="sender-name">Алексей</span>
                <span class="message-time">14:30</span>
              </div>
              <div class="message-text">
                Привет! Я вижу, что ты изучаешь Vue.js. Какой у тебя вопрос?
              </div>
            </div>
          </div>

          <div class="message user">
            <div class="message-content">
              <div class="message-header">
                <span class="sender-name">Вы</span>
                <span class="message-time">14:32</span>
              </div>
              <div class="message-text">
                Здравствуйте! Я пытаюсь создать компонент, но не понимаю, как
                правильно передавать данные между родительским и дочерним
                компонентами.
              </div>
            </div>
            <div class="message-avatar">👨‍💻</div>
          </div>

          <div class="message mentor">
            <div class="message-avatar">👨‍🏫</div>
            <div class="message-content">
              <div class="message-header">
                <span class="sender-name">Алексей</span>
                <span class="message-time">14:35</span>
              </div>
              <div class="message-text">
                Отличный вопрос! В Vue.js есть несколько способов передачи
                данных. Давайте разберем props и emit...
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Поле ввода -->
      <div class="input-container">
        <div class="input-wrapper">
          <textarea
            class="message-input"
            placeholder="Напишите сообщение..."
            rows="1"
          ></textarea>
          <button class="send-btn">
            <span>📤</span>
          </button>
        </div>
        <div class="input-footer">
          <span class="input-hint"
            >Enter для отправки, Shift+Enter для новой строки</span
          >
          <div class="input-actions">
            <button class="input-action-btn" title="Прикрепить файл">📎</button>
            <button class="input-action-btn" title="Эмодзи">😊</button>
            <button class="input-action-btn" title="Форматирование">📝</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Здесь будет логика компонента
</script>

<style scoped>
:root {
  --primary-dark: #0e2148;
  --primary-medium: #483aa0;
  --primary-light: #7965c1;
  --accent-warm: #e3d095;
  --text-dark: #1a1a1a;
  --text-light: #666666;
  --white: #ffffff;
  --bg-light: #f8f9fa;
  --bg-warm: #f5f0d0;
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-medium: rgba(0, 0, 0, 0.15);
  --shadow-dark: rgba(14, 33, 72, 0.2);
  --border-radius: 12px;
  --border-radius-small: 8px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  height: 100vh;
  background: linear-gradient(
    135deg,
    var(--accent-warm) 0%,
    var(--bg-warm) 100%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow: hidden;
  position: relative;
}

.app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(121, 101, 193, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(227, 208, 149, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(72, 58, 160, 0.05) 0%,
      transparent 50%
    );
  pointer-events: none;
}

/* Сайдбар */
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, var(--primary-dark) 0%, #1a2a5a 100%);
  border-right: 2px solid var(--primary-medium);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 4px 0 20px var(--shadow-medium);
  position: relative;
}

.sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(227, 208, 149, 0.05) 100%
  );
  pointer-events: none;
}

.sidebar-header {
  padding: 24px 20px;
  border-bottom: 1px solid var(--primary-medium);
  position: relative;
  z-index: 1;
}

.logo {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-warm) 0%, #f5f0d0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px var(--shadow-light);
}

.new-chat-btn {
  width: 100%;
  padding: 14px 18px;
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-small);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: var(--transition);
  box-shadow: 0 4px 12px rgba(121, 101, 193, 0.3);
  position: relative;
  overflow: hidden;
}

.new-chat-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.new-chat-btn:hover::before {
  left: 100%;
}

.new-chat-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(121, 101, 193, 0.4);
}

.new-chat-btn span {
  font-size: 20px;
  font-weight: bold;
}

.sidebar-nav {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  position: relative;
  z-index: 1;
}

.nav-section {
  margin-bottom: 28px;
}

.nav-section h3 {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-warm);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  opacity: 0.9;
  position: relative;
  padding-left: 12px;
}

.nav-section h3::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 12px;
  background: linear-gradient(180deg, var(--accent-warm) 0%, #f5f0d0 100%);
  border-radius: 2px;
}

.chat-list {
  list-style: none;
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition);
  margin-bottom: 6px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.chat-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--primary-light),
    var(--primary-medium)
  );
  transition: width 0.3s ease;
}

.chat-item:hover::before {
  width: 4px;
}

.chat-item:hover {
  background: rgba(121, 101, 193, 0.25);
  transform: translateX(4px);
  border-color: rgba(121, 101, 193, 0.3);
  box-shadow: 0 4px 15px rgba(121, 101, 193, 0.2);
}

.chat-item.active {
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  box-shadow: 0 4px 12px rgba(121, 101, 193, 0.3);
}

.chat-item.active::before {
  width: 4px;
  background: var(--accent-warm);
}

.chat-icon {
  font-size: 18px;
  position: relative;
  z-index: 1;
}

.chat-title {
  font-size: 14px;
  font-weight: 500;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  z-index: 1;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid var(--primary-medium);
  position: relative;
  z-index: 1;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px;
  border-radius: var(--border-radius-small);
  background: rgba(121, 101, 193, 0.15);
  border: 1px solid rgba(121, 101, 193, 0.2);
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(121, 101, 193, 0.1);
}

.user-profile:hover {
  background: rgba(121, 101, 193, 0.25);
  border-color: rgba(121, 101, 193, 0.4);
  box-shadow: 0 6px 20px rgba(121, 101, 193, 0.2);
  transform: translateY(-1px);
}

.avatar {
  font-size: 28px;
  filter: drop-shadow(0 2px 4px var(--shadow-light));
}

.user-info {
  flex: 1;
}

.username {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent-warm);
  margin-bottom: 2px;
}

.user-status {
  display: block;
  font-size: 12px;
  color: var(--primary-light);
  opacity: 0.8;
}

/* Основной контент */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, var(--accent-warm) 0%, #f5f0d0 100%);
  position: relative;
}

.main-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'),
    radial-gradient(
      circle at 30% 70%,
      rgba(121, 101, 193, 0.08) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 70% 30%,
      rgba(227, 208, 149, 0.1) 0%,
      transparent 40%
    );
  pointer-events: none;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  border-bottom: 3px solid var(--primary-medium);
  box-shadow: 0 4px 25px var(--shadow-dark);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
}

.chat-info h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-dark);
  margin-bottom: 6px;
  position: relative;
}

.chat-info h2::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 30px;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-light),
    var(--primary-medium)
  );
  border-radius: 2px;
}

.chat-status {
  font-size: 13px;
  color: var(--primary-light);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.chat-status::before {
  content: "●";
  color: #4ade80;
  font-size: 10px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.chat-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  width: 42px;
  height: 42px;
  border: 2px solid var(--primary-medium);
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px var(--shadow-dark);
}

.action-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--primary-light),
    var(--primary-medium)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-btn:hover::before {
  opacity: 1;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(121, 101, 193, 0.3);
  border-color: var(--primary-light);
}

.action-btn span {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.action-btn:hover span {
  color: var(--white);
}

/* Область чата */
.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 28px;
  position: relative;
  z-index: 1;
}

.messages {
  max-width: 900px;
  margin: 0 auto;
}

.message {
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.user {
  flex-direction: row-reverse;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(121, 101, 193, 0.3);
  border: 2px solid var(--white);
  position: relative;
}

.message-avatar::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    135deg,
    var(--primary-light),
    var(--primary-medium)
  );
  border-radius: 50%;
  z-index: -1;
  opacity: 0.3;
}

.message-content {
  flex: 1;
  max-width: 75%;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.sender-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--primary-dark);
  position: relative;
}

.sender-name::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--primary-light),
    var(--primary-medium)
  );
  transition: width 0.3s ease;
}

.message:hover .sender-name::after {
  width: 100%;
}

.message-time {
  font-size: 12px;
  color: var(--primary-light);
  font-weight: 500;
  opacity: 0.8;
}

.message-text {
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  padding: 16px 20px;
  border-radius: var(--border-radius);
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-dark);
  box-shadow: 0 6px 25px var(--shadow-dark);
  border: 2px solid rgba(121, 101, 193, 0.15);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

.message-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-light),
    var(--primary-medium)
  );
  opacity: 0.3;
}

.message.user .message-text {
  background: linear-gradient(135deg, var(--primary-dark) 0%, #1a2a5a 100%);
  color: var(--white);
  box-shadow: 0 6px 25px rgba(14, 33, 72, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.message.user .message-text::before {
  background: linear-gradient(90deg, var(--accent-warm), #f5f0d0);
  opacity: 0.4;
}

/* Поле ввода */
.input-container {
  padding: 32px 28px;
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  border-top: 3px solid var(--primary-medium);
  box-shadow: 0 -8px 30px var(--shadow-dark);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(15px);
}

.input-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-light),
    transparent
  );
  opacity: 0.6;
}

.input-wrapper {
  display: flex;
  gap: 16px;
  align-items: flex-end;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 8px;
  border-radius: var(--border-radius);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(121, 101, 193, 0.1);
}

.message-input {
  flex: 1;
  padding: 18px 24px;
  border: 2px solid var(--primary-medium);
  border-radius: var(--border-radius);
  font-size: 16px;
  line-height: 1.6;
  resize: none;
  outline: none;
  transition: var(--transition);
  font-family: inherit;
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  box-shadow: 0 8px 25px var(--shadow-dark);
  position: relative;
  backdrop-filter: blur(5px);
  min-height: 60px;
  max-height: 120px;
}

.message-input:focus {
  border-color: var(--primary-light);
  box-shadow: 0 10px 30px rgba(121, 101, 193, 0.25);
  transform: translateY(-2px);
  background: linear-gradient(135deg, var(--white) 0%, #f0f2f5 100%);
}

.message-input:focus::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    135deg,
    var(--primary-light),
    var(--primary-medium)
  );
  border-radius: var(--border-radius);
  z-index: -1;
  opacity: 0.3;
}

.message-input::placeholder {
  color: var(--text-light);
  opacity: 0.8;
  font-style: italic;
}

.message-input:focus::placeholder {
  opacity: 0.5;
  transform: translateX(5px);
  transition: all 0.3s ease;
}

.send-btn {
  width: 56px;
  height: 56px;
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: var(--transition);
  flex-shrink: 0;
  box-shadow: 0 6px 20px rgba(121, 101, 193, 0.4);
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.send-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.6s ease;
}

.send-btn:hover::before {
  left: 100%;
}

.send-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(121, 101, 193, 0.5);
  border-color: var(--accent-warm);
}

.send-btn:active {
  transform: translateY(-1px) scale(0.98);
}

.send-btn span {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.send-btn:hover span {
  transform: scale(1.1);
}

.input-footer {
  text-align: center;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 8px;
}

.input-hint {
  font-size: 13px;
  color: var(--primary-light);
  font-weight: 500;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(121, 101, 193, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(121, 101, 193, 0.2);
  backdrop-filter: blur(5px);
}

.input-hint::before {
  content: "💡";
  font-size: 14px;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(1.3) drop-shadow(0 0 5px rgba(227, 208, 149, 0.5));
  }
}

.input-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.input-action-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--primary-medium);
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: var(--transition);
  color: var(--primary-medium);
}

.input-action-btn:hover {
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(121, 101, 193, 0.3);
}

.chat-container::-webkit-scrollbar {
  width: 8px;
}

.chat-container::-webkit-scrollbar-track {
  background: transparent;
}

.chat-container::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  border-radius: 4px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.chat-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    180deg,
    var(--primary-medium) 0%,
    var(--primary-dark) 100%
  );
  background-clip: content-box;
}
</style>
