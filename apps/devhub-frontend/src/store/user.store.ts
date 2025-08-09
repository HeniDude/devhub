import { defineStore } from 'pinia';
import {ref,computed} from 'vue';

export const useUserStore = defineStore('user', ()=>{
    const user = ref(null)
    const role = computed(()=> user.value?.role || null)

    const setUser = (userData:Record<string,any>) => {
        user.value = userData.user
    }

    const getUser = () => {
        return user.value;
    }

    return {
        user,
        role,
        setUser,
        getUser,
    }
})