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
        <img
            src="https://img.freepik.com/free-psd/abstract-background-design_1297-124.jpg?t=st=1710177641~exp=1710181241~hmac=9346b60a5a61f780a76bf9fe3a9f8ef8e69c53203475a7d1a6ac8a8506266bc3&w=740"
            alt="Backgroud services"
        />
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
    position: relative;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.3;
    }
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
            transition: transform 0.3s;
            &:hover {
                transform: scale(1.1);
            }
            &.active {
                background-color: var(--color-secondary);
                color: var(--color-white);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .services {
        padding: 2rem;
        h2 {
            margin-bottom: 2rem;
        }
        .services-list {
            flex-wrap: wrap;
            gap: 1rem;
            position: sticky;
            top: 1rem;
            left: 0;
            border-radius: 0.5rem;
            padding: 1rem 0;
            background-color: rgb(6, 13, 31, 0.9);
            z-index: 1;

            button {
                padding: 0.5rem 1rem;
                font-size: 0.8rem;
            }
        }
    }
}
</style>
