<template>
  <UError
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.'
    }"
  >
    <template #leading>
      <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full" />
    </template>
  </UError>
</template>