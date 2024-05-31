<template>
  <div class="relative inline-flex items-center justify-center w-full">
    <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <span v-if="$slots" class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-gray-50 left-1/2 dark:text-white dark:bg-gray-800">
      <slot/>
    </span>
  </div>
</template>