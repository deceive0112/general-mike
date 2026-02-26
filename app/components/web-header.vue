<script setup>
const showGif = useState('showGif', () => true)
const menuOpen = ref(false)
</script>

<template>
  <div class="flex flex-row justify-between sticky top-0 left-0 w-full z-50 bg-transparent items-center text-center backdrop-blur-sm p-2">
    
    <a href="/">
      <span class="inline-flex">
        <UIcon name="mdi:tilde" class="w-6 h-6 text-blue-300 hover:bg-sky-600 mt-0.5" />
      </span>
    </a>

    <!-- Desktop nav — hidden on mobile -->
    <nav class="hidden md:flex items-center gap-6 lg:gap-9">
      <a href="/about" class="text-sm lg:text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">About</a>
      <a href="/projects" class="text-sm lg:text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">Projects</a>
      <a href="/tech-stack" class="text-sm lg:text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">Tech Stack</a>
      <a href="/blog" class="text-sm lg:text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">Blog</a>
      <span class="flex flex-row gap-2">
        <UColorModeButton class="hover:text-blue-500 duration-200 cursor-pointer" />
        <UButton
          class="hover:text-blue-500 duration-200 cursor-pointer"
          :icon="!showGif ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" color="gray" variant="ghost"
          @click="showGif = !showGif" />
      </span>
    </nav>

    <div class="flex md:hidden items-center gap-2">
      <UColorModeButton class="hover:text-blue-500 duration-200 cursor-pointer" />
      <UButton
        class="hover:text-blue-500 duration-200 cursor-pointer"
        :icon="!showGif ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" color="gray" variant="ghost"
        @click="showGif = !showGif" />
      <UButton
        :icon="menuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
        color="gray" variant="ghost"
        class="cursor-pointer"
        @click="menuOpen = !menuOpen" />
    </div>

    <!-- Mobile dropdown menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3">
      <div v-show="menuOpen"
        class="md:hidden absolute top-14 left-0 w-full z-50 bg-slate-600/90 rounded-2xl backdrop-blur-3xl flex flex-col items-start gap-4 px-6 py-4 shadow-xl">
        <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer" @click="menuOpen = false">About</span>
        <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer" @click="menuOpen = false">Projects</span>
        <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer" @click="menuOpen = false">Tech Stack</span>
        <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer" @click="menuOpen = false">Blog</span>
      </div>
    </Transition>

  </div>
</template>
