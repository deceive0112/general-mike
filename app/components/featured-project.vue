<script setup lang="ts">
const carouselRef = ref<HTMLDivElement | null>(null)
const shouldAnimate = ref(false)

const checkOverflow = () => {
    if (carouselRef.value) {
        const parent = carouselRef.value.parentElement
        if (parent) {
            shouldAnimate.value = carouselRef.value.scrollWidth / 2 > parent.clientWidth
        }
    }
}

onMounted(() => {
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkOverflow)
})
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

            <div class="overflow-hidden mt-2.5 relative">
                <template v-if="shouldAnimate">
                    <div
                        class="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
                    <div
                        class="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
                </template>

                <div ref="carouselRef" :class="shouldAnimate ? 'carousel-track w-max' : 'flex flex-wrap'"
                    class="text-[12px] flex gap-4">

                    <!-- original set -->
                    <div class="flex flex-col items-center gap-1 shrink-0">
                        <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                        <span class="text-gray-400">Vue</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 shrink-0">
                        <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                        <span class="text-gray-400">CSS</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 shrink-0">
                        <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                        <span class="text-gray-400">HTML</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 shrink-0">
                        <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                        <span class="text-gray-400">TypeScript</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 shrink-0">
                        <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                        <span class="text-gray-400">JavaScript</span>
                    </div>
                    <div class="flex flex-col items-center gap-1 shrink-0">
                        <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                        <span class="text-gray-400">Nuxt</span>
                    </div>

                    <!-- duplicate set — only visible when animating -->
                    <template v-if="shouldAnimate">
                        <div class="flex flex-col items-center gap-1 shrink-0">
                            <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                            <span class="text-gray-400">Vue</span>
                        </div>
                        <div class="flex flex-col items-center gap-1 shrink-0">
                            <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                            <span class="text-gray-400">CSS</span>
                        </div>
                        <div class="flex flex-col items-center gap-1 shrink-0">
                            <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                            <span class="text-gray-400">HTML</span>
                        </div>
                        <div class="flex flex-col items-center gap-1 shrink-0">
                            <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                            <span class="text-gray-400">TypeScript</span>
                        </div>
                        <div class="flex flex-col items-center gap-1 shrink-0">
                            <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                            <span class="text-gray-400">JavaScript</span>
                        </div>
                        <div class="flex flex-col items-center gap-1 shrink-0">
                            <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
                            <span class="text-gray-400">Nuxt</span>
                        </div>
                    </template>

                </div>
            </div>

            <p class="gap-2 p-1 rounded-xl text-sm md:text-lg mt-1 text-justify">Test test</p>
        </div>
    </div>
</template>