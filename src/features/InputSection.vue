<template>
  <Section title="Input">
    <Draggable v-model="model" group="units" item-key="type" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 min-h-56">
      <template #item="{ element }">
        <InputCard :unit="element"/>
      </template>
      <template v-if="units.length" #header>
        <Button 
          variant="negative" 
          icon="xmark"
          class="absolute -top-4 -right-4"
          @click="onClear"
        />
      </template>
    </Draggable>
  </Section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { Unit } from "@/store/units/types"
import { useOutputsStore } from "@/store/outputs"
import Draggable from "vuedraggable"
import InputCard from "@/components/card/InputCard.vue"
import Section from "@/components/Section.vue"
import Button from "@/components/Button.vue"

const store = useOutputsStore()

const units = ref<Unit[]>([])
const model = computed({
  get: () => units.value,
  set: (value) => {
    const last = value[value.length - 1]
    if (units.value.find(unit => unit.type === last.type)) {
      return
    }

    units.value = value
  }
})

function onClear() {
  store.clear()
    .then(() => units.value = [])
}
</script>