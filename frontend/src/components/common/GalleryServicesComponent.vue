<script setup lang="ts">
import { IService } from '@/interfaces/interfaces';
import { defineProps, PropType } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const soomething = (id: string) => {
    router.push('/servicios/' + id);
};

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
                    @click="soomething(service._id)"
                />
                <div class="gallery-item-info horizontal-gradient">
                    <h3>{{ service.name }}</h3>
                </div>
                <div class="action-buttons">
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
            height: 350px;
            position: relative;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 300px;
                height: 300px;
                object-fit: cover;
                border-radius: 10px;
                cursor: pointer;
            }
            .gallery-item-info {
                width: 100%;
                height: 2.5rem;
                display: flex;
                justify-content: left;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                background-color: transparent;
                color: var(--color-white);
                border-radius: 0.5rem 0 0.5rem 0;

                h3 {
                    font-size: 1.5rem;
                    padding: 0.5rem;
                    margin: 0;
                }
            }
            .action-buttons {
                width: 100%;
                display: flex;
                justify-content: space-around;
                gap: 0.5rem;
                padding: 0;
                position: absolute;
                bottom: 0;

                a {
                    width: 40%;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: var(--color-secondary);
                    color: var(--color-white);
                    cursor: pointer;
                    text-decoration: none;
                    transition: transform 0.3s;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .gallery-services {
        padding: 0;
        h2 {
            margin-bottom: 2rem;
        }
        .gallery {
            flex-direction: column;
            gap: 1.5rem;
            .gallery-item {
                width: 100%;
                img {
                    width: 100%;
                    height: 300px;
                }
                .gallery-item-info {
                    width: 100%;
                    h3 {
                        font-size: 1.5rem;
                    }
                }
                .action-buttons {
                    width: 100%;
                    a {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
