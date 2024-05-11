<template>
  <button 
    type="button" 
    class="flex items-center justify-center font-semibold text-base transition-all duration-200 gap-x-2 p-2 outline-0 disabled:opacity-60 disabled:cursor-not-allowed"
    :class="variant"
  >
    <Icon v-if="icon" :name="icon"/>
    <span v-if="label" class="flex-grow truncate">
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue"
import Icon from "@/components/icons/Icon.vue"
import { IconName } from "@/components/icons"

type Variant = "primary" | "negative"

const props = defineProps<{ 
  variant: Variant
  icon?: IconName 
  label?: string
}>()

const variant = computed<string>(() => {
  switch (props.variant) {
    case "negative":
      return "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    case "primary": 
      return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

    default:
      return "hover:opacity-60"
  }
})
</script>