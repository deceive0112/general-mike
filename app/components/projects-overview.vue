<script setup lang="ts">
const scrollContainer = ref(null)
let isDown = false
let startX = 0
let scrollLeft = 0

const onMouseDown = (e) => {
  isDown = true
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
}

const onMouseLeave = () => { isDown = false }
const onMouseUp = () => { isDown = false }

const onMouseMove = (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 2
  scrollContainer.value.scrollLeft = scrollLeft - walk
}
</script>

<template>
  <div class="col-span-3 mt-15">
    <h2 class="flex text-4xl uppercase font-bold items-center text-center justify-center mb-1">Projects</h2>
    <div class="grid grid-cols-3 gap-4 p-3 rounded-xl backdrop-blur-sm shadow-2xl">

      <!-- Projects -->
      <div
        class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Portfolio</p>

        <!-- Project 1 -->
        <a href="https://github.com/deceive0112/general-mike" target="_blank"
          class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">

          <img src="https://opengraph.githubassets.com/1/deceive0112/general-mike" class="w-full object-cover" />

          <div class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span class="text-xs font-bold ml-1">deceive0112/general-mike</span>
          </div>
        </a>

        <div ref="scrollContainer"
          class="flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style="scrollbar-width: none;" @mousedown="onMouseDown" @mouseleave="onMouseLeave" @mouseup="onMouseUp"
          @mousemove="onMouseMove">

          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Vue</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">HTML</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">TypeScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">JavaScript</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Nuxt</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:tailwindcss" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Tailwind CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:shadcnui" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Shadcn UI</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:radixui" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Radix UI</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:vercel" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Vercel</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:threejs" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Three</span>
          </div>
          <div class="flex flex-col items-center gap-1 shrink-0">
            <UIcon name="devicon:formsubmit" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">Form Submit</span>
          </div>
        </div>
        <p class="gap-2 p-3 rounded-xl">Test test</p>
      </div>

      <!-- Project 2 -->
      <div
        class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Vanilla Web App Notepad</p>

        <a href="https://github.com/deceive0112/Vanilla-Web-App-Notepad" target="_blank"
          class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">

          <img src="https://opengraph.githubassets.com/2/deceive0112/Vanilla-Web-App-Notepad"
            class="w-full object-cover" />

          <div class="flex items-center gap-2 px-3 py-2 bg-white/5">
            <UIcon name="mdi:github" class="size-4 text-gray-400" />
            <span class="text-xs text-gray-400">github.com</span>
            <span class="text-xs font-bold ml-1">deceive0112/Vanilla-Web-App-Notedpad</span>
          </div>
        </a>

        <div class="flex flex-wrap gap-2 mt-2.5">
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">HTML</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">CSS</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-10 p-1" />
            <span class="text-[7px] text-gray-400">JavaScript</span>
          </div>
        </div>
        <p class="gap-2 p-3 rounded-xl">Test test</p>
      </div>

      <div
        class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
        <p class="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-widest">Backend & Database</p>
        <div class="flex flex-wrap gap-2">
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:firebase" class="rounded-xl shadow-xl size-13 p-1" />
            <span class="text-[10px] text-gray-400">Firebase</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <UIcon name="devicon:bun" class="rounded-xl shadow-xl size-13 p-1" />
            <span class="text-[10px] text-gray-400">Bun</span>
          </div>
        </div>
      </div>

      <div class="flex justify-end col-span-3">
        <UButton icon="material-symbols:grid-view-outline-rounded"
          class="rounded-lg shadow-md cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0">
          View More
        </UButton>
      </div>
    </div>
  </div>
</template>