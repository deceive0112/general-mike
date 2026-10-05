<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6 text-center">
    
    <!-- Your Custom Image Wrapper -->
    <div class="skyblue-glassmorphism">
      <NuxtImg src="fallback-thumbnail/404-error.png" class="w-100 h-50 xl:w-150 xl:h-100" />
    </div>

    <!-- Clear, Tight Text Stack -->
    <h1 class="text-3xl font-bold text-white mb-2 mt-6">Page not found</h1>
    <p class="text-gray-400 text-xl">The page you are looking for does not exist or has been moved.</p>

    <a href="/">
      <span class="inline-flex">
        <UIcon name="boxicons:button-filled" class="w-25 h-25 text-blue-300 hover:bg-sky-600" />
      </span>
    </a>

  </div>
</template>
