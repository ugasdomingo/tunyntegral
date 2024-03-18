<script setup lang="ts">
//Import tools
import { useWorkStore } from '@/stores/works-store';
import { onBeforeMount } from 'vue';

const workStore = useWorkStore();

//Get works
onBeforeMount(() => {
    workStore.getWorks();
});
</script>

<template>
    <section class="portfolio">
        <h2>Conoce nuestros últimos trabajos</h2>
        <div class="gallery">
            <div
                class="gallery-item"
                v-for="work in workStore.allWorks"
                :key="work._id"
            >
                <img
                    :src="
                        'https://res.cloudinary.com/minteados/image/upload/v1709589779/' +
                        work.coverImage.public_id
                    "
                    :alt="work.title"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.portfolio {
    padding: 4rem;
    text-align: center;
    position: relative;
    box-sizing: border-box;

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
            display: flex;
            justify-content: center;
            align-items: center;
            width: 250px;
            height: 250px;
            position: relative;
            background-color: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 0.5rem;

            img {
                width: 98%;
                height: 98%;
                object-fit: cover;
                border-radius: 0.5rem;
                border: 1px solid var(--color-secondary);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .portfolio {
        padding: 2rem;
        h2 {
            margin-bottom: 2rem;
        }
        .gallery {
            gap: 1rem;
            .gallery-item {
                width: 100%;
                height: 250px;
            }
        }
    }
}
</style>
