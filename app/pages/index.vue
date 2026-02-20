<script setup lang="ts">
const title = "General, Mike";
const isHovered = ref(false)
  definePageMeta({
    layout: "default",
  });
</script>

<template>
<div class="flex flex-col min-h-screen px-10 md:px-20">
  <div class="flex flex-row gap-5">
    <div class="basis-3/5">
      <h1 class="text-4xl mt-20 font-bold backdrop-blur-lg rounded-xl">Hey! I'm 
        <a class="text-blue-500 cursor-pointer"  
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false">{{ title }}</a>
      </h1>

    <div class="group inline-flex flex-row mt-1 gap-1.5">
      <UIcon name="svg-spinners:pulse" class="size-5 text-green-400" />
      <div class="flex flex-row cursor-pointer overflow-hidden h-6 relative w-35">
        <div class="flex absolute transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
          <span class="text-md whitespace-nowrap">Available for work</span>
        </div>
        <a href="#form">
        <div class="flex absolute px-2 group-hover:text-blue-500 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
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

      <p class="text-xl mt-5 backdrop-blur-lg rounded-xl">
        I'm a developer who takes great care in crafting detailed, intuitive UI designs and engaging user experiences. 
        Beyond software, I also bring hands-on experience in hardware projects, such as IoT.
      </p>

    <div class="flex flex-row mt-5 mb-25 gap-3 backdrop-blur-lg rounded-xl">
      <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
        <a href="https://github.com/deceive0112" class="inline-flex">
          <UIcon name="mdi:github" class="size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200"/>
          <span class="text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200">Github</span>
        </a>
      </div>
        <span class="text-lg font-mono">|</span>
      <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
        <a href="https://www.linkedin.com/in/mike-general-256a63332/" class="inline-flex">
          <UIcon name="mdi:linkedin" class="size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200"/>
          <span class="text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200">LinkedIn</span>
        </a>
      </div>
        <span class="text-lg font-mono">|</span>
        <span class="text-lg font-bold font-mono px-1 text-subtext1 hover:text-blue-500 transition-colors duration-200 cursor-pointer">More about me... -></span>
    </div>

    </div>
    <div class="flex basis-1/5 items-center justify-center mt-20">
      <div class="backdrop-blur-lg rounded-xl p-3 mb-25">
      <img src="/gradpicprof2.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
      </div>
    </div>
    <div class="flex basis-1/5 items-center justify-center mt-20">
      <Transition
        enter-active-class="transition-all duration-500 delay-300"
        enter-from-class="opacity-0 -translate-x-10"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-1600"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-10"
      >
      <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 mb-25">
        <img src="/gradpic-prof.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
      </div>
      </Transition>
    </div>
  </div>

  <div>

  </div>

  <div class="inline-flex flex-row items-center mt-10">
    <UIcon name="material-symbols:star-outline" class="size-7"/>
    <h2 class="text-2xl font-bold p-2 gap-9">Featured Projects</h2>
    <span class="ml-auto">
      <a class="hover:text-blue-500 cursor-pointer hover:underline">View all -></a>
    </span>
  </div>

  <div class="grid grid-cols-3 gap-x-7 gap-y-7 backdrop-blur-2xl rounded-xl">
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">01</div>
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">
      02
    </div>
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">03</div>
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">04</div>
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-2 p-4 basis-sm rounded-xl text-3xl">05</div>
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-2 p-4 basis-sm rounded-xl text-3xl">06</div>
    <div class="bg-sky-400 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">07</div>
  </div>

  <div class="grid grid-cols-2 gap-x-9 gap-y-9 mt-30" id="form">
    <div class="group flex-col p-4 basis-sm rounded-xl text-3xl backdrop-blur-2xl">
      <h3 class="text-2xl font-bold">Let's Work Together</h3>
      <p class="mt-3 text-lg">I'm currently open to new opportunities and collaborations. 
        If you're interested in working together or just want to connect, feel free to reach out!</p>
        <form action="https://formsubmit.co/mikegeneral21@gmail.com" method="POST">
          <div class="flex flex-row gap-2">
            <input type="name" name="name" placeholder="Your name" 
            class="w-full p-1 mt-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="Your email" 
            class="w-full p-1 mt-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <textarea type="message" name="message" placeholder="Your message" 
            class="w-full p-1 mt-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            </textarea>
          </div>
          <button type="submit" 
            class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
            Send Message
          </button>
        </form>
    </div>
    <div class="bg-sky-500 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">Test2</div>
  </div>
</div>
</template>
