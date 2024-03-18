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
    service.value = route.params.service as string;
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

        name.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';

        alert('Solicitud enviada');
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <main class="page">
        <img
            src="https://img.freepik.com/free-photo/colorful-abstract-smoke-black-background_1048-11679.jpg?t=st=1710151600~exp=1710155200~hmac=64c1511b0f365147d4021d3887b75a0045f3544daa9e89237f1e77d2df7baed2&w=740"
            alt="background budget"
        />
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
            <button type="submit">Solicitar</button>
        </form>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 50%;
    max-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        span {
            color: var(--color-white);
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        input,
        textarea {
            width: 100%;
            margin-bottom: 1rem;
            padding: 1rem;
            border: 1px solid var(--color-white);
            border-radius: 0.5rem;
            &:focus {
                outline: none;
                border-color: var(--color-accent);
            }
        }
        button {
            padding: 0.5rem 1rem;
            width: 15rem;
            font-size: 1.25rem;
            border: none;
            border-radius: 0.5rem;
            background-color: var(--color-accent);
            color: var(--white);
            cursor: pointer;
            &:hover {
                background-color: var(--color-secondary);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    main {
        width: 100%;
        img {
            height: 100%;
        }
    }
}
</style>
