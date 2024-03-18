<script setup lang="ts"></script>

<template>
    <div class="page">
        <h1>404 Not Found</h1>
        <p>
            La página que buscas no existe. Por favor, verifica la URL e
            inténtalo de nuevo.
        </p>
        <RouterLink to="/">Volver al inicio</RouterLink>
    </div>
</template>

<style scoped lang="scss">
div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    h1 {
        color: var(--color-accent);
    }
    p {
        margin-bottom: 1rem;
    }
    a {
        width: 15%;
        color: var(--color-white);
        text-decoration: none;
        background-color: var(--color-accent);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }
}
</style>
