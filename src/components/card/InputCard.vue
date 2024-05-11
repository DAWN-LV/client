<template>
  <UnitCard :unit="unit" class="cursor-default">
    <input 
      type="number"
      :name="unit.type"
      class="absolute -bottom-4 w-16 p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder="10kg" 
      min="0"
      required
    />
  </UnitCard>
</template>

<script setup lang="ts">
import { Unit } from "@/store/units/types"
import UnitCard from "@/components/card/UnitCard.vue"

defineProps<{ unit: Unit }>()
</script>