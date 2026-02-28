<script setup lang="ts">
definePageMeta({
    layout: "default",
});
</script>

<template>
    <div class="mt-15 mb-15">

        <!-- About Section -->
        <!-- CHANGED: mx-30 for left/right margin, but mx-4 on mobile so it doesn't overflow -->
        <div class="mx-4 sm:mx-10 lg:mx-60 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">

            <!-- photo + spotify — stack on mobile, side by side on lg -->
            <div class="flex flex-col gap-4">

                <!-- photo -->
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

            <!-- about text -->
            <div class="lg:col-span-2 flex flex-col justify-start gap-3 p-4 rounded-xl backdrop-blur-xl shadow-lg">

                <p class="text-base md:text-xl text-justify font-sans">
                    A Computer Engineering graduate from the University of Science and Technology of the Southern
                    Philippines (USTP), with a thesis focused on IoT — a portable communication device for deaf-mute
                    individuals using ensemble learning.
                </p>

                <p class="text-base md:text-xl text-justify font-sans">
                    I'm a developer with a focus on frontend and embedded systems, building web applications using
                    Vue/Nuxt, Tailwind CSS, and TypeScript, while also working with hardware platforms like Arduino,
                    ESP-32, and Raspberry Pi for IoT projects. I enjoy the challenge of working across both software
                    and hardware — from crafting clean, responsive UIs to wiring circuits and writing firmware.
                </p>

                <p class="text-base md:text-xl text-justify font-sans">
                    Beyond work, I love exploring and tinkering with new technologies — whether it's a new framework,
                    a microcontroller, or just something I haven't touched before. When I'm not in front of a screen,
                    I'm probably petting one of my cats or listening to music. My taste runs across rock, pop, alt
                    rock, J-rock, ballad, and pretty much anything that hits right.
                </p>

                <div class="flex flex-wrap mt-5 mb-4 xl:mb-8 gap-3 backdrop-blur-lg rounded-xl p-2">
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
                        <a href="https://www.linkedin.com/in/mike-general-256a63332/" target="_blank"
                            class="inline-flex">
                            <UIcon name="mdi:linkedin"
                                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
                            <span
                                class="text-base md:text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">LinkedIn</span>
                        </a>
                    </div>
                    <span class="text-base md:text-lg font-mono">|</span>
                    <div class="group inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                        <a href="mailto:mikegeneral178@gmail.com?subject=Hello&body=I want to connect!" target="_blank"
                            class="inline-flex">
                            <UIcon name="mdi:email"
                                class="size-5 md:size-6 text-subtext1 group-hover:text-blue-500 transition-colors duration-200" />
                            <span
                                class="text-base md:text-lg font-bold font-mono text-subtext1 group-hover:text-blue-500 transition-colors duration-200 px-1">Contact Me!</span>
                        </a>
                    </div>
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
