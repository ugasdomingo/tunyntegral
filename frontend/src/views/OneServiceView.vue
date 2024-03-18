<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useServiceStore } from '@/stores/service-store';
import { useRoute } from 'vue-router';
import { IService } from '@/interfaces/interfaces';

const serviceStore = useServiceStore();
const route = useRoute();
const oneService = ref<IService | null>(null);

onBeforeMount(() => {
    if (serviceStore.allServices.length === 0) {
        serviceStore.getServices();
    }

    serviceStore.allServices.filter((service) => {
        if (service._id === route.params.id) {
            oneService.value = service;
        }
    });
});
</script>

<template>
    <main class="page">
        <img
            class="background-image"
            :src="
                'https://res.cloudinary.com/minteados/image/upload/v1709589779/' +
                oneService?.coverImage.public_id
            "
            :alt="oneService?.name"
        />
        <section class="left-content">
            <h2>{{ oneService?.name }}</h2>
            <img
                class="cover-image"
                :src="
                    'https://res.cloudinary.com/minteados/image/upload/v1709589779/' +
                    oneService?.coverImage.public_id
                "
                :alt="oneService?.name"
            />
            <RouterLink
                class="quote-btn"
                :to="'/presupuesto/' + oneService?.name"
            >
                Solicitar Presupuesto
            </RouterLink>
        </section>
        <section class="right-content">
            <p v-html="oneService?.description"></p>
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    justify-content: space-between;
    position: relative;
    .background-image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.1;
        z-index: -1;
    }
    .left-content {
        width: 45%;
        h2 {
            margin-bottom: 3rem;
        }
        .cover-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            margin-bottom: 2rem;
            border-radius: 0.5rem;
        }
        .quote-btn {
            width: 15rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            background-color: var(--color-secondary);
            color: white;
            text-decoration: none;
            margin-bottom: 2rem;
        }
    }
    .right-content {
        width: 45%;
        p {
            padding-top: 5rem;
        }
    }
}

@media screen and (max-width: 768px) {
    main {
        flex-direction: column;
        text-align: center;
        .left-content,
        .right-content {
            width: 100%;

            p {
                text-align: left;
            }
        }
        .quote-btn {
            position: fixed;
            top: 80vh;
            left: 50%;
            transform: translateX(-50%);
        }
        .background-image {
            height: 50vh;
        }
    }
}
</style>
