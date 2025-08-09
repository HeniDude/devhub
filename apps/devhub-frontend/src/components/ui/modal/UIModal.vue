<script setup lang="ts">
import { computed, ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import { type IModal } from "@/store/modal.store.ts";

const props = defineProps<{ modal: IModal }>();

const emit = defineEmits<{
  close: [void];
}>();

const popoverGlobal = ref<HTMLElement | null>(null);
const modalBox = ref<HTMLElement | null>(null);

const modalProps = computed(() => props.modal?.modalProps || {});
const listeners = computed(() => props.modal?.listeners || {});

const classList = computed(() => ({
  "--link-style": modalProps.value?.linkStyle,
}));



const dismiss = async (isSendEventClose = false) => {
  if (!modalProps.value?.isHaveCloseModal) {
    return;
  }

  if (popoverGlobal.value) {
    popoverGlobal.value.classList.remove("ui-modal--show");
  }
  
  if (modalBox.value) {
    modalBox.value.classList.add("ui-modal__box--closing");
  }

  if (isSendEventClose && listeners.value.close) {
    listeners.value.close();
  }

  setTimeout(() => {
    emit("close");
  }, 350);
};



onMounted(() => {
  document.body.style.overflow = "hidden";

  nextTick(() => {
    modalBox.value?.classList.add("ui-modal__box--opening");
    popoverGlobal.value?.classList.add("ui-modal--show");
  });
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <div ref="modalBox" class="ui-modal__box" @click="dismiss(true)">
    <div ref="popoverGlobal" class="ui-modal" :class="classList" @click.stop="">
      <div class="ui-modal__header">
        <div class="ui-modal__title-wrap">
          <div class="ui-modal__title-inner">
            <p class="ui-modal__title">
              {{ modalProps?.title }}
            </p>
          </div>
          <button
            v-if="modalProps?.isHaveCloseModal && modalProps?.isShowXBtn"
            class="ui-modal__btn-back"
            @click="dismiss(true)"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle
                cx="14"
                cy="14"
                r="14"
                transform="matrix(-1 0 0 1 28 0)"
                fill="#F4F4F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L13.7501 12.3359L17.7929 8.29305C18.1834 7.90253 18.8166 7.90253 19.2071 8.29305C19.5976 8.68358 19.5976 9.31674 19.2071 9.70727L15.2475 13.6668L19.2071 17.6264C19.5976 18.0169 19.5976 18.6501 19.2071 19.0406C18.8166 19.4311 18.1834 19.4311 17.7929 19.0406L13.7499 14.9976L9.70711 19.0404C9.31658 19.431 8.68342 19.431 8.29289 19.0404C7.90237 18.6499 7.90237 18.0168 8.29289 17.6262L12.2525 13.6667L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
                fill="#DA363C"
              />
            </svg>
          </button>
        </div>
        <slot name="header" />
      </div>
      <div class="ui-modal__wrap">
        <component
          :is="modal.component"
          v-bind="modal.componentProps"
          v-on="listeners"
          @close="dismiss"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Фон модального окна */
.ui-modal__box {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  z-index: 9999 !important;
  background: rgba(0, 0, 0, 0.5) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.3s ease;
  margin: 0 !important;
  padding: 1rem !important;
  cursor: pointer !important;
}

.ui-modal__box--opening {
  animation: boxShow 0.3s ease forwards;
  display: flex !important;
  visibility: visible !important;
}

.ui-modal__box--closing {
  animation: boxClose 0.3s ease forwards;
}

/* Само модальное окно */
.ui-modal {
  position: relative !important;
  width: 100% !important;
  max-width: 500px !important;
  max-height: 90vh !important;
  background: #fff !important;
  border-radius: 12px !important;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  overflow: hidden !important;
  margin: 0 !important;
  cursor: default !important;
}

.ui-modal--show {
  opacity: 1 !important;
  transform: scale(1) !important;
  visibility: visible !important;
  display: block !important;
}

/* Контент модального окна */
.ui-modal__wrap {
  position: relative;
  display: flex;
  padding: 0 20px 20px 20px;
  flex-direction: column;
  gap: 14px;
  overflow-y: auto;
  max-height: calc(90vh - 80px);
}

/* Заголовок */
.ui-modal__header {
  position: sticky;
  top: 0;
  z-index: 99;
  background: #fff;
}

.ui-modal__title-wrap {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  background: inherit;
  border-color: transparent;
}

.ui-modal__title-inner {
  position: relative;
  z-index: 3;
}

.ui-modal__title {
  margin: 0;
  color: #2b2b2b;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
}

/* Кнопка закрытия */
.ui-modal__btn-back {
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 100%;
  cursor: pointer;
}

.ui-modal__btn-back svg {
  width: 28px;
  height: 28px;
}

/* Анимации */
@keyframes boxShow {
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.5);
  }
}

@keyframes boxClose {
  from {
    background: rgba(0, 0, 0, 0.5);
  }
  to {
    background: rgba(0, 0, 0, 0);
  }
}
</style>
