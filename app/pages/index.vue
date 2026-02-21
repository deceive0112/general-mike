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
  0%   { transform: rotate(0deg); }
  15%  { transform: rotate(18deg); }
  30%  { transform: rotate(-12deg); }
  45%  { transform: rotate(18deg); }
  60%  { transform: rotate(-8deg); }
  75%  { transform: rotate(14deg); }
  100% { transform: rotate(0deg); }
}
</style>

<template>
<div class="flex flex-col min-h-screen px-10 md:px-20">
  <!-- Portfolio Overview   -->
  <div class="flex flex-row gap-5">
    <div class="basis-3/5">
      <h1 class="text-4xl mt-20 font-bold backdrop-blur-lg rounded-xl">Hey! I'm 
        <a class="text-blue-500 cursor-pointer"  
          @mouseenter="isHovered = true"
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

      <p class="text-xl mt-5 backdrop-blur-lg rounded-xl cursor-pointer">
        I'm a <span class="text-red-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">developer</span> 
        who takes great care in crafting detailed, intuitive <span class="text-orange-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">UI designs</span>  
        and engaging <span class="text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">user experiences</span> . 
        Beyond <span class="text-violet-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">software</span>, 
        I also bring hands-on experience in <span class="text-emerald-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">hardware</span> projects, such as
        <span class="text-yellow-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">IoT</span> .
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
      <div class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
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
      <div v-show="isHovered" class="backdrop-blur-lg rounded-xl p-3 mb-25 shadow-xl">
        <img src="/gradpic-prof.jpg" class="flex center w-50 h-50 rounded-lg shadow-lg" />
      </div>
      </Transition>
    </div>
  </div>

<!-- Tech Stack Overview   -->
  <div> 
  </div>

<!-- Featured Projects   -->
  <div class="inline-flex flex-row items-center mt-10 shadow-xl rounded-xl">
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

<!-- Randoms   -->
  <div class="grid grid-cols-2 gap-x-9 gap-y-9 mt-30">
    <!-- Form   -->
    <div class="group flex-col p-4 basis-sm rounded-xl text-3xl backdrop-blur-2xl shadow-xl" id="form">
      <h3 class="text-2xl font-bold">Let's Work Together</h3>
      <p class="mt-3 text-lg">I'm currently open to new opportunities and collaborations. 
        If you're interested in working together or just want to connect, feel free to reach out!</p>
        <form action="https://formsubmit.co/mikegeneral21@gmail.com" method="POST">
          <div class="flex flex-row gap-10 text-[1rem] mt-6">
            <div class="flex flex-col w-full">
              <span class="text-[1rem] mb-1">Name<span class="text-red-500">*</span></span>
              <input type="text" maxlength="60" name="name" placeholder="John Doe" 
              class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div class="flex flex-col w-full">
              <span class="text-[1rem] mb-1">Email<span class="text-red-500">*</span></span>
              <input type="email" maxlength="120"name="email" placeholder="johndoe@example.com" 
              class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>

          <div class="flex flex-col text-[1rem] mt-5">
            <span class="text-[1rem] mb-1">Subject<span class="text-red-500">*</span></span>
            <textarea name="subject" maxlength="160" placeholder="Project Inquiry, collaboration, etc."
            class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" rows="1"></textarea>
          </div>

          <div class="flex flex-col text-[1rem] mt-5">
            <span class="text-[1rem] mb-1">Message<span class="text-red-500">*</span></span>
            <textarea name="message" maxlength="600" placeholder="Tell me about your project, timeline, and requirements..." rows="6"
            class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" 
            class="group flex items-center justify-center mt-6 px-4 py-2 text-[1.2rem] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
            <UIcon name="prime:send" class="size-5 inline-flex mr-1" />
            Send Message
          </button>
        </form>
    </div>
    <div class="bg-sky-500 flex items-center text-center justify-center col-span-1 p-4 basis-sm rounded-xl text-3xl">Test2</div>
  </div>
</div>
</template>
