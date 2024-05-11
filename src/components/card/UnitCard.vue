<template>
  <BaseCard :icon="icon" class="cursor-pointer">
    <h5 class="capitalize text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      {{ unit.type }}
    </h5>
    <slot/>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { Unit } from "@/store/units/types"
import BaseCard from "@/components/card/BaseCard.vue"
import { IconName } from "@/components/icons"

const props = defineProps<{ unit: Unit }>()

const icon = computed<IconName>(() => {
  switch (props.unit.type) {
    case "glue": return "bottle_droplet"
    case "ink": return "feather"
    case "paper": return "sheet_plastic"

    default: return "xmark"
  }
})
</script>