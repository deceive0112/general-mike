<script setup lang="ts">
const title = "General, Mike";
const isHovered = ref(false)
  definePageMeta({
    layout: "default",
  });
</script>

<template>
<div class="flex flex-col min-h-screen px-10 md:px-20">
  <div class="flex flex-row gap-5">
    <div class="basis-3/5">
      <h1 class="text-4xl mt-20 font-bold backdrop-blur-lg rounded-xl">Hey! I'm 
        <a class="text-blue-500 cursor-pointer"  
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false">{{ title }}</a>
      </h1> 
      <p class="text-xl mt-5 backdrop-blur-lg rounded-xl">
        Flexbox is ideal for one-dimensional (linear) layouts, arranging items in a single row or column, while Grid is designed for two-dimensional (grid-based) layouts, 
        managing both rows and columns simultaneously. Use Flexbox for component-level alignment and Grid for overall page structure. 
      </p>

    <div class="flex flex-row mt-5 mb-25 gap-3 backdrop-blur-lg rounded-xl">
      <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
        <UIcon name="mdi:github" class="size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200"/>
        <span class="text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200">Github</span>
      </div>
        <span class="text-lg font-mono">|</span>
      <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
        <UIcon name="mdi:linkedin" class="size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200"/>
        <span class="text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200">LinkedIn</span>
      </div>
        <span class="text-lg font-mono">|</span>
        <span class="text-lg font-bold font-mono px-3 text-subtext1 hover:text-blue-500 transition-colors duration-200 cursor-pointer">More about me... -></span>
    </div>

    </div>
    <div class="flex basis-1/5 items-center justify-center mt-20">
      <div class="backdrop-blur-lg rounded-xl p-3 mb-25">
      <img src="/gradpicprof2.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
      </div>
    </div>
    <div class="flex basis-1/5 items-center justify-center mt-20">
      <Transition
        enter-active-class="transition-all duration-500 delay-300"
        enter-from-class="opacity-0 -translate-x-10"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-1600"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-10"
      >
      <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 mb-25">
        <img src="/gradpic-prof.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
      </div>
      </Transition>
    </div>
  </div>

  <div>
    
  </div>

  <div class="flex flex-row items-center mt-10">
    <UIcon name="material-symbols:star-outline" class="size-10"/>
    <h1 class="text-2xl font-bold p-2 gap-9">Featured Projects</h1>
    <span class="ml-auto">
      <a class="text-blue-400 cursor-pointer hover:underline">View all -></a>
    </span>
  </div>
  <div class="grid grid-cols-3 gap-4 backdrop-blur-3xl rounded-xl mb-25">
    <div class="flex items-center text-center justify-center col-span-2 p-4 mb-60">
      01
    </div>
    <div class="p-4 mb-60">02</div>
    <div class="p-4 mb-60">03</div>
    <div class="p-4 mb-60">05</div>
    <div class="p-4 mb-60">06</div>
    <div class="flex items-center text-center justify-center col-span-2 p-4 mb-60">07</div>
  </div>
</div>
</template>
