<script setup lang="ts">
const drag1 = useDragScroll()
const drag2 = useDragScroll()
const drag3 = useDragScroll()

const imgSrc1 = ref('https://opengraph.githubassets.com/2/deceive0112/general-mike')
const imgSrc2 = ref('https://opengraph.githubassets.com/2/deceive0112/Vanilla-Web-App-Notepad')
const imgSrc3 = ref('https://opengraph.githubassets.com/2/deceive0112/TindaTrack')
</script>

<template>
  <!-- CHANGED: col-span-3 removed, use full width instead -->
  <div class="w-full mt-10 md:mt-15">
    <!-- CHANGED: responsive title text -->
    <h2 class="flex text-2xl md:text-3xl lg:text-4xl uppercase font-bold items-center text-center justify-center mb-1">
      Projects</h2>

    <!-- CHANGED: grid-cols-1 on mobile, 2 on tablet, 3 on desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-xl backdrop-blur-sm shadow-2xl">

      <!-- Project 1 -->
      <div
        class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm md:text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Portfolio</p>

        <div
          class="group flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">

          <a href="https://general-mike.vercel.app/" target="_blank" class="relative block w-full"
            style="padding-top: 50%">
            <NuxtImg :src="imgSrc1"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              @error="imgSrc1 = '/fallback-thumbnail/project1-fallback.png'" />
            <img
              src="https://api.microlink.io/?url=https://general-mike.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy" style="object-position: top" />
          </a>

          <a href="https://github.com/deceive0112/general-mike" target="_blank"
            class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span
              class="text-xs font-bold ml-1 truncate relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">deceive0112/general-mike</span>
          </a>

        </div>

        <div :ref="drag1.scrollContainer" @mousedown="drag1.onMouseDown" @mouseleave="drag1.onMouseLeave"
          @mouseup="drag1.onMouseUp" @mousemove="drag1.onMouseMove"
          class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style="scrollbar-width: none;">
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Vue</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">HTML</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">TypeScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">JavaScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Nuxt</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:tailwindcss" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Tailwind CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:vercel" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
            <span class="text-gray-400">Vercel</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:threejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
            <span class="text-gray-400">Three</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:bun" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Bun</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="simple-icons:umami" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Umami</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Form Submit</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Giscus</span>
          </div>
        </div>
        <p class="gap-2 p-2 rounded-xl text-xs md:text-sm text-justify">A personal portfolio built with Nuxt, Vue, and
          Tailwind CSS.
          Featuring a Three.js particle background, dark/light theme, drag-scroll project cards, a blog with
          Giscus-powered comments,
          and mini-games. Deployed on Vercel with a serverless architecture..</p>
      </div>

      <!-- Project 2 -->
      <div
        class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm md:text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest truncate">Vanilla Web
          App Notepad
        </p>

        <div
          class="group flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
          <a href="https://deceive0112.github.io/Vanilla-Web-App-Notepad/" target="_blank" class="relative block w-full"
            style="padding-top: 50%">
            <NuxtImg :src="imgSrc2"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              @error="imgSrc2 = '/fallback-thumbnail/project2-fallback.png'" />
            <img
              src="https://api.microlink.io/?url=https://deceive0112.github.io/Vanilla-Web-App-Notepad&screenshot=true&meta=false&embed=screenshot.url"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy" style="object-position: top" />
          </a>
          <a href="https://github.com/deceive0112/Vanilla-Web-App-Notepad" target="_blank"
            class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span
              class="text-xs font-bold ml-1 truncate relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">deceive0112/Vanilla-Web-App-Notepad</span>
          </a>
        </div>

        <div :ref="drag2.scrollContainer" @mousedown="drag2.onMouseDown" @mouseleave="drag2.onMouseLeave"
          @mouseup="drag2.onMouseUp" @mousemove="drag2.onMouseMove"
          class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style="scrollbar-width: none;">
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">JavaScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">HTML</span>
          </div>
        </div>
        <p class="gap-2 p-2 rounded-xl text-xs md:text-sm text-justify">Vanilla JS notepad web app with dynamic tasks
          and localStorage persistence, built using pure HTML, CSS, and JavaScript no frameworks or libraries.</p>
      </div>

      <!-- Project 3 -->
      <div
        class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm md:text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">TindaTrack</p>

        <div
          class="group flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
          <a href="/projects/TindaTrack/TindaTrack_Mock-up.pdf" target="_blank" class="relative block w-full"
            style="padding-top: 50%">
            <NuxtImg :src="imgSrc3"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              @error="imgSrc3 = '/fallback-thumbnail/project3-fallback.png'" />
            <img src="/fallback-thumbnail/tindatrack-thumbnail.png" loading="lazy"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a href="https://github.com/deceive0112/TindaTrack" target="_blank"
            class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span
              class="text-xs font-bold ml-1 truncate relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">deceive0112/TindaTrack</span>
          </a>
        </div>

        <div :ref="drag3.scrollContainer" @mousedown="drag3.onMouseDown" @mouseleave="drag3.onMouseLeave"
          @mouseup="drag3.onMouseUp" @mousemove="drag3.onMouseMove"
          class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style="scrollbar-width: none;">
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">TypeScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">JavaScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="logos:expo-icon" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Expo</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="hugeicons:tailwindcss" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">NativeWind</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:reactnative" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">React Native</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:supabase" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Supabase</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:bun" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Bun</span>
          </div>
        </div>
        <p class="gap-2 p-2 rounded-xl text-xs md:text-sm text-justify">A mock-up test app for a small store inventory
          and sales tracking system,
          built with Expo (React Native), NativeWind, Supabase, and Victory Native. Exploring a lightweight mobile-first
          approach for sari-sari store
          owners to track products, sales, and bills in one place.</p>
      </div>

      <div class="flex justify-end col-span-1 md:col-span-2 lg:col-span-3">
        <a href="/projects">
          <UButton icon="material-symbols:grid-view-outline-rounded"
            class="rounded-lg shadow-md cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0">
            View More
          </UButton>
        </a>
      </div>

    </div>
  </div>
</template>
