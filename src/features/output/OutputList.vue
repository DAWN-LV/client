<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 min-h-56">
    <OutputCard
      v-for="output in outputs"
      :key="output.type"
      :output="output"
    />
  </div>
</template>

<script setup lang="ts">
import { Output } from "@/store/outputs/types"
import OutputCard from "@/components/card/OutputCard.vue"

defineProps<{ outputs: Output[] }>()
</script>