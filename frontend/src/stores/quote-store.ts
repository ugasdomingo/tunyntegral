//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/services/axios';

//Define store
export const useQuoteStore = defineStore('quote', () => {
    //Quote
    const allQuotes = ref('');

    //Define functions
    const getQuotes = async () => {
        try {
            const response = await api({
                method: 'GET',
                url: '/quotes'
            });
            allQuotes.value = response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const createQuote = async (
        name: string,
        email: string,
        phone: string,
        service: string,
        message: string
    ) => {
        try {
            await api({
                method: 'POST',
                url: '/quotes',
                data: {
                    name,
                    email,
                    phone,
                    service,
                    message
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    //Return functions
    return {
        allQuotes,
        getQuotes,
        createQuote
    };
});
