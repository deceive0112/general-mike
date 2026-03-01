<script setup lang="ts">
definePageMeta({
  layout: "default",
})

const share = async (title: string, slug: string) => {
  const url = `${window.location.origin}/blog/${slug}`
  if (navigator.share) {
    await navigator.share({ title, url })
  } else {
    await navigator.clipboard.writeText(url)
    alert('Link copied!')
  }
}

// CHANGED: added slug to each post
const posts = [
  { id: 1, title: 'Post-1', slug: 'post-1' },
  { id: 2, title: 'Post-2', slug: 'post-2' },
  { id: 3, title: 'Post-3', slug: 'post-3' },
]
</script>

<template>
  <div class="max-w-3xl mx-auto pt-15 pb-15">

    <!-- My Day -->
    <div class="mb-6">
      <div class="flex flex-wrap gap-3 p-4 rounded-xl border border-white/10 backdrop-blur-xl shadow-lg">
        <div
          class="shrink-0 w-24 h-36 rounded-xl bg-sky-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300">
          <span class="text-xs text-center font-semibold">My Day 01</span>
        </div>
        <div
          class="shrink-0 w-24 h-36 rounded-xl bg-purple-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300">
          <span class="text-xs text-center font-semibold">My Day 02</span>
        </div>
      </div>
    </div>

    <!-- Posts -->
    <div class="flex flex-col gap-4">

      <div v-for="post in posts" :key="post.id"
        class="rounded-xl border border-white/10 backdrop-blur-xl shadow-lg overflow-hidden">

        <!-- CHANGED: clicking post body navigates to post page -->
        <NuxtLink :to="`/blog/${post.slug}`">
          <div class="p-4 hover:bg-white/5 transition-all duration-300 cursor-pointer">
            <p class="text-base">{{ post.title }}</p>
          </div>
        </NuxtLink>

        <div class="border-t border-white/10 mx-4" />

        <div class="flex items-center px-4 py-2 gap-1">

          <!-- CHANGED: comment navigates to post page -->
          <NuxtLink :to="`/blog/${post.slug}`"
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 flex-1 justify-center">
            <UIcon name="mdi:comment-outline" class="size-5" />
            <span>Comment</span>
          </NuxtLink>

          <!-- Share -->
          <button @click="share(post.title, post.slug)"
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 flex-1 justify-center">
            <UIcon name="mdi:share-outline" class="size-5" />
            <span>Share</span>
          </button>

        </div>

      </div>

    </div>
  </div>
</template>
