<template>
  <div class="rounded-full transition-shadow duration-500 ease-out delay-700">
    <div
      class="transform hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white rounded-full w-24 h-24 flex justify-center items-center ring-[1rem] shadow-inner drop-shadow-2xl"
      :class="[color, classes]"
    >
      <img :src="icon" alt="" :class="imgClass" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  icon: String,
  color: String,
  classes: String,
  imgClass: String,
});
</script>
