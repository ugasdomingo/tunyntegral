<script setup lang="ts">
//Obtener categoria de la url
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import { useQuoteStore } from '@/stores/quote-store';

//Handle Before Mount
const quoteStore = useQuoteStore();
const route = useRoute();
const name = ref('');
const email = ref('');
const phone = ref('');
const service = ref('');
const message = ref('');

onBeforeMount(() => {
    service.value = route.params.id as string;
});

//Handle Submit
const handleSubmit = async () => {
    try {
        await quoteStore.createQuote(
            name.value,
            email.value,
            phone.value,
            service.value,
            message.value
        );
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <main class="quote">
        <h2>
            Presupuesto para: <br />
            <span>{{ service }}</span>
        </h2>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Nombre" v-model="name" required />
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="tel" placeholder="Teléfono" v-model="phone" required />
            <textarea
                placeholder="Mensaje"
                v-model="message"
                required
            ></textarea>
            <button type="submit">Solicitar Presupuesto</button>
        </form>
    </main>
</template>
