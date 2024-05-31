<template>
  <UnitCard :unit="unit" class="group cursor-default">
    <input 
      type="number"
      :name="unit.type"
      class="absolute -bottom-4 w-16 p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="10kg"
      step="0.01" 
      min="0"
      max="100"
      required
    />

    <Button
      variant="negative"
      icon="xmark"
      class="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 duration-150"
      @click="$emit('remove')"
    />
  </UnitCard>
</template>

<script setup lang="ts">
import { Unit } from "@/store/units/types"
import UnitCard from "@/components/card/UnitCard.vue"
import Button from "@/components/Button.vue"

defineProps<{ unit: Unit }>()
defineEmits(["remove"])
</script>