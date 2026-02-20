<script setup>
const showGif = useState('showGif', () => true)
</script>

<template>
    <div id="home"
        class="flex flex-row justify-between sticky top-0 left-0 w-full z-50 bg-transparent items-center text-center backdrop-blur-sm">
        <a href="#home">
        <span class="inline-flex">
            <UIcon name="mdi:tilde" class="w-6 h-6 text-blue-300 hover:bg-sky-600 mt-0.5" />
        </span>
        </a>
        <nav class="flex items-center gap-9">
            <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">About</span>
            <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">Projects</span>
            <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">Tech Stack</span>
            <span class="text-lg font-bold font-mono hover:text-blue-500 transition-colors duration-200 cursor-pointer">Blog</span>
            <span class="flex flex-row gap-2">
                <UColorModeButton class="hover:text-blue-500 duration-200 cursor-pointer"/>
                <UButton
                    class="hover:text-blue-500 duration-200 cursor-pointer"
                    :icon="!showGif ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" color="gray" variant="ghost"
                    @click="showGif = !showGif" />
            </span>
        </nav>
    </div>
</template>