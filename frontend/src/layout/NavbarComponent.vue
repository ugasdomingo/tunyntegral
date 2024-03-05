<script setup lang="ts">
//Import tools
import { useUtilStore } from '@/stores/util-store';

//Data
const utilStore = useUtilStore();
const links = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Contact',
        url: '/contact'
    }
];

//Methods
const toggleMenu = () => utilStore.toggleMenu();
</script>

<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.name">
                <RouterLink :to="link.url" @click="toggleMenu">{{
                    link.name
                }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: right;
        align-items: center;
        width: 7rem;
        padding: 1rem;
        background-color: var(--color-primary);
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);

        li {
            list-style: none;
            padding: 0;
            cursor: pointer;
        }

        a {
            text-decoration: none;
            color: #fff;
        }
    }
}

@media (max-width: 768px) {
    nav {
        ul {
            flex-direction: row;
            width: 100%;
            box-shadow: none;
            gap: 2rem;
            justify-content: space-around;

            li {
                padding: 0;
            }
        }
    }
}
</style>
