<template>
  <Section title="Units">
    <UnitsList :units="store.data"/>
  </Section>
</template>

<script setup lang="ts">
import { useUnitsStore } from "@/store/units"
import Section from "@/components/Section.vue"
import UnitsList from "@/features/units/UnitsList.vue"

const store = useUnitsStore()
</script>