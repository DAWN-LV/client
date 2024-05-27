<template>
  <Draggable 
    :list="units" 
    :group="{ name: 'units' }" 
    item-key="type"
    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 min-h-56"
  >
    <template #item="{ element, index }">
      <InputCard 
        :key="element.type" 
        :unit="element" 
        @remove="onRemove(index)"
      />
    </template>

    <template #header>
      <Button
        v-show="units.length"
        variant="negative"
        icon="xmark"
        class="absolute -top-5 -right-5"
        @click="onClear"
      />
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Unit } from "@/store/units/types"
import { useOutputsStore } from "@/store/outputs"
import Draggable from "vuedraggable"
import InputCard from "@/components/card/InputCard.vue"
import Button from "@/components/Button.vue"

const store = useOutputsStore()
const units = ref<Unit[]>([])

function onRemove(idx: number) {
  units.value = units.value.filter((_, index) => index !== idx)

  if (!units.value.length) {
    onClear()
  }
}

async function onClear() {
  await store.clear()
    .then(() => units.value = [])
}
</script>