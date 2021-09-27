<template>
  <div
    class="
      container
      h-[100vh]
      w-[100vw]
      m-0
      p-0
      flex flex-col
      justify-center
      items-center
    "
  >
    <nav class="w-full h-12 fixed top-0 left-0">
      <Navbar />
    </nav>
    <main class="mt-12">
      <Main msg="Welcome to this page" />
    </main>
  </div>
</template>

<script setup>
import Main from "./components/Main.vue";
import Navbar from "./components/Navbar.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style></style>
