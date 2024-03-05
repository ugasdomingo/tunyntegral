<script setup lang="ts">
//Import tools
import { RouterView } from 'vue-router';

//Import components
import HeaderComponent from './layout/HeaderComponent.vue';
</script>

<template>
    <HeaderComponent />
    <RouterView />
</template>

<style scoped></style>
