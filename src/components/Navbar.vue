<template>
  <div class="bg-gray-800 flex items-center w-full justify-between">
    <a href="/">
      <img
        src="../assets/logo.png"
        alt="vuejs logo"
        class="h-12 p-2 cursor-pointer"
      />
    </a>
    <div class="text-white flex justify-around space-x-4 pr-12 cursor-pointer">
      <a
        v-for="(item, key) in menuRoutes"
        :class="{ 'text-blue-500 underline': item == currentRoute }"
        class="hover:transform hover:scale-110 transition hover:text-red-200"
        :href="key"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

const currentRoute = inject("routeName");
const menuRoutes = inject("menuRoutes");
</script>

<style lang="css" scoped></style>
