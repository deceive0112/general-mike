<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

const isHoveredEdu = ref(false)

// Contribution Grid Logic
interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

const weeks = ref<ContributionDay[][]>([])
const isLoading = ref(true)
const hasError = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)

// Drag-to-Scroll State
const isDragging = ref(false)
let startX = 0
let scrollLeft = 0

function startDrag(e: MouseEvent | TouchEvent) {
  if (!scrollContainer.value) return
  isDragging.value = true

  const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
  startX = pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
}

function stopDrag() {
  isDragging.value = false
}

function doDrag(e: MouseEvent | TouchEvent) {
  if (!isDragging.value || !scrollContainer.value) return

  const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
  const x = pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 1.5
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

// Custom Tooltip State
const hoveredDay = ref<{ count: number; date: string; x: number; y: number } | null>(null)

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function handlePointerEnter(e: MouseEvent | TouchEvent, day: ContributionDay) {
  if (isDragging.value) return
  const target = e.currentTarget as HTMLElement
  if (!target) return

  const rect = target.getBoundingClientRect()
  hoveredDay.value = {
    count: day.count,
    date: formatDate(day.date),
    x: rect.left + rect.width / 2,
    y: rect.top - 8
  }
}

function handlePointerLeave() {
  hoveredDay.value = null
}

function handleOutsideClick(e: Event) {
  const target = e.target as HTMLElement
  if (!target.closest('.contribution-block')) {
    hoveredDay.value = null
  }
}

// Map contribution level to portfolio theme colors
const getColor = (level: number) => {
  switch (level) {
    case 1: return '#0e4429'
    case 2: return '#006d32'
    case 3: return '#26a641'
    case 4: return '#39d353'
    default: return 'rgba(255, 255, 255, 0.05)'
  }
}

// Compute month headers
const monthHeaders = computed(() => {
  const months: { name: string; colSpan: number }[] = []
  let currentMonth = ''
  let currentSpan = 0

  weeks.value.forEach((week) => {
    const firstDay = week[0]
    if (firstDay) {
      const monthName = new Date(firstDay.date).toLocaleString('en-US', { month: 'short' })
      if (monthName !== currentMonth) {
        if (currentMonth !== '') {
          months.push({ name: currentMonth, colSpan: currentSpan })
        }
        currentMonth = monthName
        currentSpan = 1
      } else {
        currentSpan++
      }
    }
  })
  if (currentMonth !== '') {
    months.push({ name: currentMonth, colSpan: currentSpan })
  }
  return months
})

onMounted(async () => {
  window.addEventListener('touchstart', handleOutsideClick)

  try {
    const res = await fetch('https://github-contributions-api.jogruber.de/v4/deceive0112?y=last')
    if (!res.ok) throw new Error('Failed to fetch contributions')

    const data = await res.json()
    const days: ContributionDay[] = data.contributions || []

    if (!days.length) throw new Error('No contribution data found')

    const groupedWeeks: ContributionDay[][] = []
    let currentWeek: ContributionDay[] = []

    days.forEach((day: ContributionDay) => {
      currentWeek.push(day)
      if (currentWeek.length === 7) {
        groupedWeeks.push(currentWeek)
        currentWeek = []
      }
    })
    if (currentWeek.length) groupedWeeks.push(currentWeek)

    weeks.value = groupedWeeks

    await nextTick()
    if (scrollContainer.value) {
      scrollContainer.value.scrollLeft = scrollContainer.value.scrollWidth
    }
  } catch (e) {
    console.error('GitHub contributions API error, switching to fallback:', e)
    hasError.value = true
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  window.removeEventListener('touchstart', handleOutsideClick)
})
</script>

<template>
  <!-- Educational Background -->
  <div class="col-span-1 md:col-span-2 lg:col-span-2">
    <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-1">
      Educational Background
    </h2>

    <div class="flex flex-col gap-2 p-3 rounded-xl backdrop-blur-2xl shadow-xl relative"
      @mouseenter="isHoveredEdu = true" @mouseleave="isHoveredEdu = false">
      <div class="absolute left-11 md:left-13 top-0 bottom-0 w-px bg-white/20 light:bg-black/20 z-0"></div>

      <!-- USTP -->
      <div class="flex items-start gap-2 md:gap-3">
        <a href="https://www.ustp.edu.ph/" target="_blank">
          <img src="/school/USTP.png"
            class="w-14 h-14 md:w-20 md:h-20 min-w-14 md:min-w-20 rounded-full shadow-2xl bg-white object-contain p-1.5 shrink-0 mt-1 cursor-pointer z-10 relative" />
        </a>
        <div class="w-full">
          <p class="font-bold text-[11px] md:text-[13px] mt-2">
            University of Science and Technology of the Southern Philippines (USTP)
          </p>
          <div class="flex flex-col sm:flex-row sm:items-center">
            <p class="text-[11px] md:text-[13px] text-gray-400 mt-1">
              Bachelor of Science In Computer Engineering (BSCpE)
            </p>
            <p class="text-[11px] md:text-[13px] text-gray-400 mt-1 sm:ml-auto">2020 - 2024</p>
          </div>
          <p class="text-[11px] md:text-[12px] mt-1">Thesis:</p>
          <ul class="list-disc ml-3 px-1">
            <li class="text-[11px] md:text-[12px] mt-0.5">Specialization in IoT.</li>
            <li class="text-[11px] md:text-[12px] mt-0.5 text-justify">
              Thesis about a portable communication device for deaf-mute individuals using ensemble.
            </li>
          </ul>
        </div>
      </div>

      <!-- LDCU -->
      <Transition enter-active-class="transition-all duration-600" enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-600"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-3">
        <div v-show="isHoveredEdu" class="flex items-start gap-2 md:gap-3">
          <a href="https://www.liceo.edu.ph/" target="_blank">
            <img src="/school/LDCU.png"
              class="w-14 h-14 md:w-20 md:h-20 min-w-14 md:min-w-20 rounded-full shadow-2xl bg-white object-contain p-1.5 shrink-0 mt-1 cursor-pointer z-10 relative" />
          </a>
          <div class="w-full">
            <p class="font-bold text-[11px] md:text-[13px] mt-2">Liceo de Cagayan University (LDCU)</p>
            <div class="flex flex-col sm:flex-row sm:items-center">
              <p class="text-[11px] md:text-[13px] text-gray-400 mt-1">
                Science, Technology, Engineering, and Mathematics (STEM)
              </p>
              <p class="text-[11px] md:text-[13px] text-gray-400 mt-1 sm:ml-auto">2018 - 2020</p>
            </div>
            <div>
              <p class="text-[11px] md:text-[12px] mt-1">Research:</p>
            </div>
            <ul class="list-disc ml-3 px-1">
              <li class="text-[11px] md:text-[12px] mt-0.5">Designer of the building model's structure.</li>
              <li class="text-[11px] md:text-[12px] mt-0.5 text-justify">
                Research about the importance of implementing of buoyancy and bearing systems on buildings.
              </li>
            </ul>
          </div>
        </div>
      </Transition>

      <div class="ml-auto">
        <a href="/school/General-Mike_CV_Online.pdf" target="_blank">
          <UButton icon="material-symbols:download-rounded"
            class="rounded-lg shadow-md mt-3 cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0 text-xs md:text-sm">
            View Full Resume
          </UButton>
        </a>
      </div>
    </div>
  </div>

  <!-- Fallback UI: GitHub Streak -->
  <div v-if="hasError" class="mt-6 col-span-1 md:col-span-2 lg:col-span-2">
    <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-3">
      Github Streak
    </h2>
    <a class="flex text-center items-center justify-center md:mx-10" href="https://github.com/deceive0112"
      target="_blank">
      <img
        src="https://github-readme-streak-stats-ecru-tau.vercel.app?user=deceive0112&theme=carbonfox&background=00000000&border=00000000&currStreakLabel=94A3B8&sideLabels=94A3B8"
        alt="GitHub Streak" class="w-full rounded-lg backdrop-blur-2xl shadow-2xl" loading="lazy" />
    </a>
  </div>

  <!-- Primary UI: GitHub Contributions Grid -->
  <div v-else class="mt-6 col-span-1 md:col-span-2 lg:col-span-2">
    <h2 class="flex text-2xl md:text-3xl uppercase font-bold items-center text-center justify-center mb-3">
      Github Contributions
    </h2>

    <div class="
      group
      relative
      overflow-hidden
      rounded-xl
      border-0
      backdrop-blur-2xl
      shadow-xl
      p-4
      transition-all duration-300
    ">
      <!-- Centered Loading State Only -->
      <div v-if="isLoading"
        class="h-32 flex flex-col items-center justify-center gap-3 text-xs text-gray-400 select-none">
        <div class="relative flex items-center justify-center">
          <div class="w-6 h-6 border-2 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin"></div>
          <div class="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
        </div>
        <span class="font-mono tracking-wider animate-pulse text-emerald-400/90">
          Loading contribution data...
        </span>
      </div>

      <!-- Content (Only Shows After Loaded) -->
      <template v-else>
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 text-xs text-gray-300">
          <a href="https://github.com/deceive0112" target="_blank" rel="noopener noreferrer"
            class="font-medium hover:underline flex items-center gap-1">
            deceive0112's contributions
          </a>

          <a href="https://github.com/deceive0112" target="_blank" rel="noopener noreferrer"
            class="text-gray-300 hover:text-white transition-opacity duration-200 opacity-0 group-hover:opacity-100">
            View on GitHub →
          </a>
        </div>

        <!-- Drag-to-Scroll Grid Container -->
        <div ref="scrollContainer"
          class="overflow-x-auto custom-scrollbar select-none cursor-grab active:cursor-grabbing [&_*]:cursor-inherit pb-1"
          @mousedown="startDrag" @mouseleave="stopDrag" @mouseup="stopDrag" @mousemove="doDrag" @touchstart="startDrag"
          @touchend="stopDrag" @touchmove="doDrag">
          <!-- Main Grid -->
          <div class="min-w-[670px] flex gap-2 items-start py-1">
            <!-- Day Labels -->
            <div class="flex flex-col justify-between h-[88px] text-[10px] text-gray-400 pt-[18px] pr-1 select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <!-- Month Headers + Blocks Grid -->
            <div class="flex flex-col gap-1">
              <!-- Month Labels -->
              <div class="flex text-[10px] text-gray-400 select-none">
                <div v-for="(m, idx) in monthHeaders" :key="idx" :style="{ width: `${m.colSpan * 13}px` }"
                  class="truncate pr-1">
                  {{ m.colSpan >= 2 ? m.name : '' }}
                </div>
              </div>

              <!-- Blocks Grid -->
              <div class="flex gap-[3px]">
                <div v-for="(week, weekIdx) in weeks" :key="weekIdx" class="flex flex-col gap-[3px]">
                  <!-- AFTER -->
                  <div v-for="(day, dayIdx) in week" :key="dayIdx"
                    class="contribution-block w-[10px] h-[10px] rounded-[2px] transition-transform duration-150 active:scale-125 md:hover:scale-125"
                    :style="{ backgroundColor: getColor(day.level) }" @mouseenter="handlePointerEnter($event, day)"
                    @mouseleave="handlePointerLeave" @touchstart.passive="handlePointerEnter($event, day)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Floating Tooltip -->
    <Teleport to="body">
      <div v-if="hoveredDay"
        class="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full px-2.5 py-1 text-[11px] font-medium text-white bg-slate-900/95 border border-white/10 rounded-md shadow-xl backdrop-blur-md whitespace-nowrap transition-all duration-75"
        :style="{ left: `${hoveredDay.x}px`, top: `${hoveredDay.y}px` }">
        <span class="text-emerald-400 font-semibold">{{ hoveredDay.count }} contribution{{ hoveredDay.count === 1 ? '' :
          's'
          }}</span>
        on {{ hoveredDay.date }}
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
