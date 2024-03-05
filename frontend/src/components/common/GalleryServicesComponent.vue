<script setup lang="ts">
import { IService } from '@/interfaces/interfaces';
import { defineProps, PropType } from 'vue';

defineProps({
    services: {
        type: Array as PropType<IService[]>,
        required: true
    }
});
</script>
<template>
    <section class="gallery-services">
        <div class="gallery">
            <div
                class="gallery-item"
                v-for="service in services"
                :key="service._id"
            >
                <img
                    :src="
                        'https://res.cloudinary.com/minteados/image/upload/v1709589779/' +
                        service.coverImage.public_id
                    "
                    :alt="service.name"
                />
                <div class="gallery-item-info">
                    <h3>{{ service.name }}</h3>
                </div>
                <div>
                    <RouterLink :to="'/servicios/' + service._id">
                        Ver más
                    </RouterLink>
                    <RouterLink :to="'/presupuesto/' + service.name">
                        Presupuesto
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.gallery-services {
    padding: 4rem;
    text-align: center;
    h2 {
        margin-bottom: 3rem;
    }
    .gallery {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
        margin: 2rem 0;
        .gallery-item {
            width: 300px;
            height: 250px;
            position: relative;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
            .gallery-item-info {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                color: white;
                h2 {
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
</style>
