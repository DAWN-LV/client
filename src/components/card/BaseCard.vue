<template>
  <div v-if="isVisible" class="relative flex flex-col gap-1 items-center justify-center w-24 h-24 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-center">
      <Icon :name="icon" class="dark:text-white"/>
    </div>
    <Button 
      variant="negative"
      icon="xmark"
      class="absolute -top-2 -right-2"
      @click="onClear"
    />
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconName } from "@/components/icons"
import Icon from "@/components/icons/Icon.vue"
import Button from '@/components/Button.vue'

const isVisible = ref(true)

defineProps<{ icon: IconName }>()
function onClear() {
  isVisible.value = false
}
</script>