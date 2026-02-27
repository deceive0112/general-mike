<script setup lang="ts">
const title = "General, Mike";
const isHovered = ref(false)

definePageMeta({
  layout: "default",
});
</script>

<style>
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
        <h1 class="text-lg sm:text-3xl md:text-4xl mt-10 md:mt-20 font-bold backdrop-blur-lg rounded-xl p-2">
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
          <a href="/about"
            class="text-base md:text-lg font-bold font-mono px-1 text-subtext1 hover:text-blue-500 transition-colors duration-200 cursor-pointer">More
            about me... -></a>
        </div>
      </div>

      <!-- CHANGED: two separate columns side by side on xl -->
      <div class="hidden xl:flex xl:basis-1/5 items-center justify-center mt-20">
        <div class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
          <NuxtImg src="/gradpicprof2.jpg" loading="lazy" class="w-40 h-40 xl:w-50 xl:h-50 rounded-lg shadow-lg object-cover" />
        </div>
      </div>

      <div class="hidden xl:flex xl:basis-1/5 items-center justify-center mt-20">
        <Transition enter-active-class="transition-all duration-500 delay-300"
          enter-from-class="opacity-0 -translate-x-10" enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-600" leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-10">
          <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
            <NuxtImg src="/gradpic-prof.jpg" loading="lazy" class="w-40 h-40 xl:w-50 xl:h-50 rounded-lg shadow-lg object-cover" />
          </div>
        </Transition>
      </div>

      <!-- CHANGED: photos show below text on lg and below, side by side centered -->
      <div class="flex xl:hidden flex-row items-center justify-center gap-4 mt-4 mb-10">
        <div class="backdrop-blur-lg rounded-xl p-3 shadow-xl">
          <NuxtImg src="/gradpicprof2.jpg" loading="lazy"
            class="w-32 h-32 sm:w-40 sm:h-40 rounded-lg shadow-lg object-cover" />
        </div>
        <Transition enter-active-class="transition-all duration-500 delay-300"
          enter-from-class="opacity-0 -translate-x-10" enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300" leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-10">
          <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 shadow-xl">
            <NuxtImg src="/gradpic-prof.jpg" loading="lazy"
              class="w-32 h-32 sm:w-40 sm:h-40 rounded-lg shadow-lg object-cover" />
          </div>
        </Transition>
      </div>

    </div>

    <!-- Featured Project & Educational Background -->
    <div
      class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-x-15 lg:gap-y-15 mt-10 lg:mt-15 mb-10 lg:mb-15 justify-items-center lg:justify-items-stretch">
      <FeaturedProject />
      <div class="w-full max-w-2xl lg:max-w-none lg:col-span-2">
        <EducationalBackground />
      </div>

    </div>

    <!-- Projects -->
    <ProjectsOverview />

    <!-- HTML to CSS to JS Showcase -->
    <LazyHtmlCssJs />

    <!-- Form & Mini Games -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-9 mt-15 lg:mt-30">
      <ContactForm />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-1 p-4 rounded-xl backdrop-blur-xl">
        <div class="flex items-center justify-center col-span-1 p-2 rounded-xl backdrop-blur-sm shadow-sm">
          <LazyTicTacToe />
        </div>
        <div class="flex items-center justify-center col-span-1 p-2 rounded-xl backdrop-blur-sm shadow-sm">
          <LazyTypingGame />
        </div>
        <div class="col-span-1 sm:col-span-2 p-1 rounded-xl backdrop-blur-sm shadow-sm">
          <LazyRaceGame />
        </div>
      </div>
    </div>

  </div>
</template>
