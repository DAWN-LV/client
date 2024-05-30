<template>
  <div class="flex justify-center sm:justify-start flex-wrap gap-4">
    <SelectionList v-slot="{ selected, select }" @update:model-value="onSelect">
      <OutputCard
        v-for="output in outputs"
        :key="output.type"
        :output="output"
        :class="{ 'outline outline-2 outline-blue-500': selected === output }"
        @click="select(output)"
      />
    </SelectionList>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue"
import { Output } from "@/store/outputs/types"
import { usePointsStore } from "@/store/points"
import OutputCard from "@/components/card/OutputCard.vue"
import SelectionList from "@/components/SelectionList.vue"

const props = defineProps<{ outputs: Output[] }>()

const store = usePointsStore()

watch(props, ({ outputs }) => {
  if (!outputs.length) {
    store.clear()
  }
})

function onSelect(output?: Output) {
  if (output) {
    store.refresh(output)
  }

  store.clear()
}
</script>