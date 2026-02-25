<script setup lang="ts">
const title = "General, Mike";
const isHovered = ref(false)

definePageMeta({
  layout: "default",
});

const iconScroll = ref<HTMLDivElement | null>(null)
let isDown = false
let startY = 0
let scrollTop = 0

const onMouseDown = (e: MouseEvent) => {
  isDown = true
  if (!iconScroll.value) return
  startY = e.pageY - iconScroll.value.offsetTop
  scrollTop = iconScroll.value.scrollTop
}

const onMouseLeave = () => { isDown = false }
const onMouseUp = () => { isDown = false }

const onMouseMove = (e: MouseEvent) => {
  if (!isDown) return
  e.preventDefault()
  if (!iconScroll.value) return
  const y = e.pageY - iconScroll.value.offsetTop
  const walk = (y - startY) * 2
  iconScroll.value.scrollTop = scrollTop - walk
}
</script>

<style>
.animate-wave {
  animation: wave 1.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  15% {
    transform: rotate(18deg);
  }

  30% {
    transform: rotate(-12deg);
  }

  45% {
    transform: rotate(18deg);
  }

  60% {
    transform: rotate(-8deg);
  }

  75% {
    transform: rotate(14deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.typing1,
.typing2,
.typing3 {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid currentColor;
  width: 0;
}

.typing1 {
  animation: typing1 5s steps(11) infinite, blink 0.6s step-end infinite;
}

.typing2 {
  animation: typing2 5s steps(7) infinite, blink 0.6s step-end infinite;
}

.typing3 {
  animation: typing3 5s steps(13) infinite, blink 0.6s step-end infinite;
}

@keyframes typing1 {
  0% {
    width: 0;
  }

  50% {
    width: 11ch;
  }

  90% {
    width: 11ch;
  }

  100% {
    width: 0;
  }
}

@keyframes typing2 {
  0% {
    width: 0;
  }

  50% {
    width: 7ch;
  }

  90% {
    width: 7ch;
  }

  100% {
    width: 0;
  }
}

@keyframes typing3 {
  0% {
    width: 0;
  }

  50% {
    width: 13ch;
  }

  90% {
    width: 13ch;
  }

  100% {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>

<template>
  <div class="flex flex-col min-h-screen px-10 md:px-20">
    <!-- Portfolio Overview -->
    <div class="flex flex-row gap-5">
      <div class="basis-3/5">
        <h1 class="text-4xl mt-20 font-bold backdrop-blur-lg rounded-xl w-117 p-2">Hey! <span class="px-1">I'm</span>
          <a class="text-blue-500 cursor-pointer px-1.5" @mouseenter="isHovered = true"
            @mouseleave="isHovered = false">{{ title }}</a>
          <span class="px-3 inline-block animate-wave cursor-pointer">
            <UIcon name="twemoji:waving-hand-light-skin-tone" class="size-7" />
          </span>
        </h1>

        <div class="inline-flex flex-row mt-1 gap-1.5">
          <UIcon name="svg-spinners:pulse" class="size-5 text-green-400" />
          <div class="group flex flex-row cursor-pointer overflow-hidden h-6 relative w-35">
            <div class="flex absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              <span class="text-md whitespace-nowrap">Available for work</span>
            </div>
            <a href="#form">
              <div
                class="flex absolute px-2 group-hover:text-blue-500 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <UIcon name="material-symbols:stacked-email-outline" class="size-5" />
                <span class="text-md whitespace-nowrap px-2">Contact me!</span>
              </div>
            </a>
          </div>
          <div class="flex gap-3">
            <span>|</span>
            <span class="text-md">Based in Cagayan de Oro City, Philippines.</span>
          </div>
        </div>

        <p class="text-xl mt-5 backdrop-blur-lg rounded-xl cursor-pointer w-195 p-3">
          I'm a <span
            class="text-red-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">developer</span>
          who takes great care in crafting detailed, intuitive <span
            class="text-orange-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">UI
            designs</span>
          and engaging <span
            class="text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">user
            experiences</span>.
          Beyond <span
            class="text-violet-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">software</span>,
          I also bring hands-on experience in <span
            class="text-emerald-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">hardware</span>
          projects, such as <span
            class="text-yellow-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">IoT</span>.
        </p>

        <div class="flex flex-row mt-5 mb-25 gap-3 backdrop-blur-lg rounded-xl w-121 p-2">
          <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
            <a href="https://github.com/deceive0112" target="_blank" class="inline-flex">
              <UIcon name="mdi:github"
                class="size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
              <span
                class="text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">Github</span>
            </a>
          </div>
          <span class="text-lg font-mono">|</span>
          <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
            <a href="https://www.linkedin.com/in/mike-general-256a63332/" target="_blank" class="inline-flex">
              <UIcon name="mdi:linkedin"
                class="size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
              <span
                class="text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">LinkedIn</span>
            </a>
          </div>
          <span class="text-lg font-mono">|</span>
          <span
            class="text-lg font-bold font-mono px-1 text-subtext1 hover:text-blue-500 transition-colors duration-200 cursor-pointer">More
            about me... -></span>
        </div>
      </div>

      <div class="flex basis-1/5 items-center justify-center mt-20">
        <div class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
          <img src="/gradpicprof2.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
        </div>
      </div>
      <div class="flex basis-1/5 items-center justify-center mt-20">
        <Transition enter-active-class="transition-all duration-500 delay-300"
          enter-from-class="opacity-0 -translate-x-10" enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-1600" leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-10">
          <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
            <img src="/gradpic-prof.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
          </div>
        </Transition>
      </div>
    </div>

    <!-- Featured Project and Educational Background -->
    <div class="grid grid-cols-5 gap-x-15 gap-y-15 mt-15 mb-15">
      <div class="col-span-3">
        <h2 class="flex text-3xl uppercase font-bold items-center text-center justify-center mb-1">Featured Project</h2>
        <div class="p-3 rounded-xl backdrop-blur-sm shadow-2xl">
          <div
            class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
            <p class="text-lg text-gray-400 font-semibold mb-2 uppercase tracking-widest">Work in Progress</p>

            <!-- CHANGED: wrapped in flex row -->
            <div class="flex flex-row gap-3 items-start">

              <!-- GitHub thumbnail -->
              <a href="https://github.com/deceive0112/" target="_blank"
                class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-103 transition-all duration-300 cursor-pointer border border-white/10 flex-1">
                <img src="https://opengraph.githubassets.com/2/deceive0112/" class="w-full object-cover" />
                <div class="flex items-center gap-2 px-3 py-2 bg-white/5">
                  <UIcon name="mdi:github" class="size-4 text-gray-400" />
                  <span class="text-xs text-gray-400">github.com</span>
                  <span class="text-xs font-bold ml-1">deceive0112/</span>
                </div>
              </a>

              <div ref="iconScroll"
                class="flex flex-col gap-2 overflow-y-auto cursor-grab active:cursor-grabbing select-none self-stretch mt-1"
                style="scrollbar-width: none;" @mousedown="onMouseDown" @mouseleave="onMouseLeave" @mouseup="onMouseUp"
                @mousemove="onMouseMove">
                <div class="flex flex-col items-center gap-1 shrink-0">
                  <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-13 p-1" />
                  <span class="text-[10px] text-gray-400">HTML</span>
                </div>
                <div class="flex flex-col items-center gap-1 shrink-0">
                  <UIcon name="devicon:css" class="rounded-xl shadow-xl size-13 p-1" />
                  <span class="text-[10px] text-gray-400">CSS</span>
                </div>
                <div class="flex flex-col items-center gap-1 shrink-0">
                  <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-13 p-1" />
                  <span class="text-[10px] text-gray-400">JavaScript</span>
                </div>
              </div>

            </div>

            <p class="gap-2 p-3 rounded-xl">Test test</p>
          </div>
        </div>
      </div>
      <EducationalBackground />
    </div>

    <!-- Projects -->
    <ProjectsOverview />

    <!-- HTML to CSS to JS Showcase -->
    <div class="flex backdrop-blur-2xl rounded-xl items-center text-center justify-center text-3xl p-5 mt-15">
      <div class="grid grid-cols-3 gap-4 p-4 rounded-2xl backdrop-blur-sm shadow-2xl w-full">

        <!-- HTML -->
        <div
          class="flex flex-col gap-4 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-orange-500/50 hover:shadow-lg hover:bg-white/5">
          <div class="bg-white/50 rounded-2xl overflow-hidden">
            <iframe src="/projects/to-do-list/HTML/index.html" class="w-full h-120 rounded-lg"
              title="To-Do List Project" />
          </div>
          <div class="flex items-center justify-between">
            <p class="text-[28px] font-semibold uppercase tracking-widest text-orange-400 inline-block typing1">
              &lt;!--HTML--&gt;</p>
            <div class="flex justify-end">
              <a href="/projects/to-do-list/to-do-source-code/HTML.txt" target="_blank">
                <UButton icon="material-symbols:folder-open-rounded"
                  class="rounded-lg shadow-2xl cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 p-2">
                  Open Source Code
                </UButton>
              </a>
            </div>
          </div>
        </div>

        <!-- CSS -->
        <div
          class="flex flex-col gap-4 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-lg hover:bg-white/5">
          <div class="bg-white/50 rounded-2xl overflow-hidden">
            <iframe src="/projects/to-do-list/HTML-CSS/index.html" class="w-full h-120 rounded-lg"
              title="To-Do List Project" />
          </div>
          <div class="flex items-center justify-between">
            <p class="text-[28px] font-semibold uppercase tracking-widest text-purple-400 inline-block typing2">/*CSS*/
            </p>
            <div class="flex justify-end">
              <a href="/projects/to-do-list/to-do-source-code/HTML-CSS.txt" target="_blank">
                <UButton icon="material-symbols:folder-open-rounded"
                  class="rounded-lg shadow-2xl cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 p-2">
                  Open Source Code
                </UButton>
              </a>
            </div>
          </div>
        </div>

        <!-- JavaScript -->
        <div
          class="flex flex-col gap-4 p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-blue-500/50 hover:shadow-lg hover:bg-white/5">
          <div class="bg-white/50 rounded-2xl overflow-hidden">
            <iframe src="/projects/to-do-list/HTML-CSS-JS/index.html" class="w-full h-120 rounded-lg"
              title="To-Do List Project" />
          </div>
          <div class="flex items-center justify-between">
            <p class="text-[28px] font-semibold uppercase tracking-widest text-blue-400 inline-block typing3">
              //Javascript</p>
            <div class="flex justify-end">
              <a href="/projects/to-do-list/to-do-source-code/HTML-CSS-JS.txt" target="_blank">
                <UButton icon="material-symbols:folder-open-rounded"
                  class="rounded-lg shadow-2xl cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 p-2">
                  Open Source Code
                </UButton>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Form & Random Mini Games -->
    <div class="grid grid-cols-2 gap-x-9 gap-y-9 mt-30">
      <ContactForm />
      <div
        class="grid grid-cols-2 grid-rows-1 gap-x-9 gap-y-9 items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl backdrop-blur-xl">
        <div
          class="flex items-center text-center justify-center col-span-1 p-2 basis-sm rounded-xl text-3xl backdrop-blur-sm">
          <TicTacToe />
        </div>
        <div
          class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-30 basis-sm rounded-xl text-3xl">
          Test?</div>
        <div
          class="bg-sky-400 flex items-center text-center justify-center col-span-2 p-25 basis-sm rounded-xl text-3xl">
          Race</div>
      </div>
    </div>
  </div>
</template>
