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
                <img :src="value.image" :alt="value.name" />
                <h3>{{ value.name }}</h3>
                <p>{{ value.description }}</p>
            </article>
        </div>
        <button>Saber más de Tunyntegral</button>
    </section>
</template>
