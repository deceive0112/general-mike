<script setup lang="ts">
const title = "General, Mike";
const isHovered = ref(false)
definePageMeta({
  layout: "default",
});
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
</style>

<template>
  <div class="flex flex-col min-h-screen px-10 md:px-20">
    <!-- Portfolio Overview   -->
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
            experiences</span> .
          Beyond <span
            class="text-violet-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">software</span>,
          I also bring hands-on experience in <span
            class="text-emerald-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">hardware</span>
          projects, such as <span
            class="text-yellow-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">IoT</span>
          .
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

    <!-- Tech Stack Overview and Educational Background  -->
    <div class="grid grid-cols-5 gap-x-9 gap-y-9 mt-15 mb-15">
      <div class="col-span-3">
        <h2 class="flex text-3xl font-bold items-center text-center justify-center mb-1">Tech Stack & Tools</h2>
        <div class="group p-4 basis-sm rounded-xl text-3xl backdrop-blur-2xl shadow-xl">
          <p class="text-lg">the quick brown fox jumps over the lazy dog</p>
        </div>
      </div>

      <div class="col-span-2">
        <h2 class="flex text-3xl font-bold items-center text-center justify-center mb-1">Educational Background</h2>
        <div class="flex flex-col gap-2 p-3 rounded-xl backdrop-blur-2xl shadow-xl">

          <div class="flex items-start gap-3">
            <a href="https://www.ustp.edu.ph/" target="_blank">
              <img src="/school/USTP.png"
                class="w-20 h-20 min-w-20 rounded-full shadow-2xl bg-white object-contain p-1.5 shrink-0 mt-1 cursor-pointer" />
            </a>
            <div class="w-full">
              <p class="font-bold text-[13px] mt-2">University of Science and Technology of the Southern Philippines
                (USTP)</p>
              <div class="flex items-center">
                <p class="text-[13px] text-gray-400 mt-1">Bachelor of Science In Computer Engineering (BSCpE)</p>
                <p class="text-[13px] text-gray-400 mt-1 ml-auto">2020 - 2024</p>
              </div>
              <p class="text-[12px] mt-1">Thesis:</p>
              <ul class="list-disc ml-3 px-1">
                <li class="text-[12px] mt-0.5">Specialization in IoT.</li>
                <li class="text-[12px] mt-0.5">Thesis about a portable communication device for deaf-mute individuals
                  using ensemble.</li>
              </ul>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <a href="https://www.liceo.edu.ph/" target="_blank">
              <img src="/school/LDCU.png"
                class="w-20 h-20 min-w-20 rounded-full shadow-2xl bg-white object-contain p-1.5 shrink-0 mt-1 cursor-pointer" />
            </a>
            <div class="w-full">
              <p class="font-bold text-[13px] mt-2">Liceo de Cagayan University (LDCU)</p>
              <div class="flex items-center">
                <p class="text-[13px] text-gray-400 mt-1">Science, Technology, Engineering, and Mathematics</p>
                <p class="text-[13px] text-gray-400 mt-1 ml-auto">2018 - 2020</p>
              </div>
              <p class="text-[12px] mt-1">Research:</p>
              <ul class="list-disc ml-3 px-1">
                <li class="text-[12px] mt-0.5">Designer of the building model's structure.</li>
                <li class="text-[12px] mt-0.5">Research about the importance of implementing of buoyancy and bearing
                  systems on buildings.</li>
              </ul>
            </div>
          </div>

          <div class="ml-auto">
            <a href="/school/General-Mike_CV.pdf" target="_blank">
            <UButton 
              icon="material-symbols:download-rounded"
              class="mt-3 cursor-pointer bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0">
              View Full Resume
            </UButton>
            </a>
          </div>

        </div>
      </div>
    </div>

    <!-- Featured Projects   -->
    <div class="inline-flex flex-row items-center mt-10 shadow-xl rounded-xl">
      <UIcon name="material-symbols:star-outline" class="size-7" />
      <h2 class="text-2xl font-bold p-2 gap-9">Featured Projects</h2>
      <span class="ml-auto">
        <a class="hover:text-blue-500 cursor-pointer hover:underline">View all -></a>
      </span>
    </div>

    <div class="grid grid-cols-3 gap-x-7 gap-y-7 backdrop-blur-2xl rounded-xl p-1.5">
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
        01</div>
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
        02
      </div>
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
        03</div>
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
        04</div>
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-2 p-4 basis-sm rounded-xl text-3xl">
        05</div>
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-2 p-4 basis-sm rounded-xl text-3xl">
        06</div>
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
        07</div>
    </div>

    <!-- HTML to CSS to JS Showcase  -->
    <div class="flex items-center text-center justify-center text-3xl bg-sky-400 rounded-xl p-2 mt-20">
      Test2
    </div>

    <!-- Form & Randoms   -->
    <div class="grid grid-cols-2 gap-x-9 gap-y-9 mt-30">
      <ContactForm />
      <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
        Test3</div>
    </div>
  </div>
</template>
