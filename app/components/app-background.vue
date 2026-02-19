<script setup>
const x = ref(0)
const y = ref(0)
const gifX = ref(0)
const gifY = ref(0)
const gifSrc = ref('/catdance.gif')

let animationFrame

const lerp = (start, end, speed) => start + (end - start) * speed

const animate = () => {
  gifX.value = lerp(gifX.value, x.value, 0.1)
  gifY.value = lerp(gifY.value, y.value, 0.1)
  animationFrame = requestAnimationFrame(animate)
}

const handleMouse = (event) => {
  x.value = event.clientX
  y.value = event.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouse)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouse)
  cancelAnimationFrame(animationFrame)
})
</script>

<template>
    <div class="fixed inset-0 -z-10 overflow-hidden">
        <img :src="gifSrc" class="pointer-events-none absolute w-30 h-30"
            :style="{ left: `${gifX + 60}px`, top: `${gifY - 40}px`, transform: 'translate(-50%, -50%)' }" />
    </div>
</template>