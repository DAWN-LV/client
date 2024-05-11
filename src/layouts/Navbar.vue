<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 z-50">
    <div class="container flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Icon name="sheet_plastic" class="text-blue-700" alt="Flowbite Logo"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {{ $config.app.title }}
        </span>
      </a>
      <div class="w-auto">
        <Button
          variant="primary"
          :icon="isDark ? 'sun' : 'moon'"
          @click.prevent="toggleDark()"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import Button from "@/components/Button.vue"
import Icon from "@/components/icons/Icon.vue"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>