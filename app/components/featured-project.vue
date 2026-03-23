<script setup lang="ts">
const { scrollContainer, onMouseDown, onMouseLeave, onMouseUp, onMouseMove } = useDragScroll()
</script>

<template>
    <div class="col-span-1 lg:col-span-3 lg:mr-10 w-full max-w-2xl lg:max-w-none">
        <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-1">Featured
            Project (WIP)</h2>
        <div class="p-3 rounded-xl backdrop-blur-sm shadow-xl hover:shadow-gray-300/10">
            <div
                class="group flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-102 transition-all duration-300 cursor-pointer border border-white/10">

                <a href="https://groupad.vercel.app/" target="_blank" class="relative block w-full"
                    style="padding-top: 50%">
                    <NuxtImg src="https://opengraph.githubassets.com/2/deceive0112/Groupad"
                        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                        preload
                        @error="(e) => { const img = (e as Event).target as HTMLImageElement | null; if (img) img.src = '/fallback-thumbnail/featured-fallback.png' }" />
                    <img src="https://api.microlink.io/?url=https://groupad.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
                        class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy" style="object-position: top" />
                </a>

                <a href="https://github.com/deceive0112/Groupad" target="_blank"
                    class="flex items-center gap-2 px-3 py-2 bg-white/5">
                    <UIcon name="mdi:github" class="size-4 text-gray-400" />
                    <span class="text-2xs md:text-lg text-gray-400">github.com</span>
                    <span
                        class="text-2xs md:text-lg font-bold ml-1 truncate relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full cursor-pointer">deceive0112/Groupad</span>
                </a>

            </div>

            <div ref="scrollContainer" @mousedown="onMouseDown" @mouseleave="onMouseLeave" @mouseup="onMouseUp"
                @mousemove="onMouseMove" class="overflow-x-auto mt-2.5 cursor-grab active:cursor-grabbing select-none"
                style="scrollbar-width: none;">

                <div class="text-[10px] flex gap-2 w-max cursor-grab">

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:vuejs" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">Vue</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12 ">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:css" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">CSS</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:html5" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">HTML</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:typescript" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">TypeScript</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:javascript" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">JavaScript</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:nuxtjs" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">Nuxt</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="hugeicons:shadcn" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">Shadcn UI</span>
                    </div>

                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:tailwindcss" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">Tailwind</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 shrink-0 w-12">
                        <div class="flex items-center justify-center w-15 h-15">
                            <UIcon name="devicon:bun" class="size-12 rounded-2xl" />
                        </div>
                        <span class="text-gray-400 text-center">Bun</span>
                    </div>

                </div>
            </div>
            <p class="p-2 rounded-xl text-sm md:text-xl mt-1">Work In Progress</p>
            <p class="gap-2 p-2 rounded-xl text-sm md:text-lg mt-1 text-justify">Group+pad brings your people together
                in one shared space,
                collaborate on notes, assign and track tasks, plan upcoming events, and follow creators you love. Built
                for everything from
                casual friend groups to structured teams and classrooms.</p>
        </div>
    </div>
</template>
