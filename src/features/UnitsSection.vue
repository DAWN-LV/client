<template>
  <Section title="Units">
    <Draggable :list="[...store.data]" group="units" item-key="type" class="flex gap-4">
      <template #item="{ element }">
        <UnitCard :unit="element"/>
      </template>
    </Draggable>
  </Section>
</template>

<script setup lang="ts">
import { useUnitsStore } from "@/store/units"
import Draggable from "vuedraggable"
import UnitCard from "@/components/card/UnitCard.vue"
import Section from "@/components/Section.vue"

const store = useUnitsStore()
</script>