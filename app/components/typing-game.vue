<script setup>
const words = [
  'javascript', 'typescript', 'vue', 'nuxt', 'tailwind',
  'component', 'reactive', 'computed', 'template', 'frontend',
  'backend', 'database', 'firebase', 'docker', 'vercel',
  'function', 'variable', 'boolean', 'interface', 'developer',
  'program', 'IoT', 'arduino', 'microprocessor', 'figma'
]

const currentWord = ref('')
const typingInput = ref('')
const score = ref(0)
const timeLeft = ref(30)
const totalTime = ref(30)
const gameStarted = ref(false)
const gameOver = ref(false)
const inputRef = ref(null)
let typingTimer = null

const wpm = computed(() => {
  const elapsed = (totalTime.value - timeLeft.value) / 60
  if (elapsed === 0) return 0
  return Math.round(score.value / elapsed)
})

const isWrong = computed(() => {
  if (!typingInput.value) return false
  return !currentWord.value.startsWith(typingInput.value)
})

const getRandomWord = () => words[Math.floor(Math.random() * words.length)]

const startGame = () => {
  score.value = 0
  timeLeft.value = 30
  gameOver.value = false
  gameStarted.value = true
  typingInput.value = ''
  currentWord.value = getRandomWord()

  nextTick(() => inputRef.value?.focus())

  clearInterval(typingTimer)
  typingTimer = setInterval(() => {
    if (timeLeft.value <= 0) {
      clearInterval(typingTimer)
      gameOver.value = true
      gameStarted.value = false
      return
    }
    timeLeft.value--
  }, 1000)
}

const checkInput = () => {
  if (typingInput.value.trim() === currentWord.value) {
    score.value++
    typingInput.value = ''
    currentWord.value = getRandomWord()
  }
}

onUnmounted(() => clearInterval(typingTimer))
</script>

<template>
  <!-- CHANGED: responsive padding -->
  <div class="p-3 md:p-4 rounded-xl flex flex-col items-center gap-3 shadow-md">

    <!-- CHANGED: responsive gap and text -->
    <div class="flex gap-4 md:gap-8 text-sm">
      <div class="flex flex-col items-center">
        <span class="text-xs md:text-sm">Score</span>
        <span class="text-base md:text-lg font-bold text-green-400">{{ score }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-xs md:text-sm">Time</span>
        <span class="text-base md:text-lg font-bold" :class="timeLeft <= 10 ? 'text-red-400' : 'text-green-400'">{{ timeLeft }}s</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-xs md:text-sm">WPM</span>
        <span class="text-base md:text-lg font-bold text-yellow-400">{{ wpm }}</span>
      </div>
    </div>

    <!-- CHANGED: responsive text size -->
    <div class="text-lg md:text-xl font-mono font-bold tracking-widest p-2 rounded-xl bg-white/5 w-full text-center transition-colors duration-150 shadow-sm"
      :class="isWrong ? 'text-red-400' : ''">
      {{ gameStarted ? currentWord : '???' }}
    </div>

    <!-- CHANGED: responsive text size -->
    <input ref="inputRef" v-model="typingInput" @input="checkInput"
      :disabled="!gameStarted" placeholder="Start typing..."
      class="w-full px-3 py-2 rounded-xl bg-white/5 border focus:outline-none focus:ring-1 text-center font-mono text-base md:text-lg disabled:opacity-50 transition-colors duration-150 shadow-sm"
      :class="isWrong ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-blue-500'" />

    <Transition enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0">
      <div v-if="gameOver" class="text-center">
        <!-- CHANGED: responsive text size -->
        <p class="text-lg md:text-xl font-bold">Game Over!</p>
        <p class="text-xs md:text-sm mt-1">
          Words: <span class="text-blue-400 mr-2">{{ score }}</span>
          WPM: <span class="text-yellow-400">{{ wpm }}</span>
        </p>
      </div>
    </Transition>

    <button @click="startGame"
      class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold uppercase text-xs md:text-sm cursor-pointer transition-colors duration-200 border-2 shadow-md">
      {{ gameOver || !gameStarted ? 'Start' : 'Restart' }}
    </button>
  </div>
</template>
