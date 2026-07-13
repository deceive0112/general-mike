<template>
  <div id="home" class="flex flex-col min-h-screen text-gray-900 dark:text-white transition-colors duration-300"
    style="padding-inline: clamp(12px, 5.5vw, 210px);">
    <AppBackground />
    <web-header class="p-3 shadow-xl rounded-md mt-3" />
    <div>
      <slot />
    </div>
    <web-footer class="p-3 shadow-xl rounded-md mb-3" />
  </div>
</template>
