//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/services/axios';
import { useUserStore } from '@/stores/user-store';

//Import interfaces
import { IWork } from '@/interfaces/interfaces';

//Define store
export const useWorkStore = defineStore('work', () => {
    //Services
    const userStore = useUserStore();
    const allWorks = ref<IWork[]>([]);

    //Define functions
    const getWorks = async () => {
        try {
            const response = await api({
                method: 'GET',
                url: '/works'
            });
            allWorks.value = response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const createWork = async (work: any) => {
        try {
            const res = await api({
                url: '/works',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data'
                },
                data: work
            });

            return res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allWorks,
        getWorks,
        createWork
    };
});
