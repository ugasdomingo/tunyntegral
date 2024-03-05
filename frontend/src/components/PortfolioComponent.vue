<script setup lang="ts">
const lastsWorks: any = [];
</script>

<template>
    <section class="portfolio">
        <h2>Conoce nuestros últimos trabajos</h2>
        <div class="gallery">
            <div class="gallery-item" v-for="work in lastsWorks" :key="work.id">
                <img :src="work.image" :alt="work.title" />
                <div class="gallery-item-info">
                    <h3>{{ work.title }}</h3>
                    <p>{{ work.description }}</p>
                </div>
            </div>
        </div>
        <RouterLink to="/servicios">Ver todos los servicios</RouterLink>
    </section>
</template>

<style scoped lang="scss">
.portfolio {
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
                p {
                    background-color: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(4px);
                }
            }
        }
    }

    a {
        padding: 1rem 2rem;
        background-color: #f5a623;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            background-color: #f7b732;
        }
    }
}
</style>
