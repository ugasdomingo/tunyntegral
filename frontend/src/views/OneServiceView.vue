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
    <main class="one-service">
        <h2>{{ oneService?.name }}</h2>
        <img
            :src="
                'https://res.cloudinary.com/minteados/image/upload/v1709589779/' +
                oneService?.coverImage.public_id
            "
            :alt="oneService?.name"
        />
        <p>{{ oneService?.description }}</p>
    </main>
</template>

<style scoped lang="scss">
.one-service {
    padding: 4rem;
    text-align: center;
    h2 {
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        max-width: 500px;
        margin: 2rem 0;
    }
}
</style>
