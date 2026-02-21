<script setup>
const showSuccess = ref(false)
const isSubmitting = ref(false)

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  honeypot: ''
})

const submitForm = async () => {
  if (formData.honeypot) return

  isSubmitting.value = true

  try {
    await fetch('https://formsubmit.co/ajax/75a004e93226627edec82f72fb9af88e', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
    })

    showSuccess.value = true

    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''

    setTimeout(() => {
      showSuccess.value = false
    }, 6000)

  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-500"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-if="showSuccess" 
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-green-500 text-white rounded-xl shadow-xl">
      <UIcon name="material-symbols:check-circle" class="size-6" />
      <div>
        <p class="font-bold">Message Sent!</p>
        <p class="text-sm opacity-90">I'll get back to you as soon as possible.</p>
      </div>
    </div>
  </Transition>

  <div class="flex-col p-4 rounded-xl backdrop-blur-2xl shadow-xl" id="form">
    <h3 class="text-2xl font-bold">Let's Work Together</h3>
    <p class="mt-3 text-lg">I'm currently open to new opportunities and collaborations. 
      If you're interested in working together or just want to connect, feel free to reach out!</p>

    <form @submit.prevent="submitForm">
      <input type="text" name="_honey" v-model="formData.honeypot" class="hidden" />

      <div class="flex flex-row gap-10 text-[1rem] mt-6">
        <div class="flex flex-col w-full">
          <span class="text-[1rem] mb-1">Name<span class="text-red-500">*</span></span>
          <input type="text" maxlength="60" name="name" v-model="formData.name" placeholder="John Doe" required
            class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div class="flex flex-col w-full">
          <span class="text-[1rem] mb-1">Email<span class="text-red-500">*</span></span>
          <input type="email" maxlength="120" name="email" v-model="formData.email" placeholder="johndoe@example.com" required
            class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>

      <div class="flex flex-col text-[1rem] mt-5">
        <span class="text-[1rem] mb-1">Subject<span class="text-red-500">*</span></span>
        <textarea name="subject" maxlength="160" v-model="formData.subject" placeholder="Project Inquiry, collaboration, etc." required
          class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" rows="1"></textarea>
      </div>

      <div class="flex flex-col text-[1rem] mt-5">
        <span class="text-[1rem] mb-1">Message<span class="text-red-500">*</span></span>
        <textarea name="message" maxlength="600" v-model="formData.message" placeholder="Tell me about your project, timeline, and requirements..." rows="6" required
          class="w-full px-3 py-2 rounded-md border-0 ring-1 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" :disabled="isSubmitting"
        class="flex items-center justify-center mt-6 px-4 py-2 text-[1.2rem] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        <UIcon :name="isSubmitting ? 'svg-spinners:ring-resize' : 'prime:send'" class="size-5 inline-flex mr-1" />
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>