<script setup>
const words = [
  'javascript', 'typescript', 'vue', 'nuxt', 'tailwind',
  'component', 'reactive', 'computed', 'template', 'frontend',
  'backend', 'database', 'firebase', 'docker', 'vercel',
  'function', 'variable', 'boolean', 'interface', 'developer'
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
  <div class="p-2 rounded-xl flex flex-col items-center gap-2 shadow-md">

    <div class="flex gap-6 text-sm">
      <div class="flex flex-col items-center">
        <span>Score</span>
        <span class="text-lg font-bold text-green-400">{{ score }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span>Time</span>
        <span class="text-lg font-bold" :class="timeLeft <= 10 ? 'text-red-400' : 'text-green-400'">{{ timeLeft }}s</span>
      </div>
      <div class="flex flex-col items-center">
        <span>WPM</span>
        <span class="text-lg font-bold text-yellow-400">{{ wpm }}</span>
      </div>
    </div>

    <div class="text-xl font-mono font-bold tracking-widest p-2 rounded-xl bg-white/5 w-full text-center transition-colors duration-150 shadow-sm"
      :class="isWrong ? 'text-red-400' : ''">
      {{ gameStarted ? currentWord : '???' }}
    </div>

    <input ref="inputRef" v-model="typingInput" @input="checkInput"
      :disabled="!gameStarted" placeholder="Start typing..."
      class="w-full px-2 py-2 rounded-xl bg-white/5 border focus:outline-none focus:ring-1 text-center font-mono text-[18px] disabled:opacity-50 transition-colors duration-150 shadow-sm"
      :class="isWrong ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-blue-500'" />

    <Transition enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0">
      <div v-if="gameOver" class="text-center">
        <p class="text-[20px] font-bold">Game Over!</p>
        <p class="text-sm mt-1">
          Words: <span class="text-blue-400 mr-2">{{ score }}</span>
          WPM: <span class="text-yellow-400">{{ wpm }}</span>
        </p>
      </div>
    </Transition>

    <button @click="startGame"
      class="px-2 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold uppercase text-sm cursor-pointer transition-colors duration-200 border-2 shadow-md">
      {{ gameOver || !gameStarted ? 'Start' : 'Restart' }}
    </button>
  </div>
</template>
