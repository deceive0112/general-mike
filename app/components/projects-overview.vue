<script setup lang="ts">
const scrollContainer = ref<HTMLDivElement | null>(null)
let isDown = false
let startX = 0
let scrollLeft = 0

const onMouseDown = (e: MouseEvent) => {
  isDown = true
  if (!scrollContainer.value) return
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
}

const onMouseLeave = () => { isDown = false }
const onMouseUp = () => { isDown = false }

const onMouseMove = (e: MouseEvent) => {
  if (!isDown) return
  e.preventDefault()
  if (!scrollContainer.value) return
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 2
  scrollContainer.value.scrollLeft = scrollLeft - walk
}
</script>

<template>
  <!-- CHANGED: col-span-3 removed, use full width instead -->
  <div class="w-full mt-10 md:mt-15">
    <!-- CHANGED: responsive title text -->
    <h2 class="flex text-2xl md:text-3xl lg:text-4xl uppercase font-bold items-center text-center justify-center mb-1">Projects</h2>

    <!-- CHANGED: grid-cols-1 on mobile, 2 on tablet, 3 on desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-xl backdrop-blur-sm shadow-2xl">

      <!-- Project 1 -->
      <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm md:text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Portfolio</p>

        <div class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
          <a href="https://general-mike.vercel.app/" target="_blank">
            <img src="https://opengraph.githubassets.com/2/deceive0112/general-mike" class="w-full object-cover" />
          </a>
          <a href="https://github.com/deceive0112/general-mike" target="_blank"
            class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span class="text-xs font-bold ml-1 truncate">deceive0112/general-mike</span>
          </a>
        </div>

        <!-- CHANGED: drag scroll icons -->
        <div ref="scrollContainer"
          class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style="scrollbar-width: none;"
          @mousedown="onMouseDown" @mouseleave="onMouseLeave" @mouseup="onMouseUp" @mousemove="onMouseMove">
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
            <UIcon name="vscode-icons:file-type-light-shadcn" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
            <span class="text-gray-400">Shadcn UI</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="simple-icons:radixui" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:text-white text-black" />
            <span class="text-gray-400">Radix UI</span>
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
            <UIcon name="devicon:formsubmit" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">Form Submit</span>
          </div>
        </div>
        <p class="gap-2 p-2 rounded-xl text-xs md:text-sm text-justify">Test test</p>
      </div>

      <!-- Project 2 -->
      <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm md:text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Vanilla Web App Notepad</p>

        <div class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
          <a href="https://deceive0112.github.io/Vanilla-Web-App-Notepad/" target="_blank">
            <img src="https://opengraph.githubassets.com/2/deceive0112/Vanilla-Web-App-Notepad" class="w-full object-cover" />
          </a>
          <a href="https://github.com/deceive0112/Vanilla-Web-App-Notepad" target="_blank"
            class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <!-- CHANGED: truncate long repo name on small screens -->
            <span class="text-xs font-bold ml-1 truncate">deceive0112/Vanilla-Web-App-Notepad</span>
          </a>
        </div>

        <div class="flex flex-wrap gap-2 mt-2.5 text-[7px]">
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">HTML</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">JavaScript</span>
          </div>
        </div>
        <p class="gap-2 p-2 rounded-xl text-xs md:text-sm text-justify">Vanilla JS notepad web app with dynamic tasks and localStorage persistence, built using pure HTML, CSS, and JavaScript — no frameworks or libraries.</p>
      </div>

      <!-- Project 3 -->
      <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm md:text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Work In Progress</p>

        <div class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
          <a href="https://deceive0112.github.io/" target="_blank">
            <img src="https://opengraph.githubassets.com/2/deceive0112/" class="w-full object-cover" />
          </a>
          <a href="https://github.com/deceive0112/" target="_blank"
            class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span class="text-xs font-bold ml-1 truncate">deceive0112/Work In Progress</span>
          </a>
        </div>

        <div class="flex flex-wrap gap-2 mt-2.5 text-[7px]">
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">HTML</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
            <span class="text-gray-400">JavaScript</span>
          </div>
        </div>
        <p class="gap-2 p-2 rounded-xl text-xs md:text-sm text-justify">Test test</p>
      </div>

      <!-- CHANGED: col-span-1 md:col-span-2 lg:col-span-3 for button row -->
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
