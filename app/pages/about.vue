<script>
</script>

<template>
    <div class="pr-25 pl-25 pt-5 pb-5 rounded-3xl mb-15 mt-15">
        <div class="grid grid-cols-3 text-center gap-4 pr-20 pl-20">

            <span
                class="row-1 flex items-center text-center justify-center gap-2 p-4 rounded-xl backdrop-blur-xl shadow-lg">
                <NuxtImg src="/selfie-ghibli-style.png" loading="lazy"
                    class="w-70 h-80 xl:w-80 xl:h-90 rounded-2xl shadow-lg object-cover" />
            </span>

            <span class="row-2 flex items-center text-center justify-center gap-2 p-4 rounded-xl border-white/10
                transition-all duration-300 backdrop-blur-xl shadow-lg">
                <iframe src="https://open.spotify.com/embed/artist/58oPVy7oihAEXE0Ott6JOf" loading="lazy" width="100%" height="152"
                    frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    class="rounded-xl" />
            </span>

            <span
                class="row-span-2 col-span-2 flex items-center gap-2 p-4 rounded-xl border bg-sky-500 border-white/10 backdrop-blur-xl shadow-lg">
                <p class="text-xl text-left">Paragraph</p>
            </span>

        </div>
    </div>
    <div class="pr-25 pl-25 pt-5 pb-5 rounded-3xl">
        <p class="text-xl md:text-2xl mb-3 pl-20">Certificates:</p>
        <div class="grid grid-cols-2 text-center gap-4 pr-20 pl-20">

            <span class="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102 
                transition-all duration-300 backdrop-blur-xl shadow-lg">
                <NuxtImg src="/school/js-1-cert.jpg" loading="lazy"
                    class="w-140 h-80 xl:w-160 xl:h-90 rounded-2xl shadow-lg object-cover" />
            </span>

            <span class="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102 
                transition-all duration-300 backdrop-blur-xl shadow-lg">
                <NuxtImg src="/school/js-2-cert.jpg" loading="lazy"
                    class="w-140 h-80 xl:w-160 xl:h-90 rounded-2xl shadow-lg object-cover" />
            </span>

            <span class="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-102 
                transition-all duration-300 backdrop-blur-xl shadow-lg">
                <NuxtImg src="/school/IC-cert.jpg" loading="lazy"
                    class="w-140 h-80 xl:w-160 xl:h-90 rounded-2xl shadow-lg object-cover" />
            </span>

            <span class="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-105 
                transition-all duration-300 backdrop-blur-xl shadow-lg">
                <NuxtImg src="/school/start-up-cert.jpg" loading="lazy"
                    class="w-140 h-80 xl:w-160 xl:h-90 rounded-2xl shadow-lg object-cover" />
            </span>

            <span class="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-105 
                transition-all duration-300 backdrop-blur-xl shadow-lg">
                <NuxtImg src="/school/OJT-cert.jpg" loading="lazy"
                    class="w-140 h-80 xl:w-160 xl:h-90 rounded-2xl shadow-lg object-cover" />
            </span>

            <span class="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-gray-500/50 hover:bg-white/5 hover:scale-105 
                transition-all duration-300 backdrop-blur-xl shadow-lg">
            </span>

        </div>
    </div>
</template>