<template>
  <slot v-bind="{ select, selected }"/>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(["update:model-value"])

const selected = ref()

function select(item: unknown) {
  if (selected.value == item) {
    selected.value = null
  }
  else {
    selected.value = item
  }
  
  emit("update:model-value", selected.value)
}
</script>