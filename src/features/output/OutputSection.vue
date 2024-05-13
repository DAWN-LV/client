<template>
  <Section title="Output" solid>
    <OutputList :outputs="store.data"/>
  </Section>
</template>

<script setup lang="ts">
import { useOutputsStore } from "@/store/outputs"
import Section from "@/components/Section.vue"
import OutputList from "@/features/output/OutputList.vue"

const store = useOutputsStore()
</script>