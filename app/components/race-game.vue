<script setup>
const ducks = ref([
  { id: 1, name: 'Python', icon: 'devicon:python', position: 0 },
  { id: 2, name: 'TypeScript', icon: 'devicon:typescript', position: 0 },
  { id: 3, name: 'Java', icon: 'devicon:java', position: 0 },
])

const raceStarted = ref(false)
const winner = ref(null)
let interval = null

const FINISH = 100

const startRace = () => {
  if (raceStarted.value) return
  raceStarted.value = true
  winner.value = null

  ducks.value.forEach(d => d.position = 0)

  interval = setInterval(() => {
    ducks.value.forEach(duck => {
      if (duck.position >= FINISH) return

      duck.position += Math.random() * 3

      if (duck.position >= FINISH) {
        duck.position = FINISH
        if (!winner.value) {
          winner.value = duck
          clearInterval(interval)
          raceStarted.value = false
        }
      }
    })
  }, 100)
}

const resetRace = () => {
  clearInterval(interval)
  raceStarted.value = false
  winner.value = null
  ducks.value.forEach(d => d.position = 0)
}

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="p-2 rounded-xl">
    <h2 class="text-xl font-bold text-center mb-2">🏁Language Race🏁</h2>

    <Transition enter-active-class="transition-all duration-500" enter-from-class="opacity-0 scale-50" enter-to-class="opacity-100 scale-100">
      <div v-if="winner" class="text-center items-center justify-center mb-2 p-1">
        <div class="flex items-center justify-center gap-2">
          <UIcon :name="winner.icon" class="size-6" />
          <p class="text-[16px] font-bold">{{ winner.name }} Wins! 🎉</p>
        </div>
      </div>
    </Transition>

    <div class="flex flex-col gap-1 mb-3">
      <div v-for="duck in ducks" :key="duck.id" class="flex items-center gap-1">

        <span class="text-sm w-20 shrink-0 text-right">{{ duck.name }}</span>

        <div class="flex-1 relative h-8 bg-white/5 rounded-full overflow-hidden border border-white/10">
          <div class="absolute right-0 top-0 bottom-0 w-1 bg-gray-500 z-10" />
          <div class="absolute right-2 top-0 bottom-0 flex items-center">
            <span class="text-xs text-gray-400">🏁</span>
          </div>

          <div class="absolute top-0 bottom-0 flex items-center transition-all duration-100 ease-linear"
            :style="{ left: `calc(${duck.position}% + 2px)` }">
            <UIcon :name="duck.icon" class="size-6" />
          </div>
        </div>

      </div>
    </div>

    <div class="flex justify-center gap-4">
      <button @click="startRace" :disabled="raceStarted"
        class="px-2 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold cursor-pointer transition-colors duration-200 border-2 uppercase text-sm shadow-m">
        Start Race
      </button>
      <button @click="resetRace"
        class="px-2 py-2 rounded-xl font-bold cursor-pointer transition-colors duration-200 bg-blue-500 border-2 uppercase hover:bg-blue-600 text-sm shadow-md">
        Reset
      </button>
    </div>
  </div>
</template>
