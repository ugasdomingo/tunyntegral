//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

//Define store
export const useUtilStore = defineStore('utl', () => {
    //Utils
    const showMenu = ref(false);

    //Define functions
    const toggleMenu = () => {
        showMenu.value = !showMenu.value;
        console.log('Worth it');
    };

    //Return functions
    return {
        showMenu,
        toggleMenu
    };
});
