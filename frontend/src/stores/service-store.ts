//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/services/axios';
import { useUserStore } from '@/stores/user-store';

//Import interfaces
import { IService } from '@/interfaces/interfaces';

//Define store
export const useServiceStore = defineStore('service', () => {
    //Services
    const userStore = useUserStore();
    const allServices = ref<IService[]>([]);
    const rotulationServices = ref<IService[]>([]);
    const fachadaServices = ref<IService[]>([]);
    const ledServices = ref<IService[]>([]);
    const montajeServices = ref<IService[]>([]);

    //Define functions
    const getServices = async () => {
        try {
            const response = await api({
                method: 'GET',
                url: '/services'
            });
            allServices.value = response.data;
            rotulationServices.value = response.data.filter(
                (service: IService) => service.category === 'Rotulación'
            );
            fachadaServices.value = response.data.filter(
                (service: IService) => service.category === 'Fachada'
            );
            ledServices.value = response.data.filter(
                (service: IService) => service.category === 'LED'
            );
            montajeServices.value = response.data.filter(
                (service: IService) => service.category === 'Montaje'
            );
        } catch (error) {
            console.error(error);
        }
    };

    const createService = async (service: any) => {
        try {
            const res = await api({
                url: '/services',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data'
                },
                data: service
            });

            return res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    //Return functions
    return {
        allServices,
        rotulationServices,
        fachadaServices,
        ledServices,
        montajeServices,
        getServices,
        createService
    };
});
