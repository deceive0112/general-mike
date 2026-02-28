<script setup lang="ts">
const { scrollContainer, onMouseDown, onMouseLeave, onMouseUp, onMouseMove } = useDragScroll()
</script>

<template>
    <div class="col-span-1 lg:col-span-3 lg:mr-10 w-full max-w-2xl lg:max-w-none">
        <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-1">Featured
            Project</h2>
        <div class="p-3 rounded-xl backdrop-blur-sm shadow-xl hover:shadow-gray-300/10">
            <div
                class="flex flex-col rounded-xl overflow-hidden shadow-xl hover:scale-102 transition-all duration-300 cursor-pointer border border-white/10">
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

            <div
                ref="scrollContainer"
                @mousedown="onMouseDown"
                @mouseleave="onMouseLeave"
                @mouseup="onMouseUp"
                @mousemove="onMouseMove"
                class="overflow-x-auto mt-2.5 cursor-grab active:cursor-grabbing select-none"
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

                </div>
            </div>

            <p class="gap-2 p-2 rounded-xl text-sm md:text-lg mt-1 text-justify">Test test</p>
        </div>
    </div>
</template>
