<template>
  <div class = "p-2 mt-20 mb-10">
    <UButton label="Button"/>
  </div>
  <p class="text-2xl font-bold text-center mt-10 mb-50">
    I am {{ title }} , Mike
  </p>
  <div class="flex items-center justify-center">
       <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24"><!-- Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m8.005 20.005l.011-.01m-4.011.01l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m-.011-3.99l.011-.01m3.989.01l.011-.01"/><path fill="currentColor" d="M12.005 20.005h8v-16h-8z"/></g></svg>
  </div>
  <div class="grid grid-cols-3 gap-4">
  <div class="p-4">01</div>
  <div class="p-4">02</div>
  <div class="p-4">03</div>
  <div class="flex items-center justify-center col-span-2 p-4">04</div>
  <div class="p-4">05</div>
  <div class="p-4">06</div>
  <div class="flex items-center justify-center col-span-2 p-4">07</div>
  </div>
</template>


<script setup lang="ts">
const title = "General";

definePageMeta({
  layout: "default",
});
</script>
