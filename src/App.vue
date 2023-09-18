<script setup lang="ts">
import NavBar from './components/NavBar.vue'

import { RouterView } from "vue-router"
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initDropdowns();
})
</script>

<template>
    <NavBar msg="Vite + Vue" />
    <RouterView />
</template>

