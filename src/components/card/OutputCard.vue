<template>
  <BaseCard :icon="icon">
    <div class="flex flex-col justify-center items-center">
      <div class="absolute -top-2 -right-2 p-2 uppercase text-xs text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {{ output.info.type }}
      </div>
      <h5 class="w-20 capitalize text-center text-base font-semibold truncate tracking-tight text-gray-900 dark:text-white">
        {{ output.info.name }}
      </h5>
      <p class="text-xs text-gray-500">
        {{ output.count }} count
      </p>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { Ouput } from "@/store/outputs/types"
import { IconName } from "@/components/icons"
import BaseCard from "@/components/card/BaseCard.vue"

const props = defineProps<{ output: Ouput }>()

const icon = computed<IconName>(() => {
  switch (props.output.type) {
    case "journal": return "newspaper"
    case "paper": return "sheet_plastic"
    case "planner": return "note_sticky"

    case "notebook":
    case "diary":
    case "photo_album":
    case "sketchbook": return "book"

    default: return "xmark"
  }
})
</script>