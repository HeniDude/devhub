<template>
  <div class="modal-overlay" v-if="isOpen" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h2 class="modal-title">{{ isLogin ? 'Вход' : 'Регистрация' }}</h2>
        <button class="close-btn" @click="closeModal">✕</button>
      </div>

      <div class="modal-content">
        <!-- Переключатель режимов -->
        <div class="auth-toggle">
          <button 
            class="toggle-btn" 
            :class="{ 'active': isLogin }"
            @click="isLogin = true"
          >
            Вход
          </button>
          <button 
            class="toggle-btn" 
            :class="{ 'active': !isLogin }"
            @click="isLogin = false"
          >
            Регистрация
          </button>
        </div>

        <!-- Форма входа -->
        <form v-if="isLogin" class="auth-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input 
              type="email" 
              v-model="loginForm.email"
              class="form-input" 
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Пароль</label>
            <div class="password-input">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="loginForm.password"
                class="form-input" 
                placeholder="Введите пароль"
                required
              />
              <button 
                type="button" 
                class="password-toggle"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '👁️' : '🙈' }}
              </button>
            </div>
          </div>

          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="loginForm.remember" />
              <span class="checkmark"></span>
              Запомнить меня
            </label>
            <a href="#" class="forgot-link">Забыли пароль?</a>
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="isLoading" class="loading-spinner"></span>
            {{ isLoading ? 'Вход...' : 'Войти' }}
          </button>
        </form>

        <!-- Форма регистрации -->
        <form v-else class="auth-form" @submit.prevent="handleRegister">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Имя</label>
              <input 
                type="text" 
                v-model="registerForm.firstName"
                class="form-input" 
                placeholder="Имя"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Фамилия</label>
              <input 
                type="text" 
                v-model="registerForm.lastName"
                class="form-input" 
                placeholder="Фамилия"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
            <input 
              type="email" 
              v-model="registerForm.email"
              class="form-input" 
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">Роль</label>
            <select v-model="registerForm.role" class="form-input" required>
              <option value="">Выберите роль</option>
              <option value="student">Ученик</option>
              <option value="mentor">Ментор</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Пароль</label>
            <div class="password-input">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="registerForm.password"
                class="form-input" 
                placeholder="Создайте пароль"
                required
              />
              <button 
                type="button" 
                class="password-toggle"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '👁️' : '🙈' }}
              </button>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Подтвердите пароль</label>
            <div class="password-input">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="registerForm.confirmPassword"
                class="form-input" 
                placeholder="Повторите пароль"
                required
              />
            </div>
          </div>

          <div class="form-options">
            <label class="checkbox-label">
              <input type="checkbox" v-model="registerForm.agree" required />
              <span class="checkmark"></span>
              Я согласен с <a href="#" class="terms-link">условиями использования</a>
            </label>
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="isLoading" class="loading-spinner"></span>
            {{ isLoading ? 'Регистрация...' : 'Зарегистрироваться' }}
          </button>
        </form>

        <!-- Социальные сети -->
        <div class="social-auth">
          <div class="divider">
            <span class="divider-text">или</span>
          </div>
          
          <div class="social-buttons">
            <button class="social-btn github-btn">
              <span class="social-icon">🐙</span>
              <span class="social-text">GitHub</span>
            </button>
            <button class="social-btn google-btn">
              <span class="social-icon">🔍</span>
              <span class="social-text">Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'login', data: any): void
  (e: 'register', data: any): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const router = useRouter()

const isLogin = ref(true)
const showPassword = ref(false)
const isLoading = ref(false)

const loginForm = reactive({
  email: '',
  password: '',
  remember: false
})

const registerForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const closeModal = () => {
  emit('close')
}

const handleLogin = async () => {
  isLoading.value = true
  try {
    // Имитация API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Сохраняем данные авторизации
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('user', JSON.stringify({
      name: 'Алексей Петров',
      email: loginForm.email,
      role: 'Frontend Developer'
    }))
    
    emit('login', loginForm)
    
    // Перенаправляем на дашборд
    router.push('/dashboard')
  } catch (error) {
    console.error('Ошибка входа:', error)
  } finally {
    isLoading.value = false
  }
}

const handleRegister = async () => {
  if (registerForm.password !== registerForm.confirmPassword) {
    alert('Пароли не совпадают')
    return
  }
  
  isLoading.value = true
  try {
    // Имитация API запроса
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Сохраняем данные авторизации
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('user', JSON.stringify({
      name: `${registerForm.firstName} ${registerForm.lastName}`,
      email: registerForm.email,
      role: registerForm.role === 'mentor' ? 'Ментор' : 'Ученик'
    }))
    
    emit('register', registerForm)
    
    // Перенаправляем на дашборд
    router.push('/dashboard')
  } catch (error) {
    console.error('Ошибка регистрации:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(10px);
}

.modal {
  background: white;
  border-radius: 1.5rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(121, 101, 193, 0.1);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.close-btn {
  width: 32px;
  height: 32px;
  background: var(--bg-light);
  border: 1px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.close-btn:hover {
  background: var(--primary-light);
  color: white;
}

.modal-content {
  padding: 1rem 2rem 2rem;
}

.auth-toggle {
  display: flex;
  background: var(--bg-light);
  border-radius: 0.75rem;
  padding: 0.25rem;
  margin-bottom: 2rem;
}

.toggle-btn {
  flex: 1;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  color: var(--text-light);
}

.toggle-btn.active {
  background: white;
  color: var(--primary-medium);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.auth-form {
  margin-bottom: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-medium);
  box-shadow: 0 0 0 3px rgba(121, 101, 193, 0.1);
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--text-light);
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(121, 101, 193, 0.2);
  border-radius: 0.25rem;
  position: relative;
  transition: all 0.3s ease;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark {
  background: var(--primary-medium);
  border-color: var(--primary-medium);
}

.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
}

.forgot-link,
.terms-link {
  color: var(--primary-medium);
  text-decoration: none;
  font-size: 0.875rem;
}

.forgot-link:hover,
.terms-link:hover {
  text-decoration: underline;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(121, 101, 193, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.social-auth {
  margin-top: 2rem;
}

.divider {
  position: relative;
  text-align: center;
  margin-bottom: 1.5rem;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(121, 101, 193, 0.1);
}

.divider-text {
  background: white;
  padding: 0 1rem;
  color: var(--text-light);
  font-size: 0.875rem;
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(121, 101, 193, 0.1);
  border-radius: 0.75rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.social-btn:hover {
  border-color: var(--primary-medium);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.github-btn:hover {
  background: #24292e;
  color: white;
}

.google-btn:hover {
  background: #4285f4;
  color: white;
}

.social-icon {
  font-size: 1.25rem;
}

/* Адаптивность */
@media (max-width: 768px) {
  .modal {
    width: 95%;
    margin: 1rem;
  }

  .modal-header,
  .modal-content {
    padding: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-options {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .social-buttons {
    grid-template-columns: 1fr;
  }
}
</style> 