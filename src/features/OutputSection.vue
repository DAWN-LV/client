<template>
  <Section title="Output" solid>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 min-h-56">
      <OutputCard
        v-for="output in store.data"
        :key="output.type"
        :output="output"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import { watch } from "vue"
import { useOutputsStore } from "@/store/outputs"
import OutputCard from "@/components/card/OutputCard.vue"
import Section from "@/components/Section.vue"

const props = defineProps<{ data: Record<string, number> }>()

const store = useOutputsStore()
watch(() => props.data, (data) => store.refresh(data))
</script>