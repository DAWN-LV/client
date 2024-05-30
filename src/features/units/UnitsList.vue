<template>
  <Draggable 
    :list="units" 
    :group="{ name: 'units', pull: 'clone', put: false }" 
    item-key="type"
    class="flex justify-center sm:justify-start flex-wrap gap-4"
  >
    <template #item="{ element }">
      <UnitCard :key="element.type" :unit="element"/>
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import { Unit } from "@/store/units/types"
import UnitCard from "@/components/card/UnitCard.vue"
import Draggable from "vuedraggable"

defineProps<{ units: Unit[] }>()
</script>