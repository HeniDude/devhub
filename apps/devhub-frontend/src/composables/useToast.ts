import {ref} from 'vue';
import type { Toast, ToastOptions } from "@/types/ui/toast.types.ts";

const toasts = ref<Toast[]>([]);
let idCounter = 0;

export function useToast(){
    const showToast = (content: string | object, {type='info', duration = 3000}: ToastOptions = {}) => {
        const id = idCounter++;
        toasts.value.push({id,content,type});

        if(duration > 0){
            setTimeout(() => removeToast(id),duration);
        }
    };

    const removeToast = (id: number) => {
        toasts.value = toasts.value.filter(toast => toast.id !== id);
    }

    return {toasts, showToast, removeToast};
}