<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <!-- CHANGED: removed fixed pr-30 pl-30, added responsive padding and bottom margin -->
  <div class="mt-10 md:mt-15 mb-10 lg:mb-10 lg:mx-30">
    <!-- CHANGED: grid-cols-1 on mobile, grid-cols-7 on xl only -->
    <div class="grid grid-cols-1 xl:grid-cols-7 gap-6">

      <!-- Programming Languages -->
      <!-- CHANGED: removed fixed row/col positioning on mobile, kept on xl -->
      <div class="xl:row-start-1 xl:col-start-1 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">Programming Languages</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">TypeScript</span>
            </div>
            <p class="text-[10px] text-left">Strong typing, Interface design, Code maintainability.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">JavaScript</span>
            </div>
            <p class="text-[10px] text-left">DOM manipulation, Event handling, Async programming.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:python" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Python</span>
            </div>
            <p class="text-[10px] text-left">Scripting, Automation, Data processing.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:cplusplus" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">C++</span>
            </div>
            <p class="text-[10px] text-left">Memory management, Low-level programming, Performance optimization.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:python" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">MicroPython</span>
            </div>
            <p class="text-[10px] text-left">Microcontroller programming, Sensor integration, IoT development.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:kotlin" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Kotlin</span>
            </div>
            <p class="text-[10px] text-left">Android development, Functional programming, JVM development.</p>
          </a>

        </div>
      </div>

      <!-- Frontend -->
      <div class="xl:row-start-2 xl:col-start-5 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">Frontend</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Vue</span>
            </div>
            <p class="text-[10px] text-left">Component architecture, State management, Reactive UI.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Nuxt</span>
            </div>
            <p class="text-[10px] text-left">Server-side rendering, File-based routing, Full-stack development.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:tailwindcss" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Tailwind</span>
            </div>
            <p class="text-[10px] text-left">Responsive design, Utility-first styling, Rapid prototyping.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="vscode-icons:file-type-light-shadcn" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
              <span class="text-[7px] text-gray-400">Shadcn UI</span>
            </div>
            <p class="text-[10px] text-left">Accessible components, UI customization, Design systems.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:flutter" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Flutter</span>
            </div>
            <p class="text-[10px] text-left">Cross-platform development, Widget composition, Mobile UI.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">HTML</span>
            </div>
            <p class="text-[10px] text-left">Semantic markup, Accessibility, Web structure.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:css" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">CSS</span>
            </div>
            <p class="text-[10px] text-left">Animations, Layout design, Visual styling.</p>
          </a>

        </div>
      </div>

      <!-- Backend & Database -->
      <div class="xl:row-start-3 xl:col-start-1 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">Backend & Database</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:firebase" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Firebase</span>
            </div>
            <p class="text-[10px] text-left">User authentication, Real-time database, Cloud functions.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="simple-icons:tanstack" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">TanStack Q</span>
            </div>
            <p class="text-[10px] text-left">Server state management, Data caching, API integration.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:bun" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Bun</span>
            </div>
            <p class="text-[10px] text-left">Fast runtime execution, Package management, Build tooling.</p>
          </a>

        </div>
      </div>

      <!-- DevOps & Tools -->
      <div class="xl:row-start-4 xl:col-start-5 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">DevOps & Tools</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-yellow-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:git" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Git</span>
            </div>
            <p class="text-[10px] text-left">Version control, Branching strategy, Code collaboration.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-yellow-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:github" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
              <span class="text-[7px] text-gray-400">GitHub</span>
            </div>
            <p class="text-[10px] text-left">Code review, CI/CD workflows, Open source contribution.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-yellow-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:docker" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Docker</span>
            </div>
            <p class="text-[10px] text-left">Containerization, Environment consistency, Deployment.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-yellow-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:vercel" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
              <span class="text-[7px] text-gray-400">Vercel</span>
            </div>
            <p class="text-[10px] text-left">Frontend deployment, Preview environments, Edge functions.</p>
          </a>

        </div>
      </div>

      <!-- IDEs & Dev Tools -->
      <div class="xl:row-start-5 xl:col-start-1 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">IDEs & Dev Tools</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:vscode" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">VS Code</span>
            </div>
            <p class="text-[10px] text-left">Code editing, Debugging, Extension customization.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:webstorm" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">WebStorm</span>
            </div>
            <p class="text-[10px] text-left">Smart refactoring, JS/TS development, Code analysis.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:intellij" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">IntelliJ</span>
            </div>
            <p class="text-[10px] text-left">Multi-language development, Advanced debugging, Code generation.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:arduino" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Arduino IDE</span>
            </div>
            <p class="text-[10px] text-left">Firmware uploading, Serial monitoring, Library management.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:arduino" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Wokwi</span>
            </div>
            <p class="text-[10px] text-left">Circuit simulation, Embedded prototyping, Online testing.</p>
          </a>

        </div>
      </div>

      <!-- Hardware & IoT -->
      <div class="xl:row-start-6 xl:col-start-5 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">Hardware & IoT</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:arduino" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Arduino</span>
            </div>
            <p class="text-[10px] text-left">Circuit wiring, Sensor integration, Embedded programming.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="bx:bxs-microchip" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
              <span class="text-[7px] text-gray-400">ESP-32</span>
            </div>
            <p class="text-[10px] text-left">WiFi/Bluetooth programming, Dual-core processing, Low-power IoT development.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:raspberrypi" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Raspberry Pi</span>
            </div>
            <p class="text-[10px] text-left">Linux-based computing, GPIO programming, Single-board project development.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="simple-icons:tinkercad" class="rounded-xl shadow-xl size-8 md:size-10 p-1 dark:invert" />
              <span class="text-[7px] text-gray-400">TinkerCAD</span>
            </div>
            <p class="text-[10px] text-left">Circuit simulation, 3D modeling, Design prototyping.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="simple-icons:autodesk" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">EAGLE</span>
            </div>
            <p class="text-[10px] text-left">PCB layout, Schematic design, Circuit board development.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-orange-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="skill-icons:autocad-dark" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">AutoCAD</span>
            </div>
            <p class="text-[10px] text-left">Technical drafting, 2D/3D modeling, Engineering design.</p>
          </a>

        </div>
      </div>

      <!-- Other Skills -->
      <div class="xl:row-start-7 xl:col-start-1 xl:col-span-3 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">
        <p class="text-2xl md:text-3xl mb-3 text-center">Other Skills</p>
        <div class="grid grid-cols-2 text-center gap-4 backdrop-blur-md">

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:wordpress" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">WordPress</span>
            </div>
            <p class="text-[10px] text-left">Site building, Plugin management, Theme customization.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="hugeicons:office-365" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">Office 365</span>
            </div>
            <p class="text-[10px] text-left">Documentation, Data reporting, Presentation design.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="devicon:libgdx" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">libGDX</span>
            </div>
            <p class="text-[10px] text-left">Game development, 2D/3D rendering, Physics simulation.</p>
          </a>

          <a href=""
            class="flex items-center gap-1.5 p-1.5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 backdrop-blur-xl shadow-lg">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <UIcon name="simple-icons:tanstack" class="rounded-xl shadow-xl size-8 md:size-10 p-1" />
              <span class="text-[7px] text-gray-400">TanStack R</span>
            </div>
            <p class="text-[10px] text-left">Type-safe routing, Navigation management, SPA development.</p>
          </a>

        </div>
      </div>

    </div>
  </div>
</template>
