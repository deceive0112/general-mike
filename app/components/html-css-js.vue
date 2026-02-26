<template>
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
</template>