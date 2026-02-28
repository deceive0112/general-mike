<script setup lang="ts">
definePageMeta({
    layout: "default",
});
</script>

<template>
    <div class="mt-5 md:mt-20 md:mb-5">

        <!-- About Section -->
        <!-- CHANGED: mx-30 for left/right margin, but mx-4 on mobile so it doesn't overflow -->
        <div class="mx-4 sm:mx-10 lg:mx-45 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">

            <div class="flex flex-col gap-4">

                <div class="flex items-center justify-center p-4 rounded-xl backdrop-blur-xl shadow-lg">
                    <NuxtImg src="/selfie-ghibli-style.png" loading="lazy"
                        class="w-60 h-70 sm:w-70 sm:h-80 xl:w-80 xl:h-90 rounded-2xl shadow-lg object-cover" />
                </div>

                <!-- CHANGED: spotify height reduced to 80 -->
                <div class="p-3 rounded-xl backdrop-blur-xl shadow-lg">
                    <iframe src="https://open.spotify.com/embed/artist/58oPVy7oihAEXE0Ott6JOf" loading="lazy"
                        width="100%" height="152" frameborder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        class="rounded-xl" />
                </div>

            </div>

            <div
                class="lg:col-span-2 flex flex-col justify-start gap-3 md:p-4 rounded-xl backdrop-blur-xl shadow-lg text-gray-500">

                <p class="text-base md:text-2xl text-justify font-sans">
                    A <span class="underline decoration-dash decoration-rose-300">Computer Engineering</span> graduate
                    from the University of Science and Technology of the Southern
                    Philippines (USTP), with a thesis focused on IoT a portable communication device for deaf-mute
                    individuals using ensemble learning.
                </p>

                <p class="text-base md:text-2xl text-justify font-sans">
                    I'm a <span class="underline decoration-dash decoration-red-300">developer</span> with a focus on
                    <span class="underline decoration-dash decoration-pink-300">frontend</span> and
                    <span class="underline decoration-dash decoration-fuchsia-300">embedded systems</span> , building
                    <span class="underline decoration-dash decoration-purple-300">web applications</span> using
                    <span class="underline decoration-dash decoration-violet-300">Vue/Nuxt</span> ,
                    <span class="underline decoration-dash decoration-indigo-300">Tailwind CSS</span> , and
                    <span class="underline decoration-dash decoration-blue-300">JavaScript/TypeScript</span> , while
                    also working with hardware
                    <span class="underline decoration-dash decoration-sky-300">hardware platforms</span> like
                    <span class="underline decoration-dash decoration-cyan-300">Arduino</span> ,
                    <span class="underline decoration-dash decoration-teal-300">ESP-32</span> , and
                    <span class="underline decoration-dash decoration-emerald-300">Raspberry Pi</span> for
                    <span class="underline decoration-dash decoration-green-300">IoT projects</span> . I enjoy the
                    challenge of working across both
                    <span class="underline decoration-dash decoration-lime-300">software</span> and
                    <span class="underline decoration-dash decoration-yellow-300">hardware</span> from crafting
                    <span class="underline decoration-dash decoration-amber-300">clean</span> ,
                    <span class="underline decoration-dash decoration-orange-300">responsive UIs</span> to
                    <span class="underline decoration-dash decoration-red-200">wiring circuits</span> and
                    <span class="underline decoration-dash decoration-pink-200">writing firmware</span> .
                </p>

                <p class="text-base md:text-2xl text-justify font-sans">
                    Beyond work, I love <span class="underline decoration-dash decoration-purple-200">exploring</span>
                    and <span class="underline decoration-dash decoration-blue-200">tinkering</span> with
                    <span class="underline decoration-dash decoration-cyan-200">new technologies</span> whether it's a
                    <span class="underline decoration-dash decoration-emerald-200">new framework</span> ,
                    a <span class="underline decoration-dash decoration-yellow-200">microcontroller</span> ,
                    or just something I haven't touched before. When I'm not in front of a screen,
                    I'm probably petting one of my cats or listening to music. My taste runs across rock, pop, alt
                    rock, J-rock, ballad, and pretty much anything that hits right.
                </p>

                <div class="flex flex-wrap gap-3 backdrop-blur-lg rounded-xl items-center">
                    <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                        <a href="https://github.com/deceive0112" target="_blank" class="inline-flex items-center">
                            <UIcon name="mdi:github"
                                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
                            <span
                                class="text-base md:text-xl font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">Github</span>
                        </a>
                    </div>
                    <span class="text-base md:text-lg font-mono">|</span>
                    <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                        <a href="https://www.linkedin.com/in/mike-general-256a63332/" target="_blank"
                            class="inline-flex items-center">
                            <UIcon name="mdi:linkedin"
                                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
                            <span
                                class="text-base md:text-xl font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">LinkedIn</span>
                        </a>
                    </div>
                    <span class="text-base md:text-lg font-mono">|</span>
                    <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                        <a href="mailto:mikegeneral178@gmail.com?subject=Hello&body=I want to connect!" target="_blank"
                            class="inline-flex items-center">
                            <UIcon name="mdi:email"
                                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
                            <span
                                class="text-base md:text-xl font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">Contact
                                Me!</span>
                        </a>
                    </div>
                    <span class="text-base md:text-lg font-mono">|</span>
                    <a href="/school/General-Mike_CV.pdf" target="_blank">
                        <UButton icon="material-symbols:download-rounded"
                            class="rounded-lg shadow-md cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 text-xs md:text-sm">
                            View Resume
                        </UButton>
                    </a>
                </div>
            </div>

        </div>

        <!-- Certificates Section -->
        <div class="mx-4 sm:mx-10 lg:mx-30">
            <p class="text-xl md:text-2xl mb-3">Certificates:</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div class="flex items-center p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102
          transition-all duration-300 backdrop-blur-xl shadow-lg">
                    <NuxtImg src="/school/js-1-cert.jpg" loading="lazy"
                        class="w-full h-auto rounded-2xl shadow-lg object-cover" />
                </div>

                <div class="flex items-center p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102
          transition-all duration-300 backdrop-blur-xl shadow-lg">
                    <NuxtImg src="/school/js-2-cert.jpg" loading="lazy"
                        class="w-full h-auto rounded-2xl shadow-lg object-cover" />
                </div>

                <div class="flex items-center p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102
          transition-all duration-300 backdrop-blur-xl shadow-lg">
                    <NuxtImg src="/school/IC-cert.jpg" loading="lazy"
                        class="w-full h-auto rounded-2xl shadow-lg object-cover" />
                </div>

                <div class="flex items-center p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102
          transition-all duration-300 backdrop-blur-xl shadow-lg">
                    <NuxtImg src="/school/start-up-cert.jpg" loading="lazy"
                        class="w-full h-auto rounded-2xl shadow-lg object-cover" />
                </div>

                <div class="flex items-center p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102
          transition-all duration-300 backdrop-blur-xl shadow-lg">
                    <NuxtImg src="/school/OJT-cert.jpg" loading="lazy"
                        class="w-full h-auto rounded-2xl shadow-lg object-cover" />
                </div>

            </div>
        </div>

    </div>
</template>
