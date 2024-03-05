<script setup lang="ts">
import { values } from '@/static/aboutCompany';
</script>

<template>
    <section class="about">
        <h2>¿Qué puedes esperar de nosotros?</h2>
        <div class="about-content">
            <article
                class="about-item"
                v-for="value in values"
                :key="value.name"
            >
                <h3>{{ value.name }}</h3>
                <p>{{ value.description }}</p>
            </article>
        </div>
        <button>Saber más de Tunyntegral</button>
    </section>
</template>

<style scoped lang="scss">
.about {
    padding: 4rem 0;
    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .about-content {
        display: flex;
        justify-content: space-around;
        gap: 2rem;
        .about-item {
            width: 30%;
            h3 {
                margin-bottom: 1rem;
            }
            p {
                margin-bottom: 1rem;
            }
        }
    }
    button {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        background-color: var(--color-primary);
        color: var(--color-white);
        border: none;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            background-color: var(--color-warning);
        }
    }
}
</style>
