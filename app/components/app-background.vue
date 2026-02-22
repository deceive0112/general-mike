<script setup>
import * as THREE from 'three'

const showGif = useState('showGif', () => true)

const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

const x = ref(0)
const y = ref(0)
const gifX = ref(0)
const gifY = ref(0)
const gifSrc = ref('/catdance.gif')
const canvas = ref(null)

let animationFrame
let renderer, stars, material

const lerp = (start, end, speed) => start + (end - start) * speed

const animate = () => {
  gifX.value = lerp(gifX.value, x.value, 0.03)
  gifY.value = lerp(gifY.value, y.value, 0.03)

  if (stars) {
    stars.rotation.x += 0.0003
    stars.rotation.y += 0.0003
  }

  if (renderer) {
    renderer.render(scene, camera)
  }

  animationFrame = requestAnimationFrame(animate)
}

const handleMouse = (event) => {
  x.value = event.clientX
  y.value = event.clientY
}

let scene, camera

const initThree = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  const geometry = new THREE.BufferGeometry()
  const count = 900
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 1000
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  material = new THREE.PointsMaterial({
    color: colorMode.value === 'dark' ? 0xffffff : 0x1e293b,
    size: 0.7,
  })

  stars = new THREE.Points(geometry, material)
  scene.add(stars)
  camera.position.z = 5

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

watch(() => colorMode.value, (val) => {
  if (material) {
    material.color.set(val === 'dark' ? 0xffffff : 0x1e293b)
  }
})

onMounted(() => {
  window.addEventListener('mousemove', handleMouse)
  initThree()
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouse)
  cancelAnimationFrame(animationFrame)
  renderer?.dispose()
})
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden transition-colors duration-500"
    :class="colorMode.value === 'dark' ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'">

    <canvas ref="canvas" class="absolute inset-0 w-full h-full" />

    <img v-if="!showGif"
      :src="gifSrc" class="pointer-events-none absolute w-30 h-30"
      :style="{ left: `${gifX + 90}px`, top: `${gifY + 60}px`, transform: 'translate(-50%, -50%)' }" />

  </div>
</template>