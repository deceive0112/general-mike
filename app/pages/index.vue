<script setup lang="ts">
const title = "General, Mike";
const isHovered = ref(false)

definePageMeta({
  layout: "default",
});

const carouselRef = ref<HTMLDivElement | null>(null)
const shouldAnimate = ref(false)

const checkOverflow = () => {
  if (carouselRef.value) {
    const parent = carouselRef.value.parentElement
    if (parent) {
      shouldAnimate.value = carouselRef.value.scrollWidth / 2 > parent.clientWidth
    }
  }
}

onMounted(() => {
  checkOverflow()
  window.addEventListener('resize', checkOverflow)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkOverflow)
})
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

.slide-in {
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-track {
  animation: carousel 15s linear infinite;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@keyframes carousel {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>

<template>
  <div class="flex flex-col min-h-screen"
    style="padding-left: clamp(8px, 2vw, 80px); padding-right: clamp(8px, 2vw, 80px);">

    <!-- Portfolio Overview -->
    <div class="flex flex-col xl:flex-row gap-5">

      <div class="w-full xl:basis-3/5">
        <h1 class="text-2xl sm:text-3xl md:text-4xl mt-10 md:mt-20 font-bold backdrop-blur-lg rounded-xl p-2">
          Hey! <span class="px-1">I'm</span>
          <a class="text-blue-500 cursor-pointer px-1.5" @mouseenter="isHovered = true"
            @mouseleave="isHovered = false">{{ title }}</a>
          <span class="px-3 inline-block animate-wave cursor-pointer">
            <UIcon name="twemoji:waving-hand-light-skin-tone" class="size-7" />
          </span>
        </h1>

        <div class="flex flex-wrap items-center mt-1 gap-1.5">
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
            <span class="text-sm md:text-md">Based in Cagayan de Oro City, Philippines.</span>
          </div>
        </div>

        <p class="text-base md:text-xl mt-5 backdrop-blur-lg rounded-xl cursor-pointer w-full p-3 text-justify">
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

        <div class="flex flex-wrap mt-5 mb-10 xl:mb-25 gap-3 backdrop-blur-lg rounded-xl p-2">
          <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
            <a href="https://github.com/deceive0112" target="_blank" class="inline-flex">
              <UIcon name="mdi:github"
                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
              <span
                class="text-base md:text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">Github</span>
            </a>
          </div>
          <span class="text-base md:text-lg font-mono">|</span>
          <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
            <a href="https://www.linkedin.com/in/mike-general-256a63332/" target="_blank" class="inline-flex">
              <UIcon name="mdi:linkedin"
                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
              <span
                class="text-base md:text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">LinkedIn</span>
            </a>
          </div>
          <span class="text-base md:text-lg font-mono">|</span>
          <span
            class="text-base md:text-lg font-bold font-mono px-1 text-subtext1 hover:text-blue-500 transition-colors duration-200 cursor-pointer">More
            about me... -></span>
        </div>
      </div>

      <!-- CHANGED: two separate columns side by side on xl -->
      <div class="hidden xl:flex xl:basis-1/5 items-center justify-center mt-20">
        <div class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
          <img src="/gradpicprof2.jpg" class="w-40 h-40 xl:w-50 xl:h-50 rounded-lg shadow-lg object-cover" />
        </div>
      </div>

      <div class="hidden xl:flex xl:basis-1/5 items-center justify-center mt-20">
        <Transition enter-active-class="transition-all duration-500 delay-300"
          enter-from-class="opacity-0 -translate-x-10" enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-600" leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-10">
          <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
            <img src="/gradpic-prof.jpg" class="w-40 h-40 xl:w-50 xl:h-50 rounded-lg shadow-lg object-cover" />
          </div>
        </Transition>
      </div>

      <!-- CHANGED: photos show below text on lg and below, side by side centered -->
      <div class="flex xl:hidden flex-row items-center justify-center gap-4 mt-4 mb-10">
        <div class="backdrop-blur-lg rounded-xl p-3 shadow-xl">
          <img src="/gradpicprof2.jpg" class="w-32 h-32 sm:w-40 sm:h-40 rounded-lg shadow-lg object-cover" />
        </div>
        <Transition enter-active-class="transition-all duration-500 delay-300"
          enter-from-class="opacity-0 -translate-x-10" enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300" leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-10">
          <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 shadow-xl">
            <img src="/gradpic-prof.jpg" class="w-32 h-32 sm:w-40 sm:h-40 rounded-lg shadow-lg object-cover" />
          </div>
        </Transition>
      </div>

    </div>

    <!-- Featured Project and Educational Background -->
    <div
      class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-x-15 lg:gap-y-15 mt-10 lg:mt-15 mb-10 lg:mb-15 justify-items-center lg:justify-items-stretch">

      <div class="col-span-1 lg:col-span-3 lg:mr-10 w-full max-w-2xl lg:max-w-none">
        <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-1">Featured
          Project</h2>
        <div class="p-3 rounded-xl backdrop-blur-sm shadow-2xl">
          <div
            class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
            <a href="" target="_blank">
              <img src="https://opengraph.githubassets.com/2/deceive0112/" class="w-full object-cover" />
            </a>
            <a href="https://github.com/deceive0112/" target="_blank"
              class="flex items-center gap-2 px-3 py-2 bg-white/5">
              <UIcon name="mdi:github" class="size-4 text-gray-400" />
              <span class="text-2xs md:text-lg text-gray-400">github.com</span>
              <span class="text-2xs md:text-lg font-bold ml-1 truncate">deceive0112/work in progress</span>
            </a>
          </div>

          <div class="overflow-hidden mt-2.5 relative">
            <template v-if="shouldAnimate">
              <div
                class="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
              <div
                class="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
            </template>

            <div ref="carouselRef" :class="shouldAnimate ? 'carousel-track w-max' : 'flex flex-wrap'"
              class="text-[12px] flex gap-4">

              <!-- original set -->
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

              <!-- duplicate set — only visible when animating -->
              <template v-if="shouldAnimate">
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
              </template>

            </div>
          </div>

          <p class="gap-2 p-1 rounded-xl text-sm md:text-lg mt-1 text-justify">Test test</p>
        </div>
      </div>

      <div class="w-full max-w-2xl lg:max-w-none lg:col-span-2">
        <EducationalBackground />
      </div>

    </div>

    <!-- Projects -->
    <ProjectsOverview />

    <!-- HTML to CSS to JS Showcase -->
    <div class="flex backdrop-blur-2xl rounded-xl items-center text-center justify-center p-3 md:p-5 mt-10 md:mt-15">
      <div
        class="grid grid-cols-1 xl:grid-cols-3 gap-4 p-3 md:p-4 rounded-2xl backdrop-blur-sm shadow-2xl w-full overflow-hidden">

        <!-- HTML — hidden until xl -->
        <div
          class="hidden xl:flex slide-in flex-col gap-4 p-4 rounded-xl shadow-md hover:shadow-orange-500/50 hover:shadow-lg hover:bg-white/5 w-full"
          style="animation-delay: 300ms">
          <div class="bg-white/50 rounded-2xl overflow-hidden">
            <iframe src="/projects/to-do-list/HTML/index.html" class="w-full h-64 md:h-120 rounded-lg"
              title="To-Do List Project" />
          </div>
          <div class="flex flex-col md:flex-row md:items-center items-start justify-between gap-2">
            <p
              class="text-lg md:text-[20px] font-semibold uppercase tracking-widest text-orange-400 inline-block typing1">
              &lt;!--HTML--&gt;</p>
            <a href="/projects/to-do-list/to-do-source-code/HTML.txt" target="_blank">
              <UButton icon="material-symbols:folder-open-rounded"
                class="rounded-lg shadow-2xl cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 p-2 text-xs md:text-sm">
                Open Source Code
              </UButton>
            </a>
          </div>
        </div>

        <!-- CSS — hidden until xl -->
        <div
          class="hidden xl:flex slide-in flex-col gap-4 p-4 rounded-xl shadow-md hover:shadow-purple-500/50 hover:shadow-lg hover:bg-white/5 w-full"
          style="animation-delay: 500ms">
          <div class="bg-white/50 rounded-2xl overflow-hidden">
            <iframe src="/projects/to-do-list/HTML-CSS/index.html" class="w-full h-64 md:h-120 rounded-lg"
              title="To-Do List Project" />
          </div>
          <div class="flex flex-col md:flex-row md:items-center items-start justify-between gap-2">
            <p
              class="text-lg md:text-[20px] font-semibold uppercase tracking-widest text-purple-400 inline-block typing2">
              /*CSS*/</p>
            <a href="/projects/to-do-list/to-do-source-code/HTML-CSS.txt" target="_blank">
              <UButton icon="material-symbols:folder-open-rounded"
                class="rounded-lg shadow-2xl cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 p-2 text-xs md:text-sm">
                Open Source Code
              </UButton>
            </a>
          </div>
        </div>

        <!-- JS — always visible, centered when HTML/CSS hidden -->
        <div
          class="slide-in flex flex-col gap-4 p-4 rounded-xl shadow-md hover:shadow-blue-500/50 hover:shadow-lg hover:bg-white/5 w-full max-w-lg xl:max-w-none mx-auto xl:mx-0 xl:col-start-3 col-span-1"
          style="animation-delay: 700ms">
          <div class="bg-white/50 rounded-2xl overflow-hidden">
            <iframe src="/projects/to-do-list/HTML-CSS-JS/index.html" class="w-full h-64 md:h-120 rounded-lg"
              title="To-Do List Project" />
          </div>
          <div class="flex flex-col md:flex-row md:items-center items-center justify-between gap-2">
            <p
              class="text-lg md:text-[20px] font-semibold uppercase tracking-widest text-blue-400 inline-block typing3">
              //Javascript</p>
            <a href="/projects/to-do-list/to-do-source-code/HTML-CSS-JS.txt" target="_blank">
              <UButton icon="material-symbols:folder-open-rounded"
                class="rounded-lg shadow-2xl cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 p-2 text-xs md:text-sm">
                Open Source Code
              </UButton>
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Form & Mini Games -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-9 mt-15 lg:mt-30 mb-15 lg:mb-20">
      <ContactForm />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 p-4 rounded-xl backdrop-blur-xl">
        <div class="flex items-center justify-center col-span-1 p-2 rounded-xl backdrop-blur-sm shadow-sm">
          <TicTacToe />
        </div>
        <div class="flex items-center justify-center col-span-1 p-2 rounded-xl backdrop-blur-sm shadow-sm">
          <TypingGame />
        </div>
        <div class="col-span-1 sm:col-span-2 p-1 rounded-xl backdrop-blur-sm shadow-sm">
          <RaceGame />
        </div>
      </div>
    </div>

  </div>
</template>
