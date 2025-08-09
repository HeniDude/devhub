import { defineStore } from 'pinia';
import { computed, ref, shallowRef } from 'vue';
import type { Component } from 'vue';

interface IModalProps {
    isHaveCloseModal?: boolean;
    isShowXBtn?: boolean;
    title?: string;
    linkStyle?: boolean;
}

export interface IModalArg {
    modalProps?: IModalProps;
    component: Component;
    componentProps?: Record<string, any>;
    listeners?: Record<string, (...args: any[]) => any>;
}

export interface IModal extends IModalArg {
    id: number;
    isOpen: boolean;
}

export interface IActiveModal {
    id: number;
    isOpen: boolean;
    component: Component;
    modalProps?: IModalProps;
}

export const useModal = defineStore('modal', () => {
    const modalList = ref<IModal[]>([]);

    const activeModal = computed<IActiveModal | undefined>(
        () => modalList.value[modalList.value.length - 1],
    );

    const openModal = (data: IModalArg) => {
        const id = Math.floor((1 + Math.random()) * 100000);
        modalList.value.push({
            ...data,
            isOpen: true,
            id,
            component: shallowRef(data.component),
        });

        return id;
    };

    const closeModal = (id?: number) => {
        let modalId = id;

        if (!modalId) {
            modalId = activeModal.value?.id;
        }

        const findIndex = modalList.value.findIndex((item) => item.id === modalId);
        if (findIndex > -1) {
            modalList.value.splice(findIndex, 1);
        }
    };

    const isOpen = (id: number) => {
        const modal = modalList.value.find((modal) => modal.id === id);

        if (!modal) {
            return false;
        }

        return modal.isOpen;
    };

    return {
        modalList,
        activeModal,
        isOpen,
        openModal,
        closeModal,
    };
});