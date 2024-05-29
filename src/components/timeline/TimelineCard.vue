<template>
  <li class="relative mb-6 sm:mb-0">
    <div class="flex items-center">
      <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
        <div class="flex items-center justify-center text-blue-800 dark:text-blue-300">
          {{ index }}
        </div>
      </div>
      <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3 sm:pe-8">
      <h3 :title="title" class="text-lg font-semibold text-gray-900 dark:text-white truncate">
        {{ title }}
      </h3>
      <div v-if="$slots.helper" class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        <slot name="helper"/>
      </div>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        {{ content }}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{ title: string, content: string, index: number }>()
</script>