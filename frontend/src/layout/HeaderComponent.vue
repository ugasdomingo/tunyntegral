<script setup lang="ts">
//Import tools
import { useUtilStore } from '@/stores/util-store';

//Import components
import NavbarComponent from './NavbarComponent.vue';

//Data
const utilStore = useUtilStore();
const toggleMenu = () => utilStore.toggleMenu();
</script>

<template>
    <header>
        <RouterLink to="/" class="logo">
            <img src="/img/logo.jpg" alt="Logo " />
        </RouterLink>
        <img class="menu" @click="toggleMenu" src="/svg/menu.svg" alt="Menu" />
        <NavbarComponent class="navbar" v-if="utilStore.showMenu" />
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    color: var(--color-white);
    top: 2rem;
    position: absolute;
    background-color: transparent;
    box-sizing: border-box;
    z-index: 10;

    .logo {
        width: 5rem;
        height: 5rem;
        text-decoration: none;
        color: var(--color-white);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .menu {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
    }

    .navbar {
        position: absolute;
        top: 4rem;
        right: 4rem;
        transition: transform 0.3s ease-in-out;
    }
}

@media (max-width: 768px) {
    header {
        padding: 0 2rem;
    }
}
</style>
