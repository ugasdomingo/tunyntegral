<script setup lang="ts">
//Import tools
import { useServiceStore } from '@/stores/service-store';
import { onBeforeMount, ref } from 'vue';

//Import components
import GalleryServicesComponent from './common/GalleryServicesComponent.vue';

//Handle Before Mount
const serviceStore = useServiceStore();
const activeService = ref('Rotulación');
const serviceButtons = [
    { name: 'Rotulación', value: 'Rotulación' },
    { name: 'Fachadas composite', value: 'Fachada' },
    { name: 'Expositores LED', value: 'LED' },
    { name: 'Montaje de rótulos', value: 'Montaje' }
];

onBeforeMount(() => {
    if (serviceStore.rotulationServices.length === 0) {
        serviceStore.getServices();
    }
});

//Data for Reactive
</script>

<template>
    <section class="services" id="services">
        <h2>¿Cómo quieres destacar tu negocio?</h2>
        <div class="services-list">
            <button
                v-for="button in serviceButtons"
                :key="button.name"
                :class="{ active: activeService === button.value }"
                @click="activeService = button.value"
            >
                {{ button.name }}
            </button>
        </div>
        <GalleryServicesComponent
            :services="serviceStore.rotulationServices"
            v-if="activeService == 'Rotulación'"
        />
        <GalleryServicesComponent
            :services="serviceStore.fachadaServices"
            v-if="activeService == 'Fachada'"
        />
        <GalleryServicesComponent
            :services="serviceStore.ledServices"
            v-if="activeService == 'LED'"
        />
        <GalleryServicesComponent
            :services="serviceStore.montajeServices"
            v-if="activeService == 'Montaje'"
        />
    </section>
</template>

<style scoped lang="scss">
.services {
    padding: 4rem;
    text-align: center;
    h2 {
        margin-bottom: 3rem;
    }
    .services-list {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 0;
        button {
            padding: 1rem 2rem;
            border: none;
            border-radius: 0.5rem;
            background-color: var(--color-white);
            color: var(--color-secondary);
            cursor: pointer;
            &.active {
                background-color: var(--color-secondary);
                color: var(--color-white);
            }
        }
    }
}

@media (max-width: 768px) {
    .services {
        padding: 2rem;
        h2 {
            margin-bottom: 2rem;
        }
        .services-list {
            flex-direction: column;
            gap: 1rem;
            button {
                padding: 1rem 1.5rem;
            }
        }
    }
}
</style>
