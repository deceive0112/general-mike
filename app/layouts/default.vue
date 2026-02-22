<template> 
  <div id="home" class="flex flex-col min-h-screen px-25 md:px-40 text-gray-900 dark:text-white transition-colors duration-300">
    <AppBackground />
    <web-header class="p-3 shadow-xl rounded-md mt-3"/>
    <div class="p-3">
      <slot />
    </div>
    <web-footer class="bg-slate-800 p-3 shadow-xl rounded-md mb-3"/>
  </div>
</template>