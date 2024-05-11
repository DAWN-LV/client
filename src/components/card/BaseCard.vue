<template>
  <div class="relative flex flex-col gap-1 items-center justify-center w-24 h-24 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-center">
      <Icon :name="icon" class="dark:text-white"/>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { IconName } from "@/components/icons"
import Icon from "@/components/icons/Icon.vue"

defineProps<{ icon: IconName }>()
</script>