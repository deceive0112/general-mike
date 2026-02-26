<script setup lang="ts">
const isHoveredEdu = ref(false)
</script>

<template>
  <!-- CHANGED: col-span-2 on desktop, full width on mobile -->
  <div class="col-span-1 md:col-span-2 lg:col-span-2">
    <!-- CHANGED: responsive title -->
    <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-1">
      Educational Background
    </h2>

    <div class="flex flex-col gap-2 p-3 rounded-xl backdrop-blur-2xl shadow-xl"
      @mouseenter="isHoveredEdu = true"
      @mouseleave="isHoveredEdu = false">

      <!-- USTP -->
      <div class="flex items-start gap-2 md:gap-3">
        <a href="https://www.ustp.edu.ph/" target="_blank">
          <!-- CHANGED: smaller logo on mobile -->
          <img src="/school/USTP.png"
            class="w-14 h-14 md:w-20 md:h-20 min-w-14 md:min-w-20 rounded-full shadow-2xl bg-white object-contain p-1.5 shrink-0 mt-1 cursor-pointer" />
        </a>
        <div class="w-full">
          <p class="font-bold text-[11px] md:text-[13px] mt-2">University of Science and Technology of the Southern Philippines (USTP)</p>
          <!-- CHANGED: stack on mobile, row on tablet+ -->
          <div class="flex flex-col sm:flex-row sm:items-center">
            <p class="text-[11px] md:text-[13px] text-gray-400 mt-1">Bachelor of Science In Computer Engineering (BSCpE)</p>
            <p class="text-[11px] md:text-[13px] text-gray-400 mt-1 sm:ml-auto">2020 - 2024</p>
          </div>
          <p class="text-[11px] md:text-[12px] mt-1">Thesis:</p>
          <ul class="list-disc ml-3 px-1">
            <li class="text-[11px] md:text-[12px] mt-0.5">Specialization in IoT.</li>
            <li class="text-[11px] md:text-[12px] mt-0.5 text-justify">Thesis about a portable communication device for deaf-mute individuals using ensemble.</li>
          </ul>
        </div>
      </div>

      <!-- LDCU -->
      <Transition enter-active-class="transition-all duration-600" enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-600"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-3">
        <div v-show="isHoveredEdu" class="flex items-start gap-2 md:gap-3">
          <a href="https://www.liceo.edu.ph/" target="_blank">
            <!-- CHANGED: smaller logo on mobile -->
            <img src="/school/LDCU.png"
              class="w-14 h-14 md:w-20 md:h-20 min-w-14 md:min-w-20 rounded-full shadow-2xl bg-white object-contain p-1.5 shrink-0 mt-1 cursor-pointer" />
          </a>
          <div class="w-full">
            <p class="font-bold text-[11px] md:text-[13px] mt-2">Liceo de Cagayan University (LDCU)</p>
            <!-- CHANGED: stack on mobile, row on tablet+ -->
            <div class="flex flex-col sm:flex-row sm:items-center">
              <p class="text-[11px] md:text-[13px] text-gray-400 mt-1">Science, Technology, Engineering, and Mathematics</p>
              <p class="text-[11px] md:text-[13px] text-gray-400 mt-1 sm:ml-auto">2018 - 2020</p>
            </div>
            <p class="text-[11px] md:text-[13px] text-gray-400">(STEM)</p>
            <p class="text-[11px] md:text-[12px] mt-1">Research:</p>
            <ul class="list-disc ml-3 px-1">
              <li class="text-[11px] md:text-[12px] mt-0.5">Designer of the building model's structure.</li>
              <li class="text-[11px] md:text-[12px] mt-0.5 text-justify">Research about the importance of implementing of buoyancy and bearing systems on buildings.</li>
            </ul>
          </div>
        </div>
      </Transition>

      <div class="ml-auto">
        <a href="/school/General-Mike_CV.pdf" target="_blank">
          <UButton icon="material-symbols:download-rounded"
            class="rounded-lg shadow-md mt-3 cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 text-xs md:text-sm">
            View Full Resume
          </UButton>
        </a>
      </div>
    </div>
  </div>
</template>
