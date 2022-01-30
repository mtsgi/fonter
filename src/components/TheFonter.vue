<script setup lang="ts">
import { ref, computed } from "vue";

const text = ref("");
const length = computed(() => {
  return text.value.length
})
</script>

<template>
  <textarea
    type="text"
    v-model="text"
    placeholder="Type something here"
  />
  <div>{{ length }}</div>
</template>

<style lang="scss" scoped>
textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 8px;
}
</style>
