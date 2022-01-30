<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFonter from "./components/TheFonter.vue";
</script>

<template>
  <TheHeader />
  <TheFonter msg="Fonter" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
