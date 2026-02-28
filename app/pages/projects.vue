<script setup lang="ts">
const drag1 = useDragScroll()
const drag2 = useDragScroll()
const drag3 = useDragScroll()
const drag4 = useDragScroll()
</script>

<template>
  <!-- Software Section -->
  <div class="pt-5 pb-5 md:mx-20 rounded-3xl">
    <p class="text-xl md:text-3xl mt-15 mb-3">Software:</p>
    <div class="gap-4 rounded-xl">

      <!--Project-1-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 backdrop-blur-xl rounded-3xl mb-10">
        <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
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
              <UIcon name="" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Form Submit</span>
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2">
          <p class="text-md md:text-xl text-gray-400 font-semibold uppercase tracking-widest text-left mt-2">Portfolio</p>
          <p class="gap-2 p-2 rounded-xl text-sm md:text-lg text-justify">Test test</p>
        </div>
      </div>

      <!--Project-2-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 backdrop-blur-xl rounded-3xl mb-10">
        <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
          <div class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
            <a href="https://deceive0112.github.io/Vanilla-Web-App-Notepad/" target="_blank">
              <img src="https://opengraph.githubassets.com/2/deceive0112/Vanilla-Web-App-Notepad" class="w-full object-cover" />
            </a>
            <a href="https://github.com/deceive0112/Vanilla-Web-App-Notepad" target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-white/5">
              <UIcon name="mdi:github" class="size-4 text-gray-400" />
              <span class="text-xs text-gray-400">github.com</span>
              <span class="text-xs font-bold ml-1 truncate">deceive0112/Vanilla-Web-App-Notepad</span>
            </a>
          </div>
          <div :ref="drag2.scrollContainer" @mousedown="drag2.onMouseDown" @mouseleave="drag2.onMouseLeave"
            @mouseup="drag2.onMouseUp" @mousemove="drag2.onMouseMove"
            class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            style="scrollbar-width: none;">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">CSS</span>
            </div>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">HTML</span>
            </div>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">JavaScript</span>
            </div>
          </div>
        </div>
        <div class="text-left col-span-1 md:col-span-2">
          <p class="text-md md:text-xl text-gray-400 font-semibold uppercase tracking-widest mt-2">Vanilla Web App Notepad</p>
          <p class="p-2 rounded-xl text-sm md:text-lg text-justify mb-2">
            A dynamic notepad web application built entirely with vanilla HTML, CSS, and JavaScript. Users can:
          </p>
          <ul class="list-disc ml-5 text-sm md:text-lg space-y-1">
            <li>Add and delete titles and subtasks, with delete confirmation</li>
            <li>Mark subtasks as completed with strikethrough</li>
            <li>Persist all data using localStorage, so tasks remain after page reload</li>
            <li>Interact with a fully dynamic UI without any frameworks or libraries</li>
          </ul>
          <p class="p-2 rounded-xl text-sm md:text-lg text-justify mt-2">
            This project demonstrates state-driven UI manipulation, event handling, and browser storage with
            pure JavaScript. It's perfect for beginners and anyone looking to understand the fundamentals of
            building interactive web apps without external libraries.
          </p>
        </div>
      </div>

      <!--Project-3-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 backdrop-blur-xl rounded-3xl mb-10">
        <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
          <div class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
            <a href="https://deceive0112.github.io/" target="_blank">
              <img src="https://opengraph.githubassets.com/2/deceive0112/" class="w-full object-cover" />
            </a>
            <a href="https://github.com/deceive0112/" target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-white/5">
              <UIcon name="mdi:github" class="size-4 text-gray-400" />
              <span class="text-xs text-gray-400">github.com</span>
              <span class="text-xs font-bold ml-1 truncate">deceive0112/work-in-progress</span>
            </a>
          </div>
          <div :ref="drag3.scrollContainer" @mousedown="drag3.onMouseDown" @mouseleave="drag3.onMouseLeave"
            @mouseup="drag3.onMouseUp" @mousemove="drag3.onMouseMove"
            class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            style="scrollbar-width: none;">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Vue</span>
            </div>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Nuxt</span>
            </div>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:tailwindcss" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2">
          <p class="text-md md:text-xl text-gray-400 font-semibold uppercase tracking-widest text-left mt-2">Work In Progress</p>
          <p class="gap-2 p-2 rounded-xl text-sm md:text-lg text-justify">Test test</p>
        </div>
      </div>

      <!--Project-4-->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 backdrop-blur-xl rounded-3xl">
        <div class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
          <div class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
            <a href="https://deceive0112.github.io/" target="_blank">
              <img src="https://opengraph.githubassets.com/2/deceive0112/" class="w-full object-cover" />
            </a>
            <a href="https://github.com/deceive0112/" target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-white/5">
              <UIcon name="mdi:github" class="size-4 text-gray-400" />
              <span class="text-xs text-gray-400">github.com</span>
              <span class="text-xs font-bold ml-1 truncate">deceive0112/work-in-progress</span>
            </a>
          </div>
          <div :ref="drag4.scrollContainer" @mousedown="drag4.onMouseDown" @mouseleave="drag4.onMouseLeave"
            @mouseup="drag4.onMouseUp" @mousemove="drag4.onMouseMove"
            class="text-[7px] flex gap-2 mt-2.5 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
            style="scrollbar-width: none;">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Vue</span>
            </div>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Nuxt</span>
            </div>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:tailwindcss" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-gray-400">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2">
          <p class="text-md md:text-xl text-gray-400 font-semibold uppercase tracking-widest text-left mt-2">Work In Progress</p>
          <p class="gap-2 p-2 rounded-xl text-sm md:text-lg text-justify">Test test</p>
        </div>
      </div>

    </div>
  </div>

  <!-- Hardware Section -->
  <div class="pt-5 pb-5 md:mx-20 rounded-3xl">
    <p class="text-xl md:text-3xl mt-15 mb-3">Hardware:</p>
    <div class="flex flex-col gap-6">

      <!-- CHANGED: hardware projects use grid on md+, stack on mobile -->
      <div v-for="(proj, i) in [
        { href: 'https://wokwi.com/projects/387820238754201601', img: '/projects/wokwi/wokwi-1.png', title: 'Non-Blocking Multitasking on ESP32 (MicroPython)', desc1: 'An asynchronous LED control system built with MicroPython and uasyncio on a microcontroller (e.g., ESP32). The project runs four LEDs on different GPIO pins, each blinking at independent speeds using non-blocking asynchronous tasks.', desc2: 'It demonstrates concurrent task execution, GPIO manipulation, and efficient multitasking in embedded systems without using traditional blocking delays.' },
        { href: 'https://wokwi.com/projects/383010704719665153', img: '/projects/wokwi/wokwi-2.png', title: 'Hello World on OLED using ESP32 (Micropython)', desc1: 'An OLED display demonstration built with MicroPython on an ESP32 using I2C communication. The project initializes an SSD1306 128x64 OLED screen and renders multiple lines of text, including display inversion.', desc2: 'It demonstrates I2C interfacing, external display control, and basic graphics rendering in embedded systems using MicroPython.' },
        { href: 'https://wokwi.com/projects/381742362764780545', img: '/projects/wokwi/wokwi-3.png', title: 'Button-Controlled LCD Display System (MicroPython)', desc1: 'A button-controlled LCD display project built with MicroPython using I2C communication. The system detects input from three push buttons and dynamically displays different messages on a 20x4 LCD screen.', desc2: 'It demonstrates GPIO input handling, I2C LCD interfacing, and real-time user interaction in an embedded system environment.' },
        { href: 'https://wokwi.com/projects/361765666730706945', img: '/projects/wokwi/wokwi-4.png', title: 'Switch-Controlled LED Pattern System (MicroPython)', desc1: 'A switch-controlled LED pattern project built with MicroPython on a microcontroller. The system reads a digital input from a toggle switch and triggers two different LED blinking sequences depending on the switch state.', desc2: 'It demonstrates GPIO input/output control, conditional logic handling, and timed LED pattern sequencing in an embedded systems environment.' },
        { href: 'https://wokwi.com/projects/358496787176328193', img: '/projects/wokwi/wokwi-5.png', title: 'PIR Motion Detection Alarm System (MicroPython)', desc1: 'A motion detection alarm system built with MicroPython using a PIR sensor, LCD display, LED, and buzzer. The system detects movement and triggers visual and audio alerts while displaying real-time status messages on a 16x2 I2C LCD.', desc2: 'It demonstrates sensor integration, PWM buzzer control, GPIO management, and real-time alert handling in an embedded systems environment.' },
        { href: 'https://wokwi.com/projects/357740259736505345', img: '/projects/wokwi/wokwi-6.png', title: 'Multi-Mode LED Pattern Controller (MicroPython)', desc1: 'A multi-mode LED controller built with MicroPython, using four push buttons to trigger different lighting sequences across eight LEDs. Each button activates a unique blinking pattern, including sequential, mirrored, and alternating effects.', desc2: 'It demonstrates multi-input GPIO handling, LED pattern sequencing, and structured control logic in an embedded systems environment.' },
      ]" :key="i"
        class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl backdrop-blur-xl shadow-lg">

        <!-- image -->
        <a :href="proj.href" target="_blank"
          class="hover:scale-102 transition-all duration-300 rounded-lg overflow-hidden">
          <img :src="proj.img" class="w-full h-full object-cover rounded-lg" loading="lazy" />
        </a>

        <!-- text -->
        <div class="col-span-1 md:col-span-2 flex flex-col justify-start">
          <p class="text-md md:text-xl text-gray-400 font-semibold uppercase tracking-widest text-left">{{ proj.title }}</p>
          <p class="p-2 rounded-xl text-sm md:text-lg text-justify">{{ proj.desc1 }}</p>
          <p class="p-2 rounded-xl text-sm md:text-lg text-justify">{{ proj.desc2 }}</p>
        </div>

      </div>

    </div>
  </div>
</template>
