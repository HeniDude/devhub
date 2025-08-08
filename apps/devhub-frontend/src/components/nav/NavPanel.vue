<template>
  <div>
    <!-- Триггер панели -->
    <div class="nav-panel-trigger" @mouseenter="showPanel = true">
      <div class="trigger-icon">⚡</div>
      <div class="trigger-label">MentorHub</div>
    </div>

    <div
      class="nav-panel"
      :class="{ 'nav-panel--visible': showPanel }"
      @mouseleave="showPanel = false"
    >
      <div class="nav-panel-header">
        <div class="panel-title">
          <span class="title-icon">🚀</span>
          <span class="title-text">MentorHub Navigation</span>
        </div>
        <button class="panel-close" @click="showPanel = false">✕</button>
      </div>

      <div class="nav-panel-content">
        <div class="nav-section">
          <h3 class="section-title">Основные разделы</h3>
          <div class="nav-grid">
            <div class="nav-item" @click="navigateTo('chats')">
              <div class="nav-icon">💬</div>
              <div class="nav-info">
                <div class="nav-name">Чаты</div>
                <div class="nav-desc">Индивидуальные и групповые</div>
              </div>
            </div>
            <div class="nav-item" @click="navigateTo('mentors')">
              <div class="nav-icon">👥</div>
              <div class="nav-info">
                <div class="nav-name">Менторы</div>
                <div class="nav-desc">Найти эксперта</div>
              </div>
            </div>
            <div class="nav-item" @click="navigateTo('courses')">
              <div class="nav-icon">📚</div>
              <div class="nav-info">
                <div class="nav-name">Курсы</div>
                <div class="nav-desc">Обучение</div>
              </div>
            </div>
            <div class="nav-item" @click="navigateTo('achievements')">
              <div class="nav-icon">🏆</div>
              <div class="nav-info">
                <div class="nav-name">Достижения</div>
                <div class="nav-desc">Прогресс</div>
              </div>
            </div>
          </div>
        </div>

        <div class="nav-section">
          <h3 class="section-title">Быстрые действия</h3>
          <div class="quick-actions">
            <button class="quick-btn" @click="quickAction('new-chat')">
              <span class="btn-icon">➕</span>
              <span class="btn-text">Новый чат</span>
            </button>
            <button class="quick-btn" @click="quickAction('search-mentor')">
              <span class="btn-icon">🔍</span>
              <span class="btn-text">Поиск ментора</span>
            </button>
            <button class="quick-btn" @click="quickAction('settings')">
              <span class="btn-icon">⚙️</span>
              <span class="btn-text">Настройки</span>
            </button>
            <button class="quick-btn" @click="quickAction('statistics')">
              <span class="btn-icon">📊</span>
              <span class="btn-text">Статистика</span>
            </button>
          </div>
        </div>

        <div class="nav-section">
          <h3 class="section-title">Недавние чаты</h3>
          <div class="recent-chats">
            <div class="recent-item" @click="openChat('alexey')">
              <div class="recent-avatar">👨‍🏫</div>
              <div class="recent-info">
                <div class="recent-name">Алексей - Vue.js</div>
                <div class="recent-preview">Последнее сообщение...</div>
              </div>
              <div class="recent-time">2 мин</div>
            </div>
            <div class="recent-item" @click="openChat('frontend-group')">
              <div class="recent-avatar">👥</div>
              <div class="recent-info">
                <div class="recent-name">Frontend разработка</div>
                <div class="recent-preview">Новое сообщение в группе</div>
              </div>
              <div class="recent-time">5 мин</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showPanel = ref(false);

const navigateTo = (route: string) => {
  console.log("Навигация к:", route);
  // Здесь будет логика навигации
  showPanel.value = false;
};

const quickAction = (action: string) => {
  console.log("Быстрое действие:", action);
  // Здесь будет логика быстрых действий
  showPanel.value = false;
};

const openChat = (chatId: string) => {
  console.log("Открыть чат:", chatId);
  // Здесь будет логика открытия чата
  showPanel.value = false;
};
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

/* Триггер панели */
.nav-panel-trigger {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    var(--primary-dark) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 25px var(--shadow-dark);
  transition: var(--transition);
  z-index: 1000;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.nav-panel-trigger:hover {
  transform: translateX(-50%) translateY(-3px);
  box-shadow: 0 12px 35px rgba(121, 101, 193, 0.4);
  border-color: var(--accent-warm);
}

.trigger-icon {
  font-size: 18px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.trigger-label {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
}

/* Навигационная панель */
.nav-panel {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  width: 90%;
  max-width: 800px;
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  border-radius: var(--border-radius);
  box-shadow: 0 20px 60px var(--shadow-dark);
  border: 2px solid var(--primary-medium);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 999;
  backdrop-filter: blur(20px);
  max-height: 70vh;
  overflow: hidden;
}

.nav-panel--visible {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.nav-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 2px solid var(--primary-medium);
  background: linear-gradient(
    135deg,
    var(--primary-dark) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 16px;
}

.title-icon {
  font-size: 20px;
}

.panel-close {
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: var(--white);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: var(--transition);
}

.panel-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.nav-panel-content {
  padding: 24px;
  max-height: calc(70vh - 80px);
  overflow-y: auto;
}

.nav-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--primary-dark);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--primary-light);
  position: relative;
}

.section-title::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-warm);
}

/* Сетка навигации */
.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, var(--white) 0%, var(--bg-light) 100%);
  border: 2px solid rgba(121, 101, 193, 0.1);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(121, 101, 193, 0.1),
    transparent
  );
  transition: left 0.5s;
}

.nav-item:hover::before {
  left: 100%;
}

.nav-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--shadow-dark);
  border-color: var(--primary-light);
}

.nav-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  border-radius: 8px;
  color: var(--white);
  flex-shrink: 0;
}

.nav-info {
  flex: 1;
}

.nav-name {
  font-weight: 600;
  color: var(--primary-dark);
  margin-bottom: 4px;
}

.nav-desc {
  font-size: 12px;
  color: var(--text-light);
}

/* Быстрые действия */
.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.quick-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.quick-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(121, 101, 193, 0.4);
}

.btn-icon {
  font-size: 16px;
}

.btn-text {
  font-size: 14px;
}

/* Недавние чаты */
.recent-chats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.recent-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--white);
  border: 1px solid rgba(121, 101, 193, 0.1);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition);
}

.recent-item:hover {
  background: var(--bg-light);
  border-color: var(--primary-light);
  transform: translateX(4px);
}

.recent-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.recent-info {
  flex: 1;
}

.recent-name {
  font-weight: 600;
  color: var(--primary-dark);
  font-size: 14px;
  margin-bottom: 2px;
}

.recent-preview {
  font-size: 12px;
  color: var(--text-light);
}

.recent-time {
  font-size: 11px;
  color: var(--primary-light);
  font-weight: 500;
}

/* Скроллбар */
.nav-panel-content::-webkit-scrollbar {
  width: 6px;
}

.nav-panel-content::-webkit-scrollbar-track {
  background: transparent;
}

.nav-panel-content::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    var(--primary-light) 0%,
    var(--primary-medium) 100%
  );
  border-radius: 3px;
}

.nav-panel-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    180deg,
    var(--primary-medium) 0%,
    var(--primary-dark) 100%
  );
}

/* Адаптивность */
@media (max-width: 768px) {
  .nav-panel {
    width: 95%;
    bottom: 70px;
  }

  .nav-grid {
    grid-template-columns: 1fr;
  }

  .quick-actions {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
